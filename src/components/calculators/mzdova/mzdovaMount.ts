import Chart from "chart.js/auto";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

declare global {
  interface Window {
    mzv3SetType?: (t: "emp" | "szco") => void;
    mzv3SetDir?: (d: "gross" | "net") => void;
    mzv3SetNczd?: (v: boolean) => void;
    mzv3Email?: () => void;
    mzv3PDF?: () => void;
  }
}

export function mountMzdovaCalculator(): () => void {
  const NCZD_YEAR = 5753.79;
  const NCZD_MONTH = NCZD_YEAR / 12;
  const BONUS_U15 = 100;
  const BONUS_U18 = 50;
  const TAX1 = 0.19;
  const TAX2 = 0.25;
  const TAX_THRESHOLD = 47537.98 / 12;
  const SOC_MAX_BASE = 15730;
  const EMP_SOC = 0.094;
  const EMP_HEALTH = 0.04;
  const EMP_HEALTH_ZTP = 0.02;
  const EMPR_HEALTH = 0.11;
  const SZCO_SOC_RATE = 0.3315;
  const SZCO_HEALTH_RATE = 0.15;
  const SZCO_HEALTH_ZTP = 0.075;
  const SZCO_MIN_BASE = 715;
  const SZCO_MIN_SOC = 237.02;
  const SZCO_MIN_HEALTH = 107.25;
  const SZCO_MIN_HEALTH_ZTP = 53.62;

  let disposed = false;
  let chart: Chart | null = null;
  let empType: "emp" | "szco" = "emp";
  let dir: "gross" | "net" = "gross";
  let useNczd = true;

  const root = document.getElementById("mzv3-w");
  if (!root) return () => {};

  const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T | null;
  const fmt = (v: number) =>
    new Intl.NumberFormat("sk-SK", { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(
      Number.isFinite(v) ? v : 0,
    );
  const fmt0 = (v: number) =>
    new Intl.NumberFormat("sk-SK", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(Number.isFinite(v) ? v : 0);

  const setText = (id: string, t: string) => {
    const el = $(id);
    if (el) el.textContent = t;
  };

  const calcEmp = (gross: number, c15: number, c18: number, ztp: boolean, applyNczd: boolean) => {
    const healthRate = ztp ? EMP_HEALTH_ZTP : EMP_HEALTH;
    const socBase = Math.min(gross, SOC_MAX_BASE);
    const empSoc = socBase * EMP_SOC;
    const empHealth = gross * healthRate;
    const empTotal = empSoc + empHealth;
    const taxBase = gross - empTotal;
    const nczd = applyNczd ? NCZD_MONTH : 0;
    const taxableBase = Math.max(0, taxBase - nczd);
    const tax = taxableBase <= TAX_THRESHOLD ? taxableBase * TAX1 : TAX_THRESHOLD * TAX1 + (taxableBase - TAX_THRESHOLD) * TAX2;
    const bonus = c15 * BONUS_U15 + c18 * BONUS_U18;
    const taxAfterBonus = Math.max(0, tax - bonus);
    const bonusApplied = Math.min(tax, bonus);
    const net = gross - empTotal - taxAfterBonus;

    const emprSoc = Math.min(gross, SOC_MAX_BASE) * 0.247;
    const emprHealth = gross * EMPR_HEALTH;
    const emprTotal = emprSoc + emprHealth;
    const superGross = gross + emprTotal;
    return { gross, net, empSoc, empHealth, empTotal, taxBase, nczd, taxableBase, tax, taxAfterBonus, bonusApplied, emprSoc, emprHealth, emprTotal, superGross, healthRate };
  };

  const calcEmpFromNet = (net: number, c15: number, c18: number, ztp: boolean, applyNczd: boolean) => {
    let g = net * 1.3;
    for (let i = 0; i < 80; i++) {
      const r = calcEmp(Math.max(0, g), c15, c18, ztp, applyNczd);
      const diff = r.net - net;
      if (Math.abs(diff) < 0.005) break;
      g -= diff * 0.85;
    }
    return calcEmp(Math.max(0, g), c15, c18, ztp, applyNczd);
  };

  const calcSZCO = (income: number, ztp: boolean, useMinBase: boolean, usePausch: boolean) => {
    const healthRate = ztp ? SZCO_HEALTH_ZTP : SZCO_HEALTH_RATE;
    const minHealth = ztp ? SZCO_MIN_HEALTH_ZTP : SZCO_MIN_HEALTH;
    const taxableIncome = usePausch ? Math.max(0, income - Math.min(income * 0.6, 20000 / 12)) : income;
    let vmz = taxableIncome * 0.5;
    if (useMinBase || vmz < SZCO_MIN_BASE) vmz = SZCO_MIN_BASE;
    const socOdvod = Math.max(SZCO_MIN_SOC, vmz * SZCO_SOC_RATE);
    const healthOdvod = Math.max(minHealth, vmz * healthRate);
    const odvodyTotal = socOdvod + healthOdvod;
    const danBase = Math.max(0, taxableIncome - odvodyTotal - NCZD_MONTH);
    const dan = danBase <= TAX_THRESHOLD ? danBase * TAX1 : TAX_THRESHOLD * TAX1 + (danBase - TAX_THRESHOLD) * TAX2;
    const net = income - odvodyTotal - dan;
    return { income, net, gross: income, vmz, socOdvod, healthOdvod, odvodyTotal, taxableIncome, danBase, dan, superGross: odvodyTotal, usePausch, healthRate };
  };

  const renderChart = (labels: string[], values: number[], colors: string[]) => {
    const canvas = $("mzv3-chart") as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    chart?.destroy();
    chart = new Chart(ctx, {
      type: "doughnut",
      data: { labels, datasets: [{ data: values, backgroundColor: colors, borderWidth: 0, hoverOffset: 6 }] },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "right", labels: { font: { size: 11 }, padding: 10, boxWidth: 12 } },
          tooltip: {
            callbacks: {
              label: (c) => {
                const total = (c.dataset.data as number[]).reduce((a, b) => a + b, 0);
                return ` ${fmt(c.raw as number)} (${(((c.raw as number) / total) * 100).toFixed(1)}%)`;
              },
            },
          },
        },
      },
    });
  };

  const renderBreakdownEmp = (r: ReturnType<typeof calcEmp>) => {
    const bd = $("mzv3-breakdown");
    if (!bd) return;
    const rows = [
      `<div class="bd-row"><span class="bd-label">Hrubá mzda</span><span class="bd-val">${fmt(r.gross)}</span></div>`,
      `<div class="bd-sep">Zamestnanec – odvody</div>`,
      `<div class="bd-row"><span class="bd-label">Zdravotné poistenie (${(r.healthRate * 100).toFixed(0)}%)</span><span class="bd-val">-${fmt(r.empHealth)}</span></div>`,
      `<div class="bd-row"><span class="bd-label">Sociálne poistenie (9,4%)</span><span class="bd-val">-${fmt(r.empSoc)}</span></div>`,
      `<div class="bd-row"><span class="bd-label">Základ dane</span><span class="bd-val">${fmt(r.taxBase)}</span></div>`,
      `<div class="bd-row"><span class="bd-label">NČZD</span><span class="bd-val">-${fmt(r.nczd)}</span></div>`,
      `<div class="bd-row"><span class="bd-label">Daň</span><span class="bd-val">-${fmt(r.taxAfterBonus)}</span></div>`,
      `<div class="bd-row"><span class="bd-label">Daňový bonus</span><span class="bd-val">+${fmt(r.bonusApplied)}</span></div>`,
      `<div class="bd-row bd-total"><span class="bd-label">ČISTÁ MZDA</span><span class="bd-val">${fmt(r.net)}</span></div>`,
      `<div class="bd-sep">Zamestnávateľ (navyše)</div>`,
      `<div class="bd-row"><span class="bd-label">Zdravotné poistné zamestnávateľa</span><span class="bd-val">+${fmt(r.emprHealth)}</span></div>`,
      `<div class="bd-row"><span class="bd-label">Sociálne poistné zamestnávateľa</span><span class="bd-val">+${fmt(r.emprSoc)}</span></div>`,
      `<div class="bd-row"><span class="bd-label">Celkové náklady zamestnávateľa</span><span class="bd-val">${fmt(r.superGross)}</span></div>`,
    ];
    bd.innerHTML = rows.join("");
  };

  const renderBreakdownSzco = (r: ReturnType<typeof calcSZCO>) => {
    const bd = $("mzv3-breakdown");
    if (!bd) return;
    const rows = [
      `<div class="bd-row"><span class="bd-label">Hrubý príjem</span><span class="bd-val">${fmt(r.income)}</span></div>`,
      `<div class="bd-row"><span class="bd-label">Vymeriavací základ</span><span class="bd-val">${fmt(r.vmz)}</span></div>`,
      `<div class="bd-sep">Odvody SZČO</div>`,
      `<div class="bd-row"><span class="bd-label">Sociálne poistné</span><span class="bd-val">-${fmt(r.socOdvod)}</span></div>`,
      `<div class="bd-row"><span class="bd-label">Zdravotné poistné (${(r.healthRate * 100).toFixed(1)}%)</span><span class="bd-val">-${fmt(r.healthOdvod)}</span></div>`,
      `<div class="bd-row"><span class="bd-label">Daň z príjmu</span><span class="bd-val">-${fmt(r.dan)}</span></div>`,
      `<div class="bd-row bd-total"><span class="bd-label">ČISTÝ PRÍJEM</span><span class="bd-val">${fmt(r.net)}</span></div>`,
    ];
    bd.innerHTML = rows.join("");
  };

  const calc = () => {
    if (disposed) return;
    const salary = parseFloat(($("mzv3-salary") as HTMLInputElement | null)?.value || "0") || 0;
    const ztp = ($("mzv3-ztpp") as HTMLInputElement | null)?.checked ?? false;

    if (empType === "emp") {
      const c15 = parseInt(($("mzv3-ch15") as HTMLInputElement | null)?.value || "0", 10) || 0;
      const c18 = parseInt(($("mzv3-ch18") as HTMLInputElement | null)?.value || "0", 10) || 0;
      const r = dir === "gross" ? calcEmp(salary, c15, c18, ztp, useNczd) : calcEmpFromNet(salary, c15, c18, ztp, useNczd);
      setText("mzv3-hero-label", dir === "gross" ? "Čistá mzda" : "Zodpovedajúca hrubá mzda");
      setText("mzv3-net", fmt(dir === "gross" ? r.net : r.gross));
      setText("mzv3-net-sub", dir === "gross" ? "" : `Hrubá: ${fmt(r.gross)} / Čistá: ${fmt(r.net)}`);
      setText("mzv3-super", fmt(r.superGross));
      setText("mzv3-second-label", "Náklady zamestnávateľa");
      setText("mzv3-super-sub", "Superhrubá mzda");
      renderBreakdownEmp(r);
      renderChart(
        ["Čistá mzda", "Zdravotné", "Sociálne", "Daň", "Odvody zamestnávateľa"],
        [Math.max(0, r.net), r.empHealth, r.empSoc, r.taxAfterBonus, r.emprTotal],
        ["#29614A", "#D5C098", "#E2DCCF", "#EEE8DD", "#FDE1AF"],
      );
      setText("mzv3-gross-yr", fmt0(r.gross * 12));
      setText("mzv3-net-yr", fmt0(r.net * 12));
      setText("mzv3-odvody-yr", fmt0(r.empTotal * 12));
      setText("mzv3-tax-yr", fmt0(r.taxAfterBonus * 12));
    } else {
      const useMinBase = ($("mzv3-szco-minbase") as HTMLInputElement | null)?.checked ?? false;
      const usePausch = ($("mzv3-szco-pausch") as HTMLInputElement | null)?.checked ?? false;
      const r = calcSZCO(salary, ztp, useMinBase, usePausch);
      setText("mzv3-hero-label", "Čistý príjem SZČO");
      setText("mzv3-net", fmt(r.net));
      setText("mzv3-net-sub", "Po odvodoch a dani z príjmu");
      setText("mzv3-super", fmt(r.odvodyTotal));
      setText("mzv3-second-label", "Celkové odvody SZČO");
      setText("mzv3-super-sub", "Sociálne + zdravotné");
      renderBreakdownSzco(r);
      renderChart(
        ["Čistý príjem", "Sociálne odvody", "Zdravotné odvody", "Daň"],
        [Math.max(0, r.net), r.socOdvod, r.healthOdvod, r.dan],
        ["#29614A", "#E2DCCF", "#D5C098", "#EEE8DD"],
      );
      setText("mzv3-gross-yr", fmt0(salary * 12));
      setText("mzv3-net-yr", fmt0(r.net * 12));
      setText("mzv3-odvody-yr", fmt0(r.odvodyTotal * 12));
      setText("mzv3-tax-yr", fmt0(r.dan * 12));
    }
  };

  window.mzv3SetType = (t) => {
    empType = t;
    $("mzv3-t-emp")?.classList.toggle("sel", t === "emp");
    $("mzv3-t-szco")?.classList.toggle("sel", t === "szco");
    $("mzv3-dir-wrap")?.classList.toggle("hidden", t === "szco");
    $("mzv3-emp-opts")?.classList.toggle("hidden", t === "szco");
    $("mzv3-szco-opts")?.classList.toggle("hidden", t === "emp");
    $("mzv3-szco-income-wrap")?.classList.toggle("hidden", t === "emp");
    const label = $("mzv3-salary-label");
    if (label) label.textContent = t === "emp" ? (dir === "gross" ? "Hrubá mesačná mzda" : "Požadovaná čistá mzda") : "Hrubý mesačný príjem (pred odvodmi)";
    if (t === "szco") window.mzv3SetDir?.("gross");
    calc();
  };

  window.mzv3SetDir = (d) => {
    dir = d;
    $("mzv3-d-gross")?.classList.toggle("sel", d === "gross");
    $("mzv3-d-net")?.classList.toggle("sel", d === "net");
    const label = $("mzv3-salary-label");
    if (label) label.textContent = empType === "emp" ? (d === "gross" ? "Hrubá mesačná mzda" : "Požadovaná čistá mzda") : "Hrubý mesačný príjem (pred odvodmi)";
    calc();
  };

  window.mzv3SetNczd = (v) => {
    useNczd = v;
    $("mzv3-nczd-yes")?.classList.toggle("sel", v);
    $("mzv3-nczd-no")?.classList.toggle("sel", !v);
    calc();
  };

  window.mzv3Email = () => {
    const salary = parseFloat(($("mzv3-salary") as HTMLInputElement | null)?.value || "0") || 0;
    const net = $("mzv3-net")?.textContent || "";
    const superCost = $("mzv3-super")?.textContent || "";
    const type = empType === "emp" ? "Zamestnanec" : "SZČO";
    const body = encodeURIComponent(`Mzdová kalkulačka\n\nTyp: ${type}\nHrubá: ${fmt(salary)}\nČistá: ${net}\nNáklady/Odvody: ${superCost}`);
    window.location.href = `mailto:?subject=Mzdová kalkulačka&body=${body}`;
  };

  window.mzv3PDF = () => {
    const ne = root.querySelectorAll<HTMLElement>(".mzv3-ne");
    ne.forEach((e) => (e.style.display = "none"));
    html2canvas(root, { scale: 2, useCORS: true, backgroundColor: "#fcf7ef" })
      .then((c) => {
        const p = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
        const img = c.toDataURL("image/png");
        const w = p.internal.pageSize.getWidth();
        p.addImage(img, "PNG", 0, 0, w, Math.min((c.height * w) / c.width, 297));
        p.save("mzdova-kalkulacka.pdf");
      })
      .finally(() => ne.forEach((e) => (e.style.display = "")));
  };

  const listen = (selector: string, event: string, fn: EventListener) => {
    const els = Array.from(root.querySelectorAll(selector));
    els.forEach((el) => el.addEventListener(event, fn));
    return () => els.forEach((el) => el.removeEventListener(event, fn));
  };

  const unsubs = [
    listen("input[type=number]", "input", () => calc()),
    listen("input[type=checkbox]", "change", () => calc()),
  ];

  calc();

  return () => {
    disposed = true;
    chart?.destroy();
    unsubs.forEach((u) => u());
    delete window.mzv3SetType;
    delete window.mzv3SetDir;
    delete window.mzv3SetNczd;
    delete window.mzv3Email;
    delete window.mzv3PDF;
  };
}


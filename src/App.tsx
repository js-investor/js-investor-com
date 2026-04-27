import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
import Konzultacia from "./pages/Konzultacia.tsx";
import Gdpr from "./pages/Gdpr.tsx";
import HeroHero from "./pages/HeroHero.tsx";
import NotFound from "./pages/NotFound.tsx";

const App = () => (
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/konzultacia" element={<Konzultacia />} />
      <Route path="/gdpr" element={<Gdpr />} />
      <Route path="/herohero" element={<HeroHero />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;

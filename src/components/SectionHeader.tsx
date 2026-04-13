interface Props {
  eyebrow: string;
  headline: string;
  subHeadline?: string;
}

const SectionHeader = ({ eyebrow, headline, subHeadline }: Props) => (
  <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="headline-serif">{headline}</h2>
    {subHeadline && <p className="sub-headline">{subHeadline}</p>}
  </div>
);

export default SectionHeader;

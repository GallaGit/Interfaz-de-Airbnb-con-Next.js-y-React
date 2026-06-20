type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="space-y-1">
      <h2 className="text-2xl font-bold tracking-tight text-stone-900">{title}</h2>
      {subtitle ? <p className="text-sm text-stone-600">{subtitle}</p> : null}
    </div>
  );
}

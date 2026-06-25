type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="space-y-1.5">
      <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {subtitle ? <p className="text-sm text-muted">{subtitle}</p> : null}
    </div>
  );
}

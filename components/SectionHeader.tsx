type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-blue-400">
        {label}
      </p>

      <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}
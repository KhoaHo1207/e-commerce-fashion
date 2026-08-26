interface SectionHeaderProps {
  title: string;
  subTitle: string;
}

export default function SectionHeader({ title, subTitle }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-2xl py-8 text-center sm:py-14">
      <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>

      <p className="text-muted-foreground mt-4 px-6 text-base leading-7 sm:text-lg">
        {subTitle}
      </p>
    </div>
  );
}

import clsx from "clsx";

export default function ErrorMessage({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode | string;
}) {
  return (
    <p className={clsx("block text-rose-500 text-xs mt-1", className)}>
      {children}
    </p>
  );
}

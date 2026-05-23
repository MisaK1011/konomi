export default function FormWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mt-3 ${className}`}>{children}</div>;
}

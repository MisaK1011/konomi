export default function RequiredMark({
  className = "pl-1.5",
}: {
  className?: string;
}) {
  return <span className={`text-rose-500 ${className}`}>*</span>;
}

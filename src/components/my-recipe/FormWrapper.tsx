export default function FormWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mt-3">{children}</div>;
}

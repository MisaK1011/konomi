export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-mist-50 border border-gray-200 rounded-xl p-4">
      {children}
    </section>
  );
}

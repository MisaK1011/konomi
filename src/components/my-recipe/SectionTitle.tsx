import Divider from "../ui/Divider";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <>
      <h2 className="text-lg font-medium text-gray-600">{title}</h2>
      <div className="mt-1.5 mb-2.5">
        <Divider />
      </div>
    </>
  );
}

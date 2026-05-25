import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BackButton({ path }: { path: string }) {
  return (
    <Link
      href={path}
      className="flex items-center rounded-lg border py-2 px-3 lg:py-2.5 lg:px-3.5 border-gray-500 text-text-default"
    >
      <ArrowLeft className="mr-2 size-4 lg:size-6 text-gray-500" />
      Back
    </Link>
  );
}

import { ImagePlus } from "lucide-react";

export default function FileInput() {
  return (
    <div className="space-y-2">
      <label className="block w-full cursor-pointer rounded-md border border-gray-300 px-3 py-14 text-sm text-gray-600 bg-gray-100 text-center">
        <ImagePlus className="mx-auto size-7 my-2" />
        <p>Click to upload image</p>
        <p>JPG, PNG up to 10MB</p>
        <input type="file" className="hidden" />
      </label>
    </div>
  );
}

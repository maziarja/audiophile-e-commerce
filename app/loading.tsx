import { LoaderCircleIcon } from "lucide-react";

function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <LoaderCircleIcon size={48} className="animate-spin" />
    </div>
  );
}

export default Loading;

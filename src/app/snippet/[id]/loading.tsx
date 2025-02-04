import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <Loader2 className="w-12 h-12 text-black animate-spin" />
      <p className="mt-4 text-lg font-semibold text-gray-700">Loading, please wait...</p>
    </div>
  );
};

export default Loading;

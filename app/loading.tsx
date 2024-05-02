import { Loader2 } from "lucide-react";

export default function loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Loader2 size={150} color="white" className="animate-spin" />
    </div>
  );
}

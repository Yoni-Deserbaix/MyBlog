import { Loader2 } from "lucide-react";
import NavBar from "./components/Navbar";
export default function loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <NavBar />
      <Loader2 size={150} color="#22c55e" className="animate-spin" />
    </div>
  );
}

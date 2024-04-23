import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function App() {
  return (
    <footer className="m-10 text-center text-lg">
      <div className="font-bold underline underline-offset-8 decoration-green-500 rotate-2 hover:text-green-400 transition-all">
        Yoni Deserbaix 🦇
      </div>
      <div className="mt-3 gap-4 flex items-center justify-center  ">
        <Link
          href="https://www.linkedin.com/in/yoni-deserbaix/"
          target="_blank"
          aria-label="Navigate to the LinkedIn account"
        >
          <Linkedin size={20} />
        </Link>
        <Link
          href="https://github.com/Yoni-Deserbaix"
          target="_blank"
          aria-label="Navigate to the Github account"
        >
          <Github size={20} />
        </Link>
      </div>
    </footer>
  );
}

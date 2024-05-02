import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="max-w-6xl m-auto">
        <div className="border-t mt-10"></div>
        <div className="flex">
          <div className="mx-auto p-10">
            <div className="text-xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
              Yoni Deserbaix 🦇
            </div>
            <div className="p-5 gap-5 flex items-center justify-center">
              <Link
                href="https://www.linkedin.com/in/yoni-deserbaix/"
                target="_blank"
                aria-label="Navigate to the LinkedIn account"
                className="hover:scale-125 transition-all"
              >
                <Linkedin size={22} />
              </Link>
              <Link
                href="https://github.com/Yoni-Deserbaix"
                target="_blank"
                aria-label="Navigate to the Github account"
                className="hover:scale-125 transition-all"
              >
                <Github size={22} />
              </Link>
              <Link
                href="mailto:yonideserbaix@gmail.com"
                className="hover:scale-125 transition-all z-10"
                aria-label="Email me at yonideserbaix@gmail.com"
              >
                <Mail size={22} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

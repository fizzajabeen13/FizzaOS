import {
Download,
Briefcase,
Mail,
Code2,
} from "lucide-react";

export default function RecruiterBar() {
return ( <div className="flex flex-wrap items-center gap-3"> <a
     href="/Fizza_Jabeen_Resume.pdf"
     download
     className="
       inline-flex items-center gap-2
       rounded-full
       border border-blue-500/30
       bg-blue-500/15
       px-5 py-3
       text-sm font-semibold
       text-blue-300
       backdrop-blur-xl
       transition-all duration-300
       hover:bg-blue-500
       hover:text-white
       hover:shadow-lg hover:shadow-blue-500/20
     "
   > <Download size={16} />
Resume </a>

  <a
    href="https://www.linkedin.com/in/fizza-jabeen-13ch"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center gap-2
      rounded-full
      border border-slate-700
      bg-slate-900/40
      px-5 py-3
      text-sm font-semibold
      text-slate-300
      backdrop-blur-xl
      transition-all duration-300
      hover:border-blue-500/40
      hover:text-white
      hover:bg-slate-800/60
    "
  >
    <Briefcase size={16} />
    LinkedIn
  </a>

  <a
    href="https://github.com/fizzajabeen13"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center gap-2
      rounded-full
      border border-slate-700
      bg-slate-900/40
      px-5 py-3
      text-sm font-semibold
      text-slate-300
      backdrop-blur-xl
      transition-all duration-300
      hover:border-blue-500/40
      hover:text-white
      hover:bg-slate-800/60
    "
  >
    <Code2 size={16} />
    GitHub
  </a>

  <a
    href="#contact"
    className="
      inline-flex items-center gap-2
      rounded-full
      border border-slate-700
      bg-slate-900/40
      px-5 py-3
      text-sm font-semibold
      text-slate-300
      backdrop-blur-xl
      transition-all duration-300
      hover:border-blue-500/40
      hover:text-white
      hover:bg-slate-800/60
    "
  >
    <Mail size={16} />
    Email
  </a>
</div>

);
}

import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-[#262626] bg-white dark:bg-[#000000] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="font-mono text-slate-400 dark:text-slate-500">
          <span className="text-violet-600 dark:text-violet-400">TPB</span> · Built with Next.js &amp; Tailwind CSS
        </p>
        <div className="flex items-center gap-5">
          <a href="https://linkedin.com/in/taurai-paris-baiwa/" target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn" className="text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
            <Linkedin size={17} />
          </a>
          <a href="https://github.com/tauraiPbaiwa-bit" target="_blank" rel="noopener noreferrer"
            aria-label="GitHub" className="text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
            <Github size={17} />
          </a>
          <a href="mailto:tauraiparisbaiwa@gmail.com" aria-label="Email"
            className="text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
            <Mail size={17} />
          </a>
        </div>
        <p className="font-mono text-slate-300 dark:text-slate-600 text-xs">© 2026 Taurai Paris Baiwa</p>
      </div>
    </footer>
  )
}

import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'
import { Github } from 'lucide-react'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#000000]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="font-mono text-violet-600/60 dark:text-violet-400/60 text-sm tracking-[0.2em] mb-2">
            // 03. projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
          <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-violet-600 dark:from-violet-400 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/tauraiPbaiwa-bit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-200 dark:border-[#262626] text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-600/40 dark:hover:border-violet-400/40 px-6 py-3 rounded-lg transition-colors text-sm"
          >
            <Github size={17} />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}

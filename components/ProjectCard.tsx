import { Github, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { Project } from '@/data/projects'

const projectIcons: Record<string, string> = {
  'customer-churn-prediction-system': '📈',
  'banks-etl-pipeline': '🏦',
  'waste-management-data-warehouse': '♻️',
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group bg-white dark:bg-[#0d1b2a] border border-slate-200 dark:border-[#1a2940] rounded-xl overflow-hidden hover:border-cyan-600/40 dark:hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(8,145,178,0.08)] dark:hover:shadow-[0_12px_40px_rgba(34,211,238,0.07)] transition-all duration-300 flex flex-col">
      {/* Card image */}
      <div className="h-44 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-[#122035] dark:to-[#0d1b2a] flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90deg, #0891b2 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative text-center px-6">
          <div className="text-5xl mb-2">{projectIcons[project.slug] ?? '🗄️'}</div>
          <p className="font-mono text-cyan-600/50 dark:text-cyan-400/50 text-xs">{project.tech[0]}</p>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 space-y-4">
        <h3 className="text-slate-900 dark:text-white font-semibold text-lg leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Outcome */}
        <div className="border-l-2 border-cyan-600/40 dark:border-cyan-400/40 pl-3 py-0.5">
          <p className="text-cyan-700 dark:text-cyan-400/75 text-xs leading-relaxed">{project.outcome}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 bg-slate-100 dark:bg-[#122035] text-cyan-700 dark:text-cyan-400/70 text-xs font-mono rounded border border-slate-200 dark:border-[#1a2940]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 pt-1">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm"
          >
            <Github size={15} />
            GitHub
          </a>
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm ml-auto"
          >
            Case Study <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  )
}

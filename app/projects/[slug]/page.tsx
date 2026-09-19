import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Github, CheckCircle } from 'lucide-react'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} | Taurai Paris Baiwa`,
    description: project.description,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen pt-24 pb-24 bg-white dark:bg-[#000000]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-mono text-sm mb-10"
        >
          <ArrowLeft size={15} />
          Back to projects
        </Link>

        <div className="mb-12">
          <p className="font-mono text-violet-600/60 dark:text-violet-400/60 text-sm tracking-[0.2em] mb-3">
            // case study
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            {project.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 bg-violet-600/10 dark:bg-violet-400/10 text-violet-700 dark:text-violet-400 text-sm font-mono rounded-lg border border-violet-600/20 dark:border-violet-400/20"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-slate-200 dark:border-[#262626] text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-600/40 dark:hover:border-violet-400/40 px-4 py-2 rounded-lg transition-colors text-sm"
            >
              <Github size={15} />
              View on GitHub
            </a>
          </div>
        </div>

        <div className="space-y-6">
          {[
            { title: '// Problem & Context', content: project.problem },
            { title: '// Constraints & Tradeoffs', content: project.constraints },
          ].map(({ title, content }) => (
            <div
              key={title}
              className="bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-[#262626] rounded-xl p-6"
            >
              <h2 className="text-base font-semibold text-violet-600 dark:text-violet-400 font-mono mb-3">
                {title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">{content}</p>
            </div>
          ))}

          {/* Architecture */}
          <div className="bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-[#262626] rounded-xl p-6">
            <h2 className="text-base font-semibold text-violet-600 dark:text-violet-400 font-mono mb-3">
              // Architecture
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-5">
              {project.architecture}
            </p>
            <div className="bg-slate-100 dark:bg-[#000000] border border-slate-200 dark:border-[#262626] rounded-lg p-8 text-center font-mono">
              <p className="text-slate-400 dark:text-slate-500 text-sm">[ Architecture / Data-flow diagram ]</p>
              <p className="text-slate-300 dark:text-slate-700 text-xs mt-1">Add an image or diagram here</p>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-[#262626] rounded-xl p-6">
            <h2 className="text-base font-semibold text-violet-600 dark:text-violet-400 font-mono mb-4">
              // Implementation Highlights
            </h2>
            <ul className="space-y-3">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm">
                  <span className="text-violet-600 dark:text-violet-400 mt-0.5 flex-shrink-0 text-xs">▹</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className="bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-[#262626] rounded-xl p-6">
            <h2 className="text-base font-semibold text-violet-600 dark:text-violet-400 font-mono mb-4">
              // Results &amp; Lessons Learned
            </h2>
            <ul className="space-y-3">
              {project.results.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm">
                  <CheckCircle size={16} className="text-violet-600 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

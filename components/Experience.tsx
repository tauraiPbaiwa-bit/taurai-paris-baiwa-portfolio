import { experiences } from '@/data/experience'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="font-mono text-violet-600/60 dark:text-violet-400/60 text-sm tracking-[0.2em] mb-2">
            // 04. experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Experience</h2>
          <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-violet-600 dark:from-violet-400 to-transparent" />
        </div>

        <div className="relative max-w-3xl">
          {/* Timeline rail */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-violet-600/50 dark:from-violet-400/50 via-violet-600/20 dark:via-violet-400/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-16">
                {/* Dot */}
                <div className="absolute left-[17px] top-7 w-[9px] h-[9px] rounded-full bg-violet-600 dark:bg-violet-400 shadow-[0_0_8px_rgba(8,145,178,0.6)] dark:shadow-[0_0_8px_rgba(34,211,238,0.6)] -translate-x-1/2" />

                <div className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-[#262626] rounded-xl p-6 hover:border-violet-600/30 dark:hover:border-violet-400/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1">
                        <div className="w-8 h-8 bg-violet-600/10 dark:bg-violet-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Briefcase size={15} className="text-violet-600 dark:text-violet-400" />
                        </div>
                        <h3 className="text-slate-900 dark:text-white font-semibold text-lg">{exp.role}</h3>
                      </div>
                      <p className="text-violet-600 dark:text-violet-400 text-sm font-medium pl-[42px]">{exp.company}</p>
                      <p className="text-slate-400 dark:text-slate-500 text-xs mt-0.5 pl-[42px]">{exp.location}</p>
                    </div>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#111111] px-3 py-1.5 rounded-full border border-slate-200 dark:border-[#262626] whitespace-nowrap self-start shrink-0">
                      {exp.start} — {exp.end}
                    </span>
                  </div>

                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        <span className="text-violet-600 dark:text-violet-400 mt-1 flex-shrink-0 text-xs">▹</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-slate-100 dark:bg-[#111111] text-violet-700 dark:text-violet-400/70 text-xs font-mono rounded border border-slate-200 dark:border-[#262626]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

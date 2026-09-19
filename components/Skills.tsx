import { skillCategories } from '@/data/skills'

const colorMap = {
  cyan: 'bg-violet-600/10 dark:bg-violet-400/10 text-violet-700 dark:text-violet-400 border-violet-600/25 dark:border-violet-400/25 hover:bg-violet-600/20 dark:hover:bg-violet-400/20',
  purple: 'bg-violet-600/10 dark:bg-violet-400/10 text-violet-700 dark:text-violet-400 border-violet-600/25 dark:border-violet-400/25 hover:bg-violet-600/20 dark:hover:bg-violet-400/20',
  green: 'bg-violet-600/10 dark:bg-violet-400/10 text-violet-700 dark:text-violet-400 border-violet-600/25 dark:border-violet-400/25 hover:bg-violet-600/20 dark:hover:bg-violet-400/20',
} as const

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="font-mono text-violet-600/60 dark:text-violet-400/60 text-sm tracking-[0.2em] mb-2">
            // 02. skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Tech Stack</h2>
          <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-violet-600 dark:from-violet-400 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-[#262626] rounded-xl p-6 hover:border-violet-600/30 dark:hover:border-violet-400/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl" role="img" aria-label={cat.category}>{cat.icon}</span>
                <h3 className="text-slate-900 dark:text-white font-semibold">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1.5 rounded-lg text-sm font-mono border transition-colors ${colorMap[skill.color]}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

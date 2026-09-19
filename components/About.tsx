import { MapPin, GraduationCap, Briefcase } from 'lucide-react'

const stats = [
  { value: '2+', label: 'Years of Study' },
  { value: '1', label: 'Internship' },
  { value: '11', label: 'Public Repositories' },
  { value: '5', label: 'Certifications' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#060d1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="font-mono text-cyan-600/60 dark:text-cyan-400/60 text-sm tracking-[0.2em] mb-2">
            // 01. about
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">About Me</h2>
          <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-cyan-600 dark:from-cyan-400 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div className="space-y-5">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I&apos;m a detail-oriented Computer Science student with a strong foundation in software
              development, database systems, and data analytics. Experienced in designing
              database-driven applications using{' '}
              <span className="text-cyan-600 dark:text-cyan-400">Java</span> and{' '}
              <span className="text-cyan-600 dark:text-cyan-400">Python</span>, with deep expertise in{' '}
              <span className="text-cyan-600 dark:text-cyan-400">SQL and PL/SQL</span>.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Proficient in <span className="text-cyan-600 dark:text-cyan-400">Oracle</span> and{' '}
              <span className="text-cyan-600 dark:text-cyan-400">MySQL</span> technologies. Passionate
              about building scalable applications, solving complex technical challenges, and delivering
              impactful software solutions.
            </p>

            <div className="space-y-3 pt-2">
              {[
                { icon: MapPin, text: 'Maharashtra, India' },
                { icon: GraduationCap, text: 'B.Sc. Computer Science — Vishwakarma University (2024 – Present)' },
                { icon: Briefcase, text: 'Industry Project Intern — Tata Consultancy Services (Feb – May 2026)' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3 text-slate-500 dark:text-slate-400">
                  <Icon size={16} className="text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>

            <div className="font-mono text-sm bg-slate-100 dark:bg-[#0d1b2a] border border-slate-200 dark:border-[#1a2940] rounded-xl p-4 mt-2">
              <span className="text-slate-400 dark:text-slate-500">// fun fact</span>
              <p className="text-slate-700 dark:text-slate-300 mt-1.5 leading-relaxed">
                &ldquo;I think of databases like cities — good architecture makes everything flow.&rdquo;
              </p>
            </div>
          </div>

          {/* Right: stats + education */}
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-slate-50 dark:bg-[#0d1b2a] border border-slate-200 dark:border-[#1a2940] rounded-xl p-6 text-center hover:border-cyan-600/30 dark:hover:border-cyan-400/30 transition-colors"
                >
                  <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 font-mono">{s.value}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 dark:bg-[#0d1b2a] border border-slate-200 dark:border-[#1a2940] rounded-xl p-6 hover:border-cyan-600/30 dark:hover:border-cyan-400/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-cyan-600/10 dark:bg-cyan-400/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={20} className="text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white font-semibold">Vishwakarma University</h3>
                  <p className="text-cyan-600 dark:text-cyan-400 text-sm mt-0.5">B.Sc. Computer Science</p>
                  <p className="text-slate-400 dark:text-slate-500 text-sm mt-1">Jul 2024 – Present · Pune, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

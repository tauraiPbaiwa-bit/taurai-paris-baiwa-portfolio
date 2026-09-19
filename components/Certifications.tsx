import { certifications } from '@/data/certifications'
import { Award } from 'lucide-react'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white dark:bg-[#060d1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="font-mono text-cyan-600/60 dark:text-cyan-400/60 text-sm tracking-[0.2em] mb-2">
            // 05. certifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Certifications</h2>
          <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-cyan-600 dark:from-cyan-400 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex items-start gap-4 bg-slate-50 dark:bg-[#0d1b2a] border border-slate-200 dark:border-[#1a2940] rounded-xl p-6 hover:border-cyan-600/30 dark:hover:border-cyan-400/30 transition-colors"
            >
              <div className="w-12 h-12 bg-cyan-600/10 dark:bg-cyan-400/10 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                {cert.icon}
              </div>
              <div>
                <h3 className="text-slate-900 dark:text-white font-semibold text-sm leading-snug">{cert.name}</h3>
                <p className="text-cyan-600 dark:text-cyan-400 text-sm mt-1.5">{cert.issuer}</p>
                <div className="flex items-center gap-1.5 mt-2">
                  <Award size={12} className="text-slate-400" />
                  <span className="text-slate-400 text-xs">{cert.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

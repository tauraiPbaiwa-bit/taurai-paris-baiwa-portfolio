'use client'
import { useState } from 'react'
import { Mail, MapPin, Clock, Send, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.email}`)
    window.location.href = `mailto:tauraiparisbaiwa@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="font-mono text-violet-600/60 dark:text-violet-400/60 text-sm tracking-[0.2em] mb-2">
            // 06. contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Get in Touch</h2>
          <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-violet-600 dark:from-violet-400 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Info */}
          <div className="space-y-7">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
                Interested in working together?
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                I&apos;m open to internships, collaborative projects, and entry-level opportunities
                in software development and data engineering. Let&apos;s build something great together.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:tauraiparisbaiwa@gmail.com" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-violet-600/10 dark:bg-violet-400/10 rounded-lg flex items-center justify-center group-hover:bg-violet-600/20 dark:group-hover:bg-violet-400/20 transition-colors flex-shrink-0">
                  <Mail size={17} className="text-violet-600 dark:text-violet-400" />
                </div>
                <span className="text-slate-600 dark:text-slate-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors text-sm">
                  tauraiparisbaiwa@gmail.com
                </span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-600/10 dark:bg-violet-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={17} className="text-violet-600 dark:text-violet-400" />
                </div>
                <span className="text-slate-600 dark:text-slate-300 text-sm">Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-600/10 dark:bg-violet-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={17} className="text-violet-600 dark:text-violet-400" />
                </div>
                <span className="text-slate-600 dark:text-slate-300 text-sm">Usually responds within 24–48 hours</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a href="https://linkedin.com/in/taurai-paris-baiwa/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors text-sm">
                <Linkedin size={17} /> LinkedIn
              </a>
              <a href="https://github.com/tauraiPbaiwa-bit" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors text-sm">
                <Github size={17} /> GitHub
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { id: 'name', label: 'NAME', type: 'text', placeholder: 'Your name', value: form.name, onChange: (v: string) => setForm({ ...form, name: v }) },
              { id: 'email', label: 'EMAIL', type: 'email', placeholder: 'your@email.com', value: form.email, onChange: (v: string) => setForm({ ...form, email: v }) },
            ].map((field) => (
              <div key={field.id}>
                <label className="block text-slate-500 dark:text-slate-400 text-xs font-mono mb-2 tracking-wider">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  placeholder={field.placeholder}
                  className="w-full bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-[#262626] rounded-lg px-4 py-3 text-slate-900 dark:text-slate-200 placeholder-slate-300 dark:placeholder-slate-600 focus:outline-none focus:border-violet-600/50 dark:focus:border-violet-400/50 transition-colors text-sm"
                />
              </div>
            ))}
            <div>
              <label className="block text-slate-500 dark:text-slate-400 text-xs font-mono mb-2 tracking-wider">
                MESSAGE
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about the opportunity..."
                className="w-full bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-[#262626] rounded-lg px-4 py-3 text-slate-900 dark:text-slate-200 placeholder-slate-300 dark:placeholder-slate-600 focus:outline-none focus:border-violet-600/50 dark:focus:border-violet-400/50 transition-colors resize-none text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-violet-600 dark:bg-violet-400 text-white dark:text-[#000000] font-semibold py-3 rounded-lg hover:bg-violet-700 dark:hover:bg-violet-300 transition-colors text-sm"
            >
              <Send size={15} />
              {sent ? 'Opening your mail client…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

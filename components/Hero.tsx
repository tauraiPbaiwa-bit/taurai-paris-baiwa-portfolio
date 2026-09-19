'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react'

const roles = [
  'Computer Science Student',
  'Database Developer',
  'Data Analytics Enthusiast',
  'Software Developer',
]

function TypingEffect() {
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]

    if (isPaused) {
      const t = setTimeout(() => { setIsPaused(false); setIsDeleting(true) }, 2000)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1))
        } else {
          setIsPaused(true)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(current.slice(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 40 : 85)

    return () => clearTimeout(t)
  }, [displayText, isDeleting, isPaused, roleIndex])

  return (
    <span className="text-violet-600 dark:text-violet-400 font-mono">
      {displayText}
      <span className="inline-block w-0.5 h-5 bg-violet-600 dark:bg-violet-400 ml-0.5 animate-blink align-middle" />
    </span>
  )
}

function scrollToAbout() {
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#7c3aed 1px, transparent 1px), linear-gradient(90deg, #7c3aed 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-violet-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── Left: text ── */}
          <div className="space-y-7 order-2 lg:order-1">
            <div>
              <p className="font-mono text-violet-600/60 dark:text-violet-400/60 text-sm tracking-[0.2em] mb-3">
                // hello, world
              </p>
              <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Hi, I&apos;m{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-purple-500 dark:from-violet-400 dark:to-purple-300">
                  Taurai
                </span>
              </h1>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-600 dark:text-slate-300 mt-1">
                Paris Baiwa
              </h2>
            </div>

            <div className="h-8 flex items-center">
              <span className="text-lg sm:text-xl text-slate-700 dark:text-slate-300">
                <TypingEffect />
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
              Detail-oriented CS student passionate about building scalable, database-driven
              applications. Currently interning at{' '}
              <span className="text-violet-600 dark:text-violet-400 font-medium">
                Tata Consultancy Services
              </span>
              , turning complex datasets into actionable insights.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-violet-600 dark:bg-violet-400 text-white dark:text-[#000000] font-semibold px-6 py-3 rounded-lg hover:bg-violet-700 dark:hover:bg-violet-300 transition-colors"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 border border-violet-600/50 dark:border-violet-400/50 text-violet-600 dark:text-violet-400 font-semibold px-6 py-3 rounded-lg hover:bg-violet-600/10 dark:hover:bg-violet-400/10 transition-colors"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>

            <div className="flex items-center gap-6 pt-1">
              <a
                href="https://linkedin.com/in/taurai-paris-baiwa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://github.com/tauraiPbaiwa-bit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                <Github size={22} />
              </a>
              <a
                href="mailto:tauraiparisbaiwa@gmail.com"
                aria-label="Email"
                className="text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* ── Right: photo + SQL terminal ── */}
          <div className="flex flex-col items-center gap-6 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full border border-violet-600/15 dark:border-violet-400/15 animate-pulse" />
              <div className="absolute -inset-2 rounded-full border border-violet-600/25 dark:border-violet-400/25" />
              <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-violet-600/40 dark:border-violet-400/40 shadow-[0_0_50px_rgba(8,145,178,0.12)] dark:shadow-[0_0_50px_rgba(34,211,238,0.12)]">
                <Image
                  src="/images/esther.jpeg"
                  alt="Taurai Paris Baiwa"
                  width={288}
                  height={288}
                  className="object-cover object-top w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* SQL terminal — always dark */}
            <div className="terminal-window w-full max-w-xs text-sm font-mono select-none">
              <div className="terminal-header">
                <span className="terminal-dot bg-[#ff5f57]" />
                <span className="terminal-dot bg-[#febc2e]" />
                <span className="terminal-dot bg-[#28c840]" />
                <span className="ml-3 text-slate-500 text-xs">query.sql</span>
              </div>
              <div className="p-4 space-y-0.5 leading-6">
                <p>
                  <span className="text-purple-400">SELECT</span>
                  <span className="text-slate-300"> * </span>
                  <span className="text-purple-400">FROM</span>
                  <span className="text-violet-400"> skills</span>
                </p>
                <p>
                  <span className="text-purple-400">WHERE</span>
                  <span className="text-yellow-300"> passion </span>
                  <span className="text-slate-400">= </span>
                  <span className="text-violet-400">&apos;high&apos;</span>
                </p>
                <p>
                  <span className="text-purple-400">&nbsp;&nbsp;AND</span>
                  <span className="text-yellow-300"> available </span>
                  <span className="text-slate-400">= </span>
                  <span className="text-orange-400">true</span>
                </p>
                <p>
                  <span className="text-slate-400">ORDER BY</span>
                  <span className="text-yellow-300"> impact </span>
                  <span className="text-purple-400">DESC</span>
                  <span className="text-slate-400">;</span>
                </p>
                <p className="mt-2 text-slate-500">
                  <span className="text-violet-400">--</span> 12 rows returned ✓
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll button — functional */}
        <button
          onClick={scrollToAbout}
          aria-label="Scroll to About section"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-600 hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-pointer"
        >
          <span className="font-mono text-xs tracking-widest">scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </button>
      </div>
    </section>
  )
}

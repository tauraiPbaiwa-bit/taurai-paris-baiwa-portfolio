import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Taurai Paris Baiwa | Computer Science Student & Database Developer',
  description:
    'Portfolio of Taurai Paris Baiwa — CS student at Vishwakarma University, TCS intern, Oracle & SQL developer specialising in database-driven applications.',
  keywords: [
    'database developer portfolio',
    'Oracle SQL developer',
    'CS student portfolio India',
    'data analytics developer',
    'Taurai Paris Baiwa',
    'Vishwakarma University',
    'PL/SQL developer',
  ],
  authors: [{ name: 'Taurai Paris Baiwa', url: 'https://linkedin.com/in/taurai-paris-baiwa/' }],
  openGraph: {
    title: 'Taurai Paris Baiwa | Database Developer & CS Student',
    description:
      'Portfolio showcasing database development, SQL expertise, and software engineering projects.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||'dark';document.documentElement.classList.toggle('dark',t==='dark');})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white dark:bg-[#000000] text-slate-900 dark:text-slate-200 transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

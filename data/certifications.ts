export interface Certification {
  id: string
  name: string
  issuer: string
  year: string
  icon: string
  credentialUrl?: string
}

export const certifications: Certification[] = [
  { id: '1', name: 'Python Project for Data Engineering', issuer: 'IBM via Coursera', year: '2026', icon: '⚙️', credentialUrl: 'https://coursera.org/verify/Y867X0L4SK7C' },
  { id: '2', name: 'Introduction to Relational Databases (RDBMS)', issuer: 'IBM via Coursera', year: '2026', icon: '🗃️', credentialUrl: 'https://coursera.org/verify/KPT4M8JFUQJM' },
  { id: '3', name: 'Python for Data Science, AI & Development', issuer: 'IBM via Coursera', year: '2026', icon: '🐍', credentialUrl: 'https://coursera.org/verify/SG2GQ5HG3Q5O' },
  { id: '4', name: 'Introduction to Data Engineering', issuer: 'IBM via Coursera', year: '2026', icon: '📚', credentialUrl: 'https://coursera.org/verify/TE6H8TA00W6I' },
  { id: '5', name: 'Sales Order Management in Supply Chain Management', issuer: 'Tata Consultancy Services', year: '2026', icon: '📦' },
  { id: '6', name: 'Data Modelling and Visualization', issuer: 'Tata Consultancy Services', year: '2025', icon: '📊' },
  { id: '7', name: 'Oracle Database Explorer', issuer: 'Oracle', year: '2026', icon: '🗄️' },
  { id: '8', name: 'Programming Foundations: Object-Oriented Design', issuer: 'LinkedIn', year: '2025', icon: '🧩' },
  { id: '9', name: 'Python Essential Training', issuer: 'LinkedIn', year: '2025', icon: '🐍' },
]

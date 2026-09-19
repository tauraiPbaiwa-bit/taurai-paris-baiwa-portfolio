export interface Certification {
  id: string
  name: string
  issuer: string
  year: string
  icon: string
}

export const certifications: Certification[] = [
  { id: '1', name: 'Sales Order Management in Supply Chain Management', issuer: 'Tata Consultancy Services', year: '2026', icon: '📦' },
  { id: '2', name: 'Oracle Database Explorer', issuer: 'Oracle', year: '2026', icon: '🗄️' },
  { id: '3', name: 'Data Modelling and Visualization', issuer: 'Tata Consultancy Services', year: '2025', icon: '📊' },
  { id: '4', name: 'Programming Foundations: Object-Oriented Design', issuer: 'LinkedIn', year: '2025', icon: '🧩' },
  { id: '5', name: 'Python Essential Training', issuer: 'LinkedIn', year: '2025', icon: '🐍' },
]

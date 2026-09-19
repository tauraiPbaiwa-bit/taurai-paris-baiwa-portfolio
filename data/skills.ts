export interface Skill {
  name: string
  color: 'cyan' | 'purple' | 'green'
}

export interface SkillCategory {
  category: string
  icon: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Data & Databases',
    icon: '🗄️',
    skills: [
      { name: 'SQL / PL-SQL', color: 'cyan' },
      { name: 'Oracle Database', color: 'cyan' },
      { name: 'MySQL', color: 'cyan' },
      { name: 'PostgreSQL', color: 'cyan' },
      { name: 'SQLite', color: 'cyan' },
      { name: 'Data Modeling', color: 'cyan' },
      { name: 'Data Warehousing', color: 'cyan' },
      { name: 'Data Visualization', color: 'cyan' },
    ],
  },
  {
    category: 'Programming Languages',
    icon: '💻',
    skills: [
      { name: 'Python', color: 'purple' },
      { name: 'Java', color: 'purple' },
      { name: 'C++', color: 'purple' },
      { name: 'OOP', color: 'purple' },
      { name: 'TypeScript', color: 'purple' },
    ],
  },
  {
    category: 'Tools & Workflows',
    icon: '🔧',
    skills: [
      { name: 'Git', color: 'green' },
      { name: 'Pandas', color: 'green' },
      { name: 'FastAPI', color: 'green' },
      { name: 'React', color: 'green' },
      { name: 'ETL Pipelines', color: 'green' },
      { name: 'Agile', color: 'green' },
    ],
  },
]

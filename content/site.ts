export const site = {
  name: 'Bahar Dastmalchi',
  brand: 'Rovia',
  roles: ['Digital Marketing', 'SEO', 'Web Development', 'AI Automation'],
  heroIntro:
    'در حال طراحی و توسعه تجربه‌های دیجیتال با تمرکز بر بازاریابی، وب و اتوماسیون.',
  buildingUnder: '',
  email: 'dastmalchibahar@gmail.com.com',
  phone: '+98 9005551996',
  resumeUrl: '/Bahar Dastmalchi_resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/bahar-dastmalchi',
    github: 'https://github.com/',
  },
} as const

export type NavItem = { label: string; href: string }

export const navItems: NavItem[] = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

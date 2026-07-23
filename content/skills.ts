export type SkillCategory = {
  id: string
  title: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    id: 'marketing',
    title: 'Marketing',
    items: ['استراتژی محتوا', 'کمپین‌های تبلیغاتی', 'ایمیل مارکتینگ'],
  },
  {
    id: 'seo',
    title: 'SEO',
    items: ['سئوی تکنیکال', 'تحقیق کلمات کلیدی', 'بهینه‌سازی محتوا', 'لینک‌سازی'],
  },
  {
    id: 'development',
    title: 'Development',
    items: ['Next.js & React', 'wordpress', 'Tailwind CSS', 'طراحی ریسپانسیو'],
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    items: ['اتوماسیون فرایندها', 'ابزارهای هوش مصنوعی', 'ورک‌فلوها'],
  },
  {
    id: 'tools',
    title: 'Tools',
    items: ['Figma', 'Google Analytics' , 'AI tools' , 'wordpress' , 'vs code'],
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    items: ['تفکر طراحی', 'حل مسئله', 'یادگیری مستمر', 'ارتباط مؤثر'],
  },
]

export type Project = {
  id: string
  number: string
  title: string
  description: string
  tags: string[]
  image: string
  href: string
}

export const projects: Project[] = [
  {
    id: 'rb-white',
    number: '01',
    title: 'RB White',
    description:
      'طراحی سایت فروشگاهی، بهینه‌سازی تجربه کاربری و SEO برای رشد فروش و دیده‌شدن برند.',
    tags: ['Web Development', 'SEO', 'UX' , 'Wordpress'],
    image: '/project-rb-white.png',
    href: 'https://rbwhite.ir' ,
  },
  {
    id: 'growth-dashboard',
    number: '02',
    title: 'Growth Dashboard',
    description:
      'طراحی داشبورد تحلیلی برای پایش کمپین‌های بازاریابی و تصمیم‌گیری داده‌محور.',
    tags: ['Digital Marketing', 'Analytics', 'UI'],
    image: '/project-two.png',
    href: '#',
  },
  {
    id: 'launch-page',
    number: '03',
    title: 'Launch Page',
    description:
      'طراحی صفحه معرفی محصول با تمرکز بر نرخ تبدیل، سرعت و اتوماسیون فرایند جذب کاربر.',
    tags: ['Web Development', 'AI Automation', 'CRO'],
    image: '/project-three.png',
    href: '#',
  },
]

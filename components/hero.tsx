'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowDown, Download, Briefcase, GraduationCap, Calendar, ArrowUpRight, Code2, FileText } from 'lucide-react'
import { site } from '@/content/site'

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
}

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#f3ede9]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),rgba(243,237,233,1)_42%,rgba(237,227,221,1)_100%)]" />
        <div className="absolute left-[-120px] top-[-80px] h-[300px] w-[300px] rounded-full bg-[#efd6cd]/45 blur-3xl" />
        <div className="absolute right-[-90px] top-[80px] h-[340px] w-[340px] rounded-full bg-[#f0ddd6]/40 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[18%] h-[240px] w-[240px] rounded-full bg-[#e8d4cc]/35 blur-3xl" />
        <div className="absolute bottom-[-80px] right-[-60px] h-[260px] w-[260px] rounded-full bg-[#dfc6bc]/35 blur-3xl" />
        <div className="absolute left-[8%] top-[26%] h-3 w-3 rounded-full bg-[#ddb4ae]/80 blur-[1px]" />
        <div className="absolute right-[12%] top-[18%] h-4 w-4 rounded-full bg-[#e6c0b9]/80 blur-[1px]" />
        <div className="absolute right-[18%] bottom-[24%] h-3 w-3 rounded-full bg-[#dfb7b0]/80 blur-[1px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-16 md:px-10 lg:grid-cols-[1.02fr_.98fr] lg:px-12 lg:py-20"
      >
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.h1
            variants={item}
            className="font-serif text-5xl leading-[0.92] tracking-[-0.04em] text-[#241c19] sm:text-6xl xl:text-7xl"
          >
            Bahar Dastmalchi
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-[0.32em] text-[#7d6f68] lg:justify-start"
          >
            <span>Digital Marketing</span>
            <span>•</span>
            <span>SEO</span>
            <span>•</span>
            <span>Web Development</span>
            <span>•</span>
            <span>AI Automation</span>
          </motion.div>

          <motion.p
            variants={item}
            dir="rtl"
            className="mx-auto mt-8 max-w-xl text-right text-sm leading-8 text-[#5f534d] lg:mx-0"
          >
            در حال طراحی و توسعه تجربه‌های دیجیتال با تمرکز بر بازاریابی، وب و اتوماسیون.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#9baa7b] px-7 py-3 text-sm font-medium text-white shadow-[0_12px_28px_rgba(155,170,123,0.28)] transition hover:scale-[1.02]"
            >
              مشاهده پروژه‌ها
              <ArrowUpRight size={16} />
            </a>

            <a
              href={site.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-[#dccfc8] bg-white/80 px-7 py-3 text-sm font-medium text-[#4b403b] shadow-sm transition hover:bg-white"
            >
              <Download size={16} />
              دانلود رزومه
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            <div className="flex items-center justify-center gap-3 rounded-[28px] border border-[#e6d8d1] bg-white/72 px-4 py-5 shadow-[0_8px_24px_rgba(53,35,28,0.05)] backdrop-blur-sm lg:justify-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f2e3dc] text-[#ca9e8e]">
                <Briefcase size={18} />
              </div>
              <div className="text-left">
                <p className="text-2xl font-semibold leading-none text-[#2f2724]">5+</p>
                <p className="mt-1 text-xs text-[#7b6f68]">پروژه انجام شده</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 rounded-[28px] border border-[#e6d8d1] bg-white/72 px-4 py-5 shadow-[0_8px_24px_rgba(53,35,28,0.05)] backdrop-blur-sm lg:justify-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#edf0e3] text-[#99a57c]">
                <GraduationCap size={18} />
              </div>
              <div className="text-left">
                <p className="text-2xl font-semibold leading-none text-[#2f2724]">10+</p>
                <p className="mt-1 text-xs text-[#7b6f68]">گواهینامه دوره</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 rounded-[28px] border border-[#e6d8d1] bg-white/72 px-4 py-5 shadow-[0_8px_24px_rgba(53,35,28,0.05)] backdrop-blur-sm lg:justify-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f7e8e1] text-[#d29688]">
                <Calendar size={18} />
              </div>
              <div className="text-left">
                <p className="text-2xl font-semibold leading-none text-[#2f2724]">2025</p>
                <p className="mt-1 text-xs text-[#7b6f68]">یادگیری و ساختن</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="order-1 flex min-h-[360px] items-center justify-center sm:min-h-[460px] lg:order-2 lg:min-h-[620px]"
        >
          <div className="relative flex h-[320px] w-[320px] items-center justify-center sm:h-[420px] sm:w-[420px] lg:h-[560px] lg:w-[560px]">
            <div className="absolute h-[240px] w-[240px] rounded-full bg-[#efd7cf]/55 blur-3xl sm:h-[300px] sm:w-[300px] lg:h-[380px] lg:w-[380px]" />
            <div className="absolute h-[260px] w-[260px] rounded-full border border-white/35 sm:h-[340px] sm:w-[340px] lg:h-[430px] lg:w-[430px]" />
            <div className="absolute h-[290px] w-[290px] rounded-full border border-[#ecd8d1]/70 sm:h-[380px] sm:w-[380px] lg:h-[500px] lg:w-[500px]" />

            <div className="absolute h-[240px] w-[240px] rounded-full border border-[#ebc6bc]/60 opacity-70 sm:h-[320px] sm:w-[320px] lg:h-[430px] lg:w-[430px] lg:rotate-12" />
            <div className="absolute h-[240px] w-[240px] rounded-full border border-[#ebc6bc]/40 opacity-70 sm:h-[320px] sm:w-[320px] lg:h-[430px] lg:w-[430px] lg:-rotate-12" />

            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,0.95),rgba(255,255,255,0.42)_22%,rgba(246,227,219,0.32)_54%,rgba(225,196,186,0.22)_76%,rgba(210,176,165,0.08)_100%)] shadow-[inset_0_10px_30px_rgba(255,255,255,0.48),inset_0_-30px_50px_rgba(211,177,166,0.16),0_45px_80px_rgba(176,138,124,0.14)]" />
            <div className="absolute inset-[8%] rounded-full border border-white/35 bg-white/10 backdrop-blur-[2px]" />

            <div className="absolute left-[8%] top-[16%] flex h-12 w-12 items-center justify-center rounded-2xl border border-white/45 bg-white/30 text-[#c18f81] shadow-sm backdrop-blur-md sm:h-14 sm:w-14">
              <Code2 size={20} />
            </div>

            <div className="absolute right-[8%] top-[18%] flex h-16 w-16 flex-col items-center justify-center rounded-[24px] border border-white/45 bg-white/30 shadow-sm backdrop-blur-md sm:h-20 sm:w-20 lg:h-24 lg:w-24">
              <div className="mb-2 flex items-end gap-1">
                <span className="h-3 w-2 rounded-full bg-[#e4b8ab] sm:h-4" />
                <span className="h-5 w-2 rounded-full bg-[#daa496] sm:h-7" />
                <span className="h-7 w-2 rounded-full bg-[#cf8f7f] sm:h-10" />
                <span className="h-9 w-2 rounded-full bg-[#c67c6a] sm:h-12" />
              </div>
              <span className="absolute right-3 top-3 text-[#d39a8d]">
                <ArrowUpRight size={14} />
              </span>
            </div>

            <div className="absolute left-[12%] bottom-[18%] flex h-12 w-12 items-center justify-center rounded-2xl border border-white/45 bg-white/28 text-[#9da680] shadow-sm backdrop-blur-md sm:h-14 sm:w-14 lg:h-16 lg:w-16">
              <span className="text-sm font-semibold sm:text-base">AI</span>
            </div>

            <div className="absolute right-[10%] bottom-[16%] flex h-16 w-20 flex-col justify-center rounded-[24px] border border-white/45 bg-white/28 px-3 shadow-sm backdrop-blur-md sm:h-20 sm:w-24 lg:h-24 lg:w-28">
              <span className="mb-2 h-2 w-10 rounded-full bg-[#ecd6ce]" />
              <span className="mb-2 h-2 w-14 rounded-full bg-[#e2bdb2]" />
              <span className="h-2 w-8 rounded-full bg-[#d59f92]" />
            </div>

            <div className="absolute left-[34%] top-[10%] rounded-[24px] border border-white/45 bg-white/28 px-4 py-3 text-lg font-medium text-[#ce9d91] shadow-sm backdrop-blur-md sm:text-2xl lg:px-6 lg:py-4">
              SEO
            </div>

            <div className="absolute left-[32%] bottom-[12%] rounded-[24px] border border-white/45 bg-white/24 px-4 py-3 text-base text-[#ddb4aa] shadow-sm backdrop-blur-md sm:text-2xl lg:px-6 lg:py-4">
              Marketing
            </div>

            <div className="absolute left-[2%] top-[52%] text-lg text-[#dbc2b8] opacity-90 sm:text-2xl lg:text-[34px] lg:leading-none">
              Branding
            </div>

            <div className="absolute right-[2%] top-[50%] opacity-85 text-[#d3c2ba]">
              <FileText size={48} strokeWidth={1.25} />
            </div>

            <div className="absolute left-[-2%] top-[40%] h-3 w-3 rounded-full bg-[#e0bbb2] shadow-[0_0_18px_rgba(224,187,178,0.6)]" />
            <div className="absolute right-[0%] top-[22%] h-4 w-4 rounded-full bg-[#e7c9c1] shadow-[0_0_20px_rgba(231,201,193,0.55)]" />
            <div className="absolute right-[8%] bottom-[24%] h-5 w-5 rounded-full bg-[#d8a89b]/80 shadow-[0_0_20px_rgba(216,168,155,0.55)]" />

            <div className="absolute bottom-[6%] h-10 w-[60%] rounded-full bg-[#d8b4a7]/25 blur-2xl" />
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#projects"
        aria-label="Scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#8d7f77] lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.35em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ArrowDown size={15} />
        </motion.span>
      </motion.a>
    </section>
  )
}

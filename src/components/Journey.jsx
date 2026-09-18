import { GraduationCap, Wrench, Award, School } from 'lucide-react'
import Reveal from './Reveal.jsx'

const ITEMS = [
  {
    icon: Wrench,
    period: 'Jul 2025 – May 2026',
    title: 'Java Full Stack Developer Training',
    org: 'QSpiders',
    detail:
      'Core Java, JDBC, Servlets, Spring Boot, Hibernate, plus HTML, CSS, JavaScript, and React.js — with real-world REST API and database projects.',
  },
  {
    icon: GraduationCap,
    period: 'Aug 2022 – May 2025',
    title: 'Bachelor of Computer Applications',
    org: 'Vels University · 72%',
    detail: 'Foundations in programming, databases, and software development.',
  },
  {
    icon: Award,
    period: 'Jan 2025 – Feb 2025',
    title: 'Green Skills & Artificial Intelligence Certification',
    org: 'Edunet Foundation, AICTE & Shell',
    detail: 'Skills4Future Program covering AI fundamentals and sustainable technology applications.',
  },
  {
    icon: School,
    period: 'Aug 2021 – May 2022',
    title: 'Higher Secondary Certificate',
    org: "St. Mary's Mat. Hr. Sec. School · 76.2%",
    detail: null,
  },
  {
    icon: School,
    period: 'Jun 2019 – May 2020',
    title: 'Secondary School Leaving Certificate',
    org: "St. Mary's Mat. Hr. Sec. School · 59.6%",
    detail: null,
  },
]

export default function Journey() {
  return (
    <section id="journey" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">How I got here</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">My journey</h2>
        </Reveal>

        <div className="relative mt-10">
          <div className="absolute left-5 top-0 h-full w-px bg-border sm:left-6" aria-hidden="true" />
          <div className="space-y-8">
            {ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="relative flex gap-5 pl-0">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-bg bg-primary text-white shadow-md sm:h-12 sm:w-12">
                    <item.icon size={18} />
                  </span>
                  <div className="flex-1 rounded-2xl border border-border bg-surface p-5 transition-shadow hover:shadow-md">
                    <p className="text-xs font-semibold text-accent">{item.period}</p>
                    <h3 className="mt-1 font-display text-base font-semibold text-ink">{item.title}</h3>
                    <p className="mt-0.5 text-sm text-muted">{item.org}</p>
                    {item.detail && <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

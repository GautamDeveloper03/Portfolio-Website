import { Landmark, ScanEye, Calendar } from 'lucide-react'
import Reveal from './Reveal.jsx'

const PROJECTS = [
  {
    icon: Landmark,
    title: 'Bank Loan Application System',
    period: 'Feb 2026 – Mar 2026',
    color: 'text-primary bg-primary/10',
    points: [
      'Secure web app for customers to apply for and track loan requests online.',
      'RESTful APIs in Spring Boot covering registration, processing, and approvals.',
      'Normalized MySQL schema for customers, loans, EMIs, and repayments via Hibernate/JPA.',
    ],
    stack: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'REST API'],
  },
  {
    icon: ScanEye,
    title: 'Real-Time Motion Detection with Alarm System',
    period: 'Nov 2024 – Jan 2025',
    color: 'text-accent bg-accentSoft',
    points: [
      'Monitors a live webcam feed and detects movement using frame comparison.',
      'Automated alarm notifications, custom alerts, and snapshot capture.',
      'Grayscale processing and pixel-based analysis for reliable detection.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Selected work</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">Projects</h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-bg p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${p.color}`}>
                    <p.icon size={22} />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
                    <Calendar size={12} /> {p.period}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{p.title}</h3>
                <ul className="mt-3 flex-1 space-y-2 text-sm text-muted">
                  {p.points.map((pt, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

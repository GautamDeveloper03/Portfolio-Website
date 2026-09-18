import { GraduationCap, Code2, Sparkles } from 'lucide-react'
import Reveal from './Reveal.jsx'

const STATS = [
  { icon: GraduationCap, value: '72%', label: 'BCA, Vels University' },
  { icon: Code2, value: '2', label: 'Full stack projects built' },
  { icon: Sparkles, value: '10+', label: 'Months of hands-on training' },
]

export default function About() {
  return (
    <section id="about" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">About me</p>
          <h2 className="mt-2 max-w-2xl font-display text-2xl font-bold text-ink sm:text-3xl">
            Motivated to build software that solves real problems — and to keep learning while I do it.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            I'm an entry-level Java Full Stack Developer with hands-on experience in Java, Spring Boot, JDBC,
            SQL, HTML, CSS, JavaScript, and React.js. I like taking a project from a database schema all the
            way to a working interface, and I'm always looking for the next thing to learn.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-bg p-5 transition-shadow hover:shadow-md">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accentSoft text-accent">
                  <s.icon size={20} />
                </span>
                <div>
                  <p className="font-display text-xl font-bold text-ink">{s.value}</p>
                  <p className="text-xs text-muted">{s.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

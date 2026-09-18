import { Braces, Layers, Globe, Database } from 'lucide-react'
import Reveal from './Reveal.jsx'

const GROUPS = [
  {
    icon: Braces,
    title: 'Programming Languages',
    color: 'text-primary bg-primary/10',
    items: ['Java', 'Python', 'JavaScript'],
  },
  {
    icon: Layers,
    title: 'Frameworks & Technologies',
    color: 'text-accent bg-accentSoft',
    items: ['Spring Framework', 'Spring Boot', 'Hibernate', 'JDBC', 'Servlets', 'React.js'],
  },
  {
    icon: Globe,
    title: 'Web Technologies',
    color: 'text-frontend bg-frontend/10',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    icon: Database,
    title: 'Database Technologies',
    color: 'text-database bg-database/10',
    items: ['MySQL', 'Oracle SQL'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">What I work with</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">Skills</h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${g.color}`}>
                  <g.icon size={20} />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{g.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-bg px-3 py-1 text-xs font-medium text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

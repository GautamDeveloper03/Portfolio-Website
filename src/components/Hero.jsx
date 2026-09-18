import { ArrowRight, Download, MapPin } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-frontend/20 blur-3xl animate-float"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 -left-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl animate-float"
        style={{ animationDelay: '1.5s' }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-2">
        <Reveal>
          <p className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted shadow-sm">
            <MapPin size={13} className="text-accent" /> Chennai, Tamil Nadu, India
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Hi, I'm Gautam — <br />
            I build <span className="text-primary">full stack</span> apps that{' '}
            <span className="relative whitespace-nowrap text-accent">
              just work
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 8 Q 100 -2 198 8" stroke="#FF7A59" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            .
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Java Full Stack Developer who enjoys turning ideas into reliable, scalable web applications —
            from Spring Boot APIs to React interfaces.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              See my work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="mailto:simyon987@gmail.com"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              <Download size={16}/>  <a href="/public/Java-Developer-Resume.pdf" download >Get in touch</a>
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <StackGraphic />
        </Reveal>
      </div>
    </section>
  )
}

function StackGraphic() {
  const layers = [
    { label: 'Frontend', detail: 'React.js · HTML · CSS · JavaScript', color: 'bg-frontend' },
    { label: 'Backend', detail: 'Java · Spring Boot · REST APIs', color: 'bg-backend' },
    { label: 'Database', detail: 'MySQL · Oracle SQL · Hibernate', color: 'bg-database' },
  ]
  return (
    <div className="relative mx-auto max-w-sm">
      <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-3xl bg-primary/10" aria-hidden="true" />
      <div className="rounded-3xl border border-border bg-surface p-6 shadow-xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">The stack, layer by layer</p>
        <div className="space-y-3">
          {layers.map((l, i) => (
            <div
              key={l.label}
              className="group rounded-2xl border border-border p-4 transition-all hover:-translate-y-1 hover:shadow-md"
              style={{ marginLeft: i * 12 }}
            >
              <div className="flex items-center gap-3">
                <span className={`h-3 w-3 rounded-full ${l.color}`} />
                <span className="font-display text-sm font-semibold text-ink">{l.label}</span>
              </div>
              <p className="mt-1.5 pl-6 text-xs text-muted">{l.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

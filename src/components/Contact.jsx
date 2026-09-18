import { Mail, Phone, Linkedin } from 'lucide-react'
import Reveal from './Reveal.jsx'

const CARDS = [
  { icon: Mail, label: 'Email', value: 'simyon987@gmail.com', href: 'mailto:simyon987@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 73587 56712', href: 'tel:+917358756712' },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'gautam-javadeveloper',
    href: 'https://linkedin.com/in/gautam-javadeveloper',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primaryDark via-primary to-frontend p-10 text-center shadow-xl sm:p-14">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Let's build something together
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-white/80">
              I'm actively looking for entry-level Java Full Stack opportunities. Reach out — I'd love to
              hear from you.
            </p>
            <a
              href="mailto:simyon987@gmail.com"
              className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primaryDark shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Mail size={16} /> Say hello
            </a>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                className="focus-ring flex items-center gap-4 rounded-2xl border border-border bg-bg p-5 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accentSoft text-accent">
                  <c.icon size={18} />
                </span>
                <div>
                  <p className="text-xs text-muted">{c.label}</p>
                  <p className="text-sm font-semibold text-ink">{c.value}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Footer() {
  return (
    <footer className="bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-xs text-muted">© {new Date().getFullYear()} Gautam B. Built with React &amp; Tailwind CSS.</p>
        <p className="text-xs text-muted">Chennai, Tamil Nadu, India</p>
      </div>
    </footer>
  )
}

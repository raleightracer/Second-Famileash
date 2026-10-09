import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import { ORG } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-tint">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-10" />
            <span className="font-display text-xl font-extrabold">{ORG.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-muted">
            A volunteer-run non-profit in {ORG.location}. We rescue, heal, and rehome neglected, abused, and abandoned dogs.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Explore</h2>
          <ul className="mt-3 space-y-2 text-muted">
            <li><Link className="hover:text-ink" to="/">Home</Link></li>
            <li><Link className="hover:text-ink" to="/#dogs">Dogs waiting for homes</Link></li>
            <li><Link className="hover:text-ink" to="/#help">Ways to help</Link></li>
            <li><Link className="hover:text-ink" to="/about">About us</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">Contact</h2>
          <ul className="mt-3 space-y-2 text-muted">
            <li><a className="hover:text-ink" href={`mailto:${ORG.email}`}>{ORG.email}</a></li>
            <li>Report a dog: <a className="hover:text-ink" href={`mailto:${ORG.reportEmail}`}>{ORG.reportEmail}</a></li>
            <li>Visits: {ORG.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-sm text-muted">
        © {new Date().getFullYear()} {ORG.name}. Every dog deserves a second leash.
      </div>
    </footer>
  );
}

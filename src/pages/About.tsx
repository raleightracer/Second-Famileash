import { Link } from "react-router-dom";
import Leash from "../assets/Leash";
import Accordion from "../components/Accordion";
import { ORG, faqs, team, timeline, values } from "../data/content";

const initials = (name: string) =>
  name
    .replace("Dr. ", "")
    .split(" ")
    .map((p) => p[0])
    .join("");

export default function About() {
  return (
    <>
      <section className="overflow-hidden">
        <div className="wrap pb-10 pt-12 md:pt-20">
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
            We started with one dog under a jeepney.
          </h1>
          <div className="mt-8 grid max-w-4xl gap-6 text-lg text-muted md:grid-cols-2 md:gap-10">
            <p>
              In 2018, Jhenoel Casingal, Dominique Datuin, and Angelo Simbahan heard crying from beneath a parked jeepney in Pampang, Angeles City. The puppy had a broken leg and had been there for days. Nobody in the neighborhood knew whose dog it was, and nobody knew who to call.
            </p>
            <p>
              That gap is why {ORG.name} exists. We are a small team of volunteers, vets, and fosters who answer when a dog needs help, and who stay with that dog until it has a home that will keep it.
            </p>
          </div>
        </div>
        <Leash className="h-10 w-full" />
      </section>

      <section className="wrap py-20" aria-labelledby="mission-heading">
        <h2 id="mission-heading" className="max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          Our mission
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          To rescue neglected, abused, and abandoned dogs, restore their health and trust, and place them in permanent homes. Three promises guide how we do it.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="border-t-4 border-accent pt-5">
              <h3 className="text-2xl font-bold">{v.title}</h3>
              <p className="mt-3 text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-tint py-20" aria-labelledby="history-heading">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <h2 id="history-heading" className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            How we grew
          </h2>
          <ol className="relative space-y-8 border-l-2 border-ink/20 pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-tint bg-accent" aria-hidden="true" />
                <h3 className="text-2xl font-bold">{t.year}</h3>
                <p className="mt-1 max-w-xl text-muted">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap py-20" aria-labelledby="team-heading">
        <h2 id="team-heading" className="max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          The people behind the dogs
        </h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <li key={m.name}>
              <div
                className="grid h-24 w-24 place-items-center rounded-full font-display text-3xl font-extrabold text-[#111f1c]"
                style={{ backgroundColor: m.color }}
                aria-hidden="true"
              >
                {initials(m.name)}
              </div>
              <h3 className="mt-4 text-xl font-bold">{m.name}</h3>
              <p className="font-medium text-brand">{m.role}</p>
              <p className="mt-2 text-muted">{m.bio}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap pb-20" aria-labelledby="faq-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <h2 id="faq-heading" className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Questions we hear often
          </h2>
          <Accordion items={faqs} />
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-brand py-20 text-on-brand" aria-labelledby="contact-heading">
        <div className="wrap grid gap-10 md:grid-cols-2">
          <div>
            <h2 id="contact-heading" className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Visit, ask, or report a dog
            </h2>
            <p className="mt-4 max-w-md text-lg opacity-85">
              Our shelter is open to visitors on weekends. Please book ahead so we can introduce you to the right dogs.
            </p>
            <Link to="/#help" className="btn mt-8 bg-on-brand text-brand hover:opacity-90">
              See ways to help
            </Link>
          </div>
          <dl className="space-y-6 text-lg">
            <div>
              <dt className="font-bold">General questions</dt>
              <dd><a className="underline underline-offset-4" href={`mailto:${ORG.email}`}>{ORG.email}</a></dd>
            </div>
            <div>
              <dt className="font-bold">Report abuse or neglect</dt>
              <dd><a className="underline underline-offset-4" href={`mailto:${ORG.reportEmail}`}>{ORG.reportEmail}</a></dd>
            </div>
            <div>
              <dt className="font-bold">Visiting hours</dt>
              <dd>{ORG.hours}</dd>
            </div>
            <div>
              <dt className="font-bold">Location</dt>
              <dd>{ORG.location}. We share the exact address when you book.</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}

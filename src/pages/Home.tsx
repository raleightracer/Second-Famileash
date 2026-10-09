import { useState } from "react";
import { Link } from "react-router-dom";
import DogFace from "../assets/DogFace";
import Leash from "../assets/Leash";
import DogCard from "../components/DogCard";
import { ORG, dogs, gifts, otherWays, record, situations, steps } from "../data/content";

const arches = [
  { bg: "#F7C948", h: "h-52 sm:h-72", fur: "#C98B4E", ear: "#8A5A2B", muzzle: "#F2DDBF", tongue: true, delay: "0ms", label: "Illustration of a brown rescue dog" },
  { bg: "#7FB5A6", h: "h-64 sm:h-96", fur: "#F4EFE6", ear: "#2B2B2B", muzzle: "#FFFFFF", patch: "#2B2B2B", delay: "150ms", label: "Illustration of a white rescue dog with a dark eye patch" },
  { bg: "#BFD9E6", h: "h-56 sm:h-80", fur: "#9AA3A8", ear: "#5E676C", muzzle: "#E4E8EA", delay: "300ms", label: "Illustration of a gray rescue dog" },
];

const peso = (n: number) => `₱${n.toLocaleString("en-PH")}`;

export default function Home() {
  const [selected, setSelected] = useState(1);
  const gift = gifts[selected];

  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden">
        <div className="wrap grid items-end gap-12 pb-10 pt-12 md:grid-cols-[1.15fr_1fr] md:pt-20">
          <div className="pb-4">
            <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Every dog deserves a second leash.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              {ORG.name} is a volunteer-run rescue in {ORG.location}. We take in dogs that were starved, beaten, or left behind, heal them, and match them with families who will keep them for life.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/#dogs" className="btn btn-primary">Meet the dogs waiting</Link>
              <Link to="/#help" className="btn btn-ghost">Ways to help</Link>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6">
              {record.map((r) => (
                <div key={r.label}>
                  <dt className="sr-only">{r.label}</dt>
                  <dd className="font-display text-3xl font-extrabold">{r.value}</dd>
                  <dd className="mt-1 text-sm text-muted">{r.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid grid-cols-3 items-end gap-3" role="group" aria-label="Rescued dogs">
            {arches.map((a) => (
              <div
                key={a.label}
                className={`flex items-end justify-center overflow-hidden rounded-t-full animate-rise motion-reduce:animate-none ${a.h}`}
                style={{ backgroundColor: a.bg, animationDelay: a.delay }}
              >
                <DogFace
                  fur={a.fur}
                  ear={a.ear}
                  muzzle={a.muzzle}
                  patch={a.patch}
                  tongue={a.tongue}
                  label={a.label}
                  className="w-[92%] translate-y-[14%]"
                />
              </div>
            ))}
          </div>
        </div>
        <Leash className="h-10 w-full" />
      </section>

      {/* Who we help */}
      <section className="wrap py-20" aria-labelledby="who-heading">
        <h2 id="who-heading" className="max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          The dogs we take in
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          No two rescues look alike, but most dogs arrive in one of three situations. Each needs a different kind of care.
        </p>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {situations.map((s) => (
            <div key={s.title} className="grid gap-4 py-8 md:grid-cols-[200px_1fr_1fr] md:gap-10">
              <h3 className="text-3xl font-extrabold">{s.title}</h3>
              <p className="text-muted">{s.problem}</p>
              <p>
                <span className="font-bold text-brand">What we do: </span>
                <span className="text-muted">{s.response}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How we help */}
      <section className="bg-tint py-20" aria-labelledby="how-heading">
        <div className="wrap">
          <h2 id="how-heading" className="max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            From the street to a sofa, in four steps
          </h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-accent font-display text-xl font-extrabold text-[#111f1c]">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-2xl font-bold">{s.title}</h3>
                <p className="mt-2 text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Dogs */}
      <section id="dogs" className="wrap scroll-mt-24 py-20" aria-labelledby="dogs-heading">
        <h2 id="dogs-heading" className="max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          Dogs waiting for a home
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          These three are ready to go home now. Each is vaccinated, neutered, and has a behavior plan to help you settle in together.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {dogs.map((d) => (
            <DogCard key={d.name} dog={d} />
          ))}
        </div>
      </section>

      {/* Ways to help */}
      <section id="help" className="scroll-mt-24 bg-brand py-20 text-on-brand" aria-labelledby="help-heading">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="help-heading" className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Pick a gift. See what it does.
            </h2>
            <p className="mt-4 max-w-md text-lg opacity-85">
              We are funded by individual donors. Every peso goes to food, medicine, and surgery for the dogs in our care.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3" role="group" aria-label="Donation amount">
              {gifts.map((g, i) => (
                <button
                  key={g.php}
                  type="button"
                  aria-pressed={i === selected}
                  onClick={() => setSelected(i)}
                  className={`rounded-2xl border-2 px-4 py-4 text-xl font-bold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/70 ${
                    i === selected
                      ? "border-transparent bg-on-brand text-brand"
                      : "border-on-brand/30 hover:border-on-brand/70"
                  }`}
                >
                  {peso(g.php)}
                </button>
              ))}
            </div>

            <p className="mt-6 min-h-[3.5rem] text-lg font-medium" aria-live="polite">
              {peso(gift.php)} {gift.text.charAt(0).toLowerCase() + gift.text.slice(1)}
            </p>
            <a
              className="btn mt-2 bg-on-brand text-brand hover:opacity-90"
              href={`mailto:${ORG.giveEmail}?subject=${encodeURIComponent(`Donation of ${peso(gift.php)}`)}`}
            >
              Give {peso(gift.php)}
            </a>
            <p className="mt-3 text-sm opacity-80">We reply within a day with bank and e-wallet details.</p>
          </div>

          <ul className="grid gap-4 self-start">
            {otherWays.map((w) => (
              <li key={w.title} className="rounded-3xl border border-on-brand/25 p-6">
                <h3 className="text-2xl font-bold">{w.title}</h3>
                <p className="mt-2 opacity-85">{w.text}</p>
                <a
                  className="mt-4 inline-block font-semibold underline underline-offset-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/70"
                  href={`mailto:${ORG.email}?subject=${encodeURIComponent(w.subject)}`}
                >
                  Email us about this
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

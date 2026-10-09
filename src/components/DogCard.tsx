import DogFace from "../assets/DogFace";
import { ORG, type Dog } from "../data/content";

export default function DogCard({ dog }: { dog: Dog }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-line bg-surface">
      <div className="flex h-56 items-end justify-center" style={{ backgroundColor: dog.bg }}>
        <DogFace
          fur={dog.fur}
          ear={dog.ear}
          muzzle={dog.muzzle}
          patch={dog.patch}
          tongue={dog.tongue}
          label={`Illustration of ${dog.name}`}
          className="h-52 w-52 translate-y-6"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-2xl font-bold">{dog.name}</h3>
          <p className="text-sm font-medium text-muted">{dog.age}, {dog.size}</p>
        </div>
        <p className="mt-3 text-muted">{dog.story}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {dog.traits.map((t) => (
            <li key={t} className="rounded-full bg-tint px-3 py-1 text-sm font-medium text-brand">{t}</li>
          ))}
        </ul>
        <a
          className="btn btn-ghost mt-6 self-start"
          href={`mailto:${ORG.adoptEmail}?subject=${encodeURIComponent(`Adoption inquiry: ${dog.name}`)}`}
        >
          Ask about {dog.name}
        </a>
      </div>
    </article>
  );
}

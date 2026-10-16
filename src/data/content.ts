export const ORG = {
  name: "Second Famileash",
  email: "cabotage.raleightracer@secondleash.org",
  adoptEmail: "adopt@secondleash.org",
  giveEmail: "give@secondleash.org",
  reportEmail: "rescue@secondleash.org",
  location: "Angeles City, Pampanga",
  hours: "Saturdays and Sundays, 9 AM to 4 PM, by appointment",
};

export const record = [
  { value: "1,240", label: "dogs rescued since 2016" },
  { value: "980", label: "adopted into homes" },
  { value: "64", label: "in our care today" },
];

export const situations = [
  {
    title: "Neglected",
    problem:
      "Dogs kept without enough food, clean water, shelter, or medical care. They usually arrive thin, covered in ticks, and with untreated skin infections.",
    response:
      "A vet exam on day one, a slow refeeding plan, and treatment for ticks, mange, and worms.",
  },
  {
    title: "Abused",
    problem:
      "Dogs who were hit, chained, or kept in fear. Many flinch at a raised hand and hide when someone walks toward them.",
    response:
      "A quiet recovery room, trained behavior volunteers, and trust built with no forced contact.",
  },
  {
    title: "Abandoned",
    problem:
      "Dogs dumped on roadsides and outside markets, or left behind when their family moved away. Many were pets and still wait by the gate.",
    response:
      "A microchip scan and a search for owners, then foster care and house-training refreshers.",
  },
];

export const steps = [
  {
    title: "Rescue",
    text: "We answer reports from neighbors, barangay offices, and online tips within 24 hours.",
  },
  {
    title: "Treat",
    text: "Every dog is examined, vaccinated, dewormed, and spayed or neutered by our partner vets.",
  },
  {
    title: "Rehabilitate",
    text: "Volunteers teach trust, leash manners, and house rules at each dog's own pace.",
  },
  {
    title: "Rehome",
    text: "Adopters are interviewed and homes are checked. Any dog we place can always come back to us.",
  },
];

export interface Dog {
  name: string;
  age: string;
  size: string;
  story: string;
  traits: string[];
  fur: string;
  ear: string;
  muzzle: string;
  patch?: string;
  tongue?: boolean;
  bg: string;
}

export const dogs: Dog[] = [
  {
    name: "Peanut",
    age: "3 years",
    size: "Large",
    story:
      "Found tied to a fence post in Project 6 with no water and a rope cutting into his neck. The wound has healed. He leans on your leg when he is nervous and will chase a tennis ball until he drops.",
    traits: ["Loves belly rub", "Clingy", "Loves when touching his nose"],
    fur: "#C98B4E",
    ear: "#8A5A2B",
    muzzle: "#F2DDBF",
    bg: "#F7C948",
  },
  {
    name: "Kairi",
    age: "4 years",
    size: "Large",
    story:
      "Left outside a wet market when his owner moved abroad. She is a calm mother, a little fat, and happiest on slow morning walks. She needs a loud home and a warm place to sleep.",
    traits: ["Has a belly rub addiction", "Good with other animals"],
    fur: "#FFE4B5",
    ear: "#F4A460",
    muzzle: "#E4E8EA",
    bg: "#BFD9E6",
  },
  {
    name: "Snowie",
    age: "1 year",
    size: "Large",
    story:
      "Pulled off a chain at six months old with scarred paws and a fear of men's voices. After weeks of patient work he now greets visitors tail first. He does best with a calm routine.",
    traits: [
      "Active 24/7",
      "Best in a loud household",
      "Best dog but not the best guard, Snowie doesn't bark, even to strangers",
    ],
    fur: "#F4EFE6",
    ear: "#F4EFE6",
    muzzle: "#FFFFFF",
    bg: "#7FB5A6",
  },
];

export const gifts = [
  { php: 100, text: "Feeds one rescued dog for two days." },
  { php: 500, text: "Vaccinates and deworms one rescued puppy." },
  { php: 1500, text: "Feeds one rescued dog for a full month." },
  { php: 3000, text: "Pays for spay or neuter surgery and aftercare." },
  {
    php: 7500,
    text: "Covers treatment for a dog with a serious injury or severe mange.",
  },
];

export const otherWays = [
  {
    title: "Foster a dog",
    text: "Give a dog a bed and a routine for two to eight weeks. We supply food, medicine, and a coordinator on call.",
    subject: "I want to foster a dog",
  },
  {
    title: "Volunteer",
    text: "Walk dogs, clean kennels, drive to vet visits, or help at weekend adoption days. No experience needed.",
    subject: "I want to volunteer",
  },
  {
    title: "Adopt",
    text: "Fill in a short interview, meet the dog, and take them home after a home check. The adoption fee is ₱1,000.",
    subject: "I want to adopt a dog",
  },
];

export const timeline = [
  {
    year: "2016",
    text: "Jhenoel Casingal, Dominique Datuin, and Angelo Simbahan finds an injured puppy under a jeepney in Pampang and takes it home. By December her garage holds four kennels and a waiting list.",
  },
  {
    year: "2018",
    text: "A neighborhood veterinary clinic agrees to treat our rescues at cost. Surgeries and vaccinations become routine.",
  },
  {
    year: "2020",
    text: "During lockdown we deliver dog food to 300 street and community dogs whose feeders could no longer reach them.",
  },
  {
    year: "2022",
    text: "We move into a small shelter with 30 kennels, a recovery room, and a fenced play yard.",
  },
  {
    year: "2024",
    text: "Our foster network reaches 60 homes, so more dogs recover in a family setting instead of a kennel.",
  },
];

export const values = [
  {
    title: "Every dog is an individual",
    text: "A shy dog and a boisterous dog need different care. We assess each one and write a plan before we match them to a home.",
  },
  {
    title: "A dog can always come back",
    text: "If an adoption does not work out, the dog returns to us. No dog we place ever ends up on the street again.",
  },
  {
    title: "Fix the cause, not just the case",
    text: "We hold free spay and neuter days and teach owners about proper care, so fewer dogs need rescuing in the first place.",
  },
];

export const team = [
  {
    name: "Raleigh Tracer Cabotage",
    role: "Founder and rescue lead",
    bio: "Responds to rescue reports and decides which dogs we can safely take in.",
    color: "#F7C948",
  },
  {
    name: "Dr. Patricia Mae Gamboa",
    role: "Volunteer veterinarian",
    bio: "Leads medical care and our monthly spay and neuter days.",
    color: "#BFD9E6",
  },
  {
    name: "Richard Jebolan",
    role: "Foster coordinator",
    bio: "Matches dogs to foster homes and checks in with every foster each week.",
    color: "#7FB5A6",
  },
  {
    name: "Liam Darjuan",
    role: "Behavior volunteer",
    bio: "Rebuilds trust in dogs who were abused, one slow session at a time.",
    color: "#E9B8A5",
  },
];

export const faqs = [
  {
    q: "Do you euthanize dogs for space or time?",
    a: "No. We never put a dog down because of space or how long it has been with us. Euthanasia is considered only on a veterinarian's advice, when a dog is suffering and cannot recover.",
  },
  {
    q: "How do I report a dog that is being abused or neglected?",
    a: "Email rescue@secondleash.org with the address, a short description, and photos or video if you can take them safely. If a dog is in immediate danger, also contact your barangay office or the Quezon City Veterinary Department.",
  },
  {
    q: "Can I give up my dog to you?",
    a: "We can sometimes help when an owner faces an emergency. Email us first so we can talk through options, including a temporary foster, before any handover.",
  },
  {
    q: "Can I volunteer if I have never handled dogs?",
    a: "Yes. New volunteers start with a short orientation and are paired with an experienced volunteer for their first few shifts.",
  },
  {
    q: "What does the adoption fee cover?",
    a: "The ₱3,000 fee covers part of each dog's vaccines and neuter surgery. If the fee is the only thing stopping a good home, tell us and we will work it out.",
  },
];

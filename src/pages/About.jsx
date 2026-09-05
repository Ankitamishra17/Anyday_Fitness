import { Target, Eye, Building2, ArrowUpRight } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import StatCard from "../components/StatCard";
import CTASection from "../components/CTASection";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To empower every member with the tools, coaching and community needed to become their strongest self.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To redefine what a premium fitness experience looks like, anyday and anytime.",
  },
  {
    icon: Building2,
    title: "Why Anyday",
    desc: "24/7 access, elite trainers, and a facility engineered for real, sustainable results.",
  },
];

// Founders — swap to real headshots later; `image` stays optional per person.
const founders = [
  { name: "Rahul Raj", role: "Founder" },
  { name: "Ravi Kant Sharma", role: "Founder" },
  { name: "Luxmi Kant Sharma", role: "Founder" },
  { name: "Vivek Kumar", role: "Founder" },
  { name: "Sameer", role: "Founder" },
  { name: "Akash Yadav", role: "Co-Founder & Director" },
];

const facilities = [
  {
    title: "Strength Zone",
    desc: "Full range of free weights, racks and plate-loaded machines for serious lifters.",
    image: "/image/image10.webp",
  },
  {
    title: "Cardio Deck",
    desc: "Premium cardio equipment with skyline views and immersive sound systems.",
    image: "/image/image8.webp",
  },
  {
    title: "Recovery Lounge",
    desc: "Stretching zones, foam rolling stations, and recovery amenities.",
    image: "/image/image15.webp",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="More Than"
        highlight="Just Fitness"
        description="At Anyday Fitness, we believe fitness is not a destination—it's a lifestyle. We've created a premium training environment where commitment meets community, and every workout brings you one step closer to becoming your strongest self."
        image="/About2.png"
        primaryBtnText="Start Your Journey"
        primaryBtnLink="/contact"
        secondaryBtnText="View Our Plan"
        secondaryBtnLink="/membership"
      />

      {/* Brand story */}
      <section className="py-16 sm:py-24 overflow-hidden">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div className="flex flex-col gap-6">
            <span className="eyebrow">Our Philosophy</span>

            <h2 className="section-heading">
              Fitness Is A <span className="text-primary">Lifestyle</span>, Not
              A Phase
            </h2>

            <p className="font-inter text-body">
              Anyday Fitness was founded on a simple belief: world-class
              training shouldn't be reserved for a select few. We built a space
              that combines luxury hospitality with serious athletic performance
              — premium equipment, certified coaches, and a community that
              pushes you further than you'd go alone.
            </p>
            <p className="font-inter text-body">
              Every detail, from our lighting to our recovery lounge, is
              designed to remove friction between you and your goals. Whether
              you're chasing your first pull-up or your tenth competition, you
              belong here.
            </p>

            {/* Inline stat row — replaces the floating badge that crowded the image */}
            <div className="flex items-center gap-8 mt-2 pt-6 border-t border-black/10">
              <div>
                <div className="font-teko text-4xl font-bold text-heading leading-none">
                  10+
                </div>
                <div className="font-rajdhani text-xs uppercase tracking-wide text-muted mt-1">
                  Years Running
                </div>
              </div>
              <div className="w-px h-10 bg-black/10" />
              <div>
                <div className="font-teko text-4xl font-bold text-heading leading-none">
                  2015
                </div>
                <div className="font-rajdhani text-xs uppercase tracking-wide text-muted mt-1">
                  Founded In
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/image/image14.webp"
              alt="Trainer coaching a member"
              className="w-full h-[420px] object-cover rounded-lg border border-black/10 shadow-sm"
            />

            {/* Single floating quote card — clean, no clipping/overlap issues */}
            <div className="absolute -bottom-8 left-3 right-3 xs:right-auto xs:-left-4 sm:-left-8 max-w-[260px] rounded-xl border border-black/10 bg-surface p-5 shadow-xl">
              <p className="font-teko text-lg text-heading leading-snug">
                "We built the space we always wished existed."
              </p>
              <p className="font-rajdhani text-xs uppercase tracking-wide text-primary mt-2">
                — Founder, Anyday Fitness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Why — unified panel, not scattered cards */}
      <section className="py-16 sm:py-24 bg-surface2">
        <div className="container-x">
          <div className="grid sm:grid-cols-3 rounded-2xl border border-black/10 bg-surface shadow-sm overflow-hidden">
            {pillars.map((item, i) => (
              <div
                key={item.title}
                className={`relative p-8 sm:p-10 flex flex-col gap-4 ${
                  i !== 0 ? "sm:border-l border-black/10" : ""
                }`}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="font-teko text-2xl font-semibold text-heading uppercase">
                  {item.title}
                </h3>
                <p className="font-inter text-sm text-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 sm:py-24">
        <div className="container-x flex flex-col items-center">
          <SectionHeading
            eyebrow="The People Behind It"
            title="Meet Our"
            highlight="Founders"
            className="mb-14"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-5xl">
            {founders.map((person) => (
              <div
                key={person.name}
                className="group flex flex-col items-center text-center gap-4 rounded-2xl border border-black/10 bg-surface p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-500 hover:-translate-y-1.5"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-black/10 shrink-0 flex items-center justify-center bg-primary/10">
                  <span className="font-teko text-4xl sm:text-5xl font-bold text-primary leading-none">
                    {person.name.trim().charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h3 className="font-teko text-xl sm:text-2xl font-semibold text-heading uppercase leading-none">
                    {person.name}
                  </h3>
                  <p className="font-rajdhani text-xs uppercase tracking-wide text-primary mt-2">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 sm:py-24 bg-surface2">
        <div className="container-x flex flex-col items-center">
          <SectionHeading
            eyebrow="Our Space"
            title="World-Class"
            highlight="Facilities"
            className="mb-14"
          />
          <div className="grid sm:grid-cols-3 gap-6 w-full">
            {facilities.map((f, i) => (
              <div
                key={f.title}
                className="group relative rounded-lg overflow-hidden border border-black/10 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-500 hover:-translate-y-1.5"
              >
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/5" />
                <span className="absolute top-4 left-4 font-teko text-sm font-bold text-primary bg-black/50 border border-white/10 rounded-full w-8 h-8 flex items-center justify-center">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="absolute bottom-0 p-6 w-full flex items-end justify-between gap-3">
                  <div>
                    <h3 className="font-teko text-2xl font-semibold text-surface uppercase leading-none">
                      {f.title}
                    </h3>
                    <p className="font-inter text-xs text-surface mt-1.5 max-w-[220px]">
                      {f.desc}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

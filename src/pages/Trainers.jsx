// import { useState } from "react";
// import PageHero from "../components/PageHero";
// import TrainerCard from "../components/TrainerCard";
// import { trainers } from "../data/trainers";

// const categories = ["All", "Strength", "Weight Loss", "Functional", "Cardio", "Nutrition"];

// export default function Trainers() {
//   const [active, setActive] = useState("All");

//   const filtered =
//     active === "All" ? trainers : trainers.filter((t) => t.category === active);

//   return (
//     <>
//       <PageHero
//         eyebrow="Our Team"
//         title="Meet Your"
//         highlight="Trainers"
//         description="Certified experts dedicated to helping you train smarter, recover better, and hit every goal."
//         image="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1600&auto=format&fit=crop"
//       />

//       <section className="py-16 sm:py-24">
//         <div className="container-x">
//           <div className="mb-14 -mx-4 px-4 sm:mx-0 sm:px-0">
//             <div className="flex sm:flex-wrap sm:justify-center gap-3 overflow-x-auto sm:overflow-visible scrollbar-none scroll-smooth snap-x snap-mandatory sm:snap-none">
//               {categories.map((cat) => (
//                 <button
//                   key={cat}
//                   onClick={() => setActive(cat)}
//                   className={`shrink-0 snap-start font-rajdhani font-bold uppercase tracking-wide text-sm px-5 py-2.5 rounded-md border transition-all duration-300 whitespace-nowrap ${
//                     active === cat
//                       ? "bg-primary text-black border-primary"
//                       : "bg-transparent border-white/15 text-body hover:border-primary hover:text-primary"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filtered.map((trainer) => (
//               <TrainerCard key={trainer.id} trainer={trainer} />
//             ))}
//           </div>

//           {filtered.length === 0 && (
//             <p className="text-center text-muted font-inter mt-10">
//               No trainers found in this category.
//             </p>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }

import { useState } from "react";
import PageHero from "../components/PageHero";
import TrainerCard from "../components/TrainerCard";
import { trainers } from "../data/trainers";

const categories = [
  "All",
  "Strength",
  "Weight Loss",
  "Functional",
  "Cardio",
  "Nutrition",
];

export default function Trainers() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? trainers : trainers.filter((t) => t.category === active);

  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Meet Your"
        highlight="Trainers"
        description="Certified experts dedicated to helping you train smarter, recover better, and hit every goal."
        image="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <div className="flex gap-3 mb-14 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 whitespace-nowrap font-rajdhani font-bold uppercase tracking-wide text-sm px-5 py-2.5 rounded-md border transition-all duration-300 ${
                  active === cat
                    ? "bg-primary text-black border-primary"
                    : "bg-transparent border-white/15 text-body hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((trainer) => (
              <TrainerCard key={trainer.id} trainer={trainer} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted font-inter mt-10">
              No trainers found in this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

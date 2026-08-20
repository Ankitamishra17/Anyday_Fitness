// import { memberships } from "../data/memberships";
// import PricingCard from "./PricingCard";
// import SectionHeading from "./SectionHeading";

// export default function MembershipSection() {
//   return (
//     <section className="relative py-20 sm:py-28 bg-surface2">
//       <div className="container-x flex flex-col items-center">
//         <SectionHeading
//           eyebrow="Membership"
//           title="Choose Your"
//           highlight="Plan"
//           align="center"
//           className="mb-14"
//         />

//         <div className="grid sm:grid-cols-3 gap-6 w-full max-w-5xl sm:items-center">
//           {memberships.map((plan) => (
//             <div
//               key={plan.id}
//               className={plan.popular ? "sm:-translate-y-3" : "opacity-90"}
//             >
//               <PricingCard plan={plan} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { memberships } from "../data/memberships";
import PricingCard from "./PricingCard";
import SectionHeading from "./SectionHeading";
import Button from "./Button";

export default function MembershipSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-surface2">
      <div className="container-x flex flex-col items-center">
        <SectionHeading
          eyebrow="Membership"
          title="Choose Your"
          highlight="Plan"
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full items-stretch">
          {memberships.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Promo panel */}
        {/* <div className="relative rounded-xl overflow-hidden border border-white/10 min-h-[260px] w-full mt-6 group">
          <img
            src="/image/image15.webp"
            alt="Luxury modern gym interior"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />

          <div className="absolute top-5 right-5 bg-primary clip-diagonal px-4 py-2.5">
            <p className="font-teko text-sm font-semibold text-black uppercase leading-none">
              24/7 Open
            </p>
          </div>

          <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 gap-4">
            <h3 className="font-teko text-3xl sm:text-4xl font-semibold uppercase leading-[0.95] text-heading">
              Your Only <span className="text-primary">Limit Is You</span>
            </h3>
            <Button as="a" href="/contact" className="w-fit !py-2.5 text-sm">
              Take A Tour
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
}



// import { memberships } from "../data/memberships";
// import PricingCard from "./PricingCard";
// import SectionHeading from "./SectionHeading";
// import Button from "./Button";

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

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full items-stretch">
//           {memberships.map((plan) => (
//             <PricingCard key={plan.id} plan={plan} />
//           ))}
//         </div>

      
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import { memberships } from "../data/memberships";
import PricingCard from "./PricingCard";
import SectionHeading from "./SectionHeading";
import JoinNowModal from "./JoinNowModal";

export default function MembershipSection() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const handleChoosePlan = () => {
    setIsJoinModalOpen(true);
  };

  return (
    <>
      <section  id="membership" className="relative py-20 sm:py-28 bg-surface2">
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
              <PricingCard
                key={plan.id}
                plan={plan}
                onChoosePlan={handleChoosePlan}
              />
            ))}
          </div>
        </div>
      </section>

      {/* JOIN NOW MODAL */}
      <JoinNowModal
        open={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />
    </>
  );
}

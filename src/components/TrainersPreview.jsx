import { trainers } from "../data/trainers";
import TrainerCard from "./TrainerCard";
import SectionHeading from "./SectionHeading";


export default function TrainersPreview() {
  const featured = trainers;

  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-x flex flex-col items-center">
        <SectionHeading
          eyebrow="Meet The Team"
          title="Our Expert"
          highlight="Trainers"
          className="mb-14"
        />

        <div className="relative w-full">
          {/* edge fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex gap-5 sm:gap-6 w-full overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 sm:mx-0 sm:px-6 pb-2">
            {featured.map((trainer) => (
              <div
                key={trainer.id}
                className="shrink-0 snap-start w-[240px] sm:w-[280px] lg:w-[300px]"
              >
                <TrainerCard trainer={trainer} />
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}

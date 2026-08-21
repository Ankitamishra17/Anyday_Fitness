import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { trainers } from "../data/trainers";
import TrainerCard from "./TrainerCard";
import SectionHeading from "./SectionHeading";

export default function TrainersPreview() {
  const featured = trainers;
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    const card = container?.children[index];
    if (card) {
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => scrollToIndex(Math.max(activeIndex - 1, 0));
  const handleNext = () =>
    scrollToIndex(Math.min(activeIndex + 1, featured.length - 1));

  const handleScroll = () => {
    const container = scrollRef.current;
    const card = container?.children[0];
    if (!container || !card) return;
    const gap = 20; // matches gap-5
    const cardWidth = card.offsetWidth + gap;
    const index = Math.round(container.scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), featured.length - 1));
  };

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

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-5 sm:gap-6 w-full overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 sm:mx-0 sm:px-6 pb-2"
          >
            {featured.map((trainer) => (
              <div
                key={trainer.id}
                className="shrink-0 snap-start w-full sm:w-[280px] lg:w-[300px]"
              >
                <TrainerCard trainer={trainer} />
              </div>
            ))}
          </div>
        </div>

        {/* mobile scroll controls */}
        <div className="flex sm:hidden items-center justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous trainer"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-primary/40 text-primary disabled:opacity-30 disabled:pointer-events-none active:scale-95 transition-all duration-200"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-1.5">
            {featured.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-5 bg-primary" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={activeIndex === featured.length - 1}
            aria-label="Next trainer"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-primary/40 text-primary disabled:opacity-30 disabled:pointer-events-none active:scale-95 transition-all duration-200"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";

export default function TrainerCard({ trainer }) {
  const initial = trainer.name.trim().charAt(0).toUpperCase();

  return (
    <div className="group relative rounded-lg overflow-hidden border border-white/10 hover:border-primary/60 bg-white/[0.02] transition-all duration-500">
      {/* Avatar zone */}
      <div className="relative h-56 sm:h-64 flex items-center justify-center overflow-hidden">
        {/* ambient backdrop */}
        <div
          className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
        <div className="absolute -inset-1 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />

        {/* letter avatar */}
        <div className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full ring-2 ring-primary/30 group-hover:ring-4 group-hover:ring-primary/80 bg-black/70 transition-all duration-500 group-hover:scale-105">
          <span className="font-teko text-5xl sm:text-6xl font-semibold text-primary leading-none select-none">
            {initial}
          </span>
        </div>

        {/* socials */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400">
          {[FacebookIcon, InstagramIcon, YoutubeIcon].map((Icon, i) => (
            
            <a  key={i}
              href="#"
              aria-label="social link"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-black/70 border border-primary/50 text-primary hover:bg-primary hover:text-black transition-colors duration-300"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>

      {/* info */}
      <div className="p-5 border-t border-white/10">
        <h3 className="font-teko text-2xl font-semibold text-offwhite uppercase leading-none">
          {trainer.name}
        </h3>
        <p className="font-rajdhani text-sm font-semibold text-primary uppercase tracking-wide mt-1">
          {trainer.specialization}
        </p>
        <p className="font-inter text-xs text-muted mt-1">{trainer.experience}</p>
      </div>
    </div>
  );
}
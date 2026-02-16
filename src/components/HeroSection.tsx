import heroImage from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-primary-foreground/80 font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          Celebrando nosso amor
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-primary-foreground font-medium leading-tight mb-6 animate-fade-in-up animation-delay-200">
          Ana & Rafael
        </h1>
        <div className="w-16 h-px bg-gold-light mx-auto mb-6 animate-fade-in-up animation-delay-200" />
        <p className="font-body text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 animate-fade-in-up animation-delay-400">
          Que alegria ter você conosco neste momento tão especial!
          Sua presença já é o maior presente, mas se quiser nos
          presentear, escolha um dos cards abaixo com carinho.
        </p>
        <a
          href="#presentes"
          className="inline-block animate-fade-in-up animation-delay-400"
        >
          <span className="font-body text-sm tracking-[0.2em] uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors cursor-pointer">
            Ver presentes ↓
          </span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

import heroImage from "@/assets/canvas.png";
import monograma from "@/assets/mono1.png";
import moldSupEsq from "@/assets/mold_sup_esq.png";
import moldSupDir from "@/assets/mold_sup_dir.png";
import moldInfEsq from "@/assets/mold_inf_esq.png";
import moldInfDir from "@/assets/mold_inf_dir.png";



const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-foreground/30" />
      </div>
      {/* Molduras nos cantos */}
      <img src={moldSupEsq} alt="" className="absolute top-0 left-0 w-40 md:w-56 pointer-events-none z-20" />
      <img src={moldSupDir} alt="" className="absolute top-0 right-0 w-40 md:w-56 pointer-events-none z-20" />
      <img src={moldInfEsq} alt="" className="absolute bottom-0 left-0 w-40 md:w-56 pointer-events-none z-20" />
      <img src={moldInfDir} alt="" className="absolute bottom-0 right-0 w-40 md:w-56 pointer-events-none z-20" />
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-primary-foreground/80 font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          Celebrando nosso amor
        </p>
        <h1 style={{color: "#faf9f8"}} className="font-display text-5xl md:text-7xl text-primary-foreground font-medium leading-tight mb-6 animate-fade-in-up animation-delay-200">
          Isa & Vini
        </h1>
        <div className="w-24 h-px bg-gold-light mx-auto mb-14 animate-fade-in-up animation-delay-200" />
        <p className="font-body text-lg md:text-xl text-primary-foreground/90 leading-relaxed my-8 animate-fade-in-up animation-delay-400">
          Que alegria ter você conosco neste momento tão especial!<br />
          Tê-lo em nossas vidas já é o maior presente, mas se quiser nos
          presentear, escolha um dos cards abaixo com carinho.
        </p>
        {/* Monograma */}
        <div className="flex justify-center my-8 animate-fade-in-up animation-delay-400" style={{ width: "100%", height: "auto" }}>
          <img src={monograma} alt="Monograma Isa & Vini" className="w-60 h-24 object-contain mt-8" />
        </div>
        <a
          href="#presentes"
          className="inline-block animate-fade-in-up animation-delay-400"
        >
          <span style={{color: "#9f7c65"}} className="font-body text-sm tracking-[0.2em] uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors cursor-pointer">
            Ver presentes ↓
          </span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

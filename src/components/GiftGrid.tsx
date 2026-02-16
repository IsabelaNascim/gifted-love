import GiftCard from "./GiftCard";

const gifts = [
  {
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    title: "Um cantinho aconchegante",
    pixCode: "00020126580014br.gov.bcb.pix0136exemplo-pix-chave-1234567890",
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    title: "Uma viagem dos sonhos",
    pixCode: "00020126580014br.gov.bcb.pix0136exemplo-pix-chave-9876543210",
  },
  {
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    title: "Um jantar especial",
    pixCode: "00020126580014br.gov.bcb.pix0136exemplo-pix-chave-1122334455",
  },
  {
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop",
    title: "Flores para o novo lar",
    pixCode: "00020126580014br.gov.bcb.pix0136exemplo-pix-chave-5566778899",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
    title: "Nosso primeiro eletrodoméstico",
    pixCode: "00020126580014br.gov.bcb.pix0136exemplo-pix-chave-0011223344",
  },
  {
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
    title: "Um brinde ao nosso amor",
    pixCode: "00020126580014br.gov.bcb.pix0136exemplo-pix-chave-4455667788",
  },
];

const GiftGrid = () => {
  return (
    <section id="presentes" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-2">
            Lista de presentes
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
            Escolha com carinho
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-4" />
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Clique em um card para revelar o código PIX e nos presentear
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gifts.map((gift, index) => (
            <GiftCard key={index} {...gift} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftGrid;

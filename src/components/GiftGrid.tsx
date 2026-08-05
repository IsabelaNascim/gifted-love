import GiftCard from "./GiftCard";
import textura from "@/assets/Textura.png";
import flores from "@/assets/flores.png";

import img1_50 from "@/assets/img1 - 50.jpg";
import pix1_50 from "@/assets/pix1 - 50.jpg";

import img1_80 from "@/assets/img1 - 80.jpg";
import pix1_80 from "@/assets/pix2 - 80.jpg";

import img3_100 from "@/assets/img3 - 100.jpg";
import pix3_100 from "@/assets/pix3 - 100.jpg";

import img4_150 from "@/assets/img4 - 150.jpg";
import pix4_150 from "@/assets/pix4 - 150.jpg";

import img5_200 from "@/assets/img5 - 200.jpg";
import pix5_200 from "@/assets/pix5 - 200.jpg";

import img6_300 from "@/assets/img6 - 300.jpg";
import pix6_300 from "@/assets/pix6 - 300.jpg";

import img7_500 from "@/assets/img7 - 500.jpg";
import pix7_500 from "@/assets/pix7 - 500.jpg";

import img8 from "@/assets/img8 - undefined.jpg";
import pix8 from "@/assets/pix8 - undefined.jpg";

const gifts = [
  {
    image: img1_50,
    title: "Ajude-nos com o pastel de camarão do aeroporto de Marrakech (R$50)",
    pixCode: "00020126810014br.gov.bcb.pix01369290994f-d2d3-4975-a126-62f9cd3c8ed60219Presente Isa e Vini520400005303986540550.005802BR5924ISABELA PAULO NASCIMENTO6009GUARULHOS62290525S5eZvslkbkADeNz6N6WAOuftT6304FEA0",
    qrCode: pix1_50,
  },
  {
    image: img1_80,
    title: "Ajude-nos a comprar passeios legais e tiramos várias fotos boas, afinal, ''Cada mergulho é um flash!'' (R$80)",
    pixCode: "00020126810014br.gov.bcb.pix013671b44f98-9a8c-48a2-ac16-a855253207e30219Presente Isa e Vini520400005303986540580.005802BR5924ISABELA PAULO NASCIMENTO6009GUARULHOS622905255TyZZEBcOSu4mtJNpnrbeb28W6304D83C",
    qrCode: pix1_80,
  },
  {
    image: img3_100,
    title: "Ajude-nos a comprar muito ouro na Medina (inshallah!) (R$100)",
    pixCode: "00020126770014br.gov.bcb.pix0132isabelapaulonascimento@gmail.com0219Presente Isa e Vini5204000053039865406100.005802BR5924ISABELA PAULO NASCIMENTO6009GUARULHOS62290525gk5WVZMOJeZdyBce8dLTH2w1D6304E29E",
    qrCode: pix3_100,
  },
  {
    image: img4_150,
    title: "Ajude-nos a não jogar nossa sorte no vento (R$150)",
    pixCode: "00020126810014br.gov.bcb.pix0136d4a0238b-2f6d-43e3-a8aa-1677c3012d700219Presente Isa e Vini5204000053039865406150.005802BR5924ISABELA PAULO NASCIMENTO6009GUARULHOS6229052517XnCjd35g2LdtdEcrdAXMlBP6304AA9F",
    qrCode: pix4_150,
  },
  {
    image: img5_200,
    title: "Ajude no dote do noivo (pra ele não ser trocado por um camelo) (R$200)",
    pixCode: "00020126770014br.gov.bcb.pix0132isabelapaulonascimento@gmail.com0219Presente Isa e Vini5204000053039865406200.005802BR5924ISABELA PAULO NASCIMENTO6009GUARULHOS62290525hYYotTShypxiA20sAcmnRn6Vp630462F7",
    qrCode: pix5_200,
  },
  {
    image: img6_300,
    title: "Ajude-nos a não arder no mármore do inferno (R$300)",
    pixCode: "00020126810014br.gov.bcb.pix0136b24dd2fe-3333-4ba9-b6a2-51aa9e5c79590219Presente Isa e Vini5204000053039865406300.005802BR5924ISABELA PAULO NASCIMENTO6009GUARULHOS62290525Z8tVo5AG7MijvQtOZ3Ncae1Ng6304E1CB",
    qrCode: pix6_300,
  },
  {
    image: img7_500,
    title: "Zoraide leu na borra do café que uma pessoa muito generosa escolheria esta opção (R$500)",
    pixCode: "00020126810014br.gov.bcb.pix0136a96a934d-79e9-468c-b3bb-9f1696a605ef0219Presente Isa e Vini5204000053039865406500.005802BR5924ISABELA PAULO NASCIMENTO6009GUARULHOS62290525K2QjdCHEQRZJZ7gTjxEmyMbap6304B193",
    qrCode: pix7_500,
  },
  {
    image: img8,
    title: "Maktub - Estava escrito para acontecer! (O valor que sentir em seu coração)",
    pixCode: "00020126810014br.gov.bcb.pix01365edf2fc0-7eeb-4a66-8fbd-5bab2c21a50e0219Presente Isa e Vini5204000053039865802BR5924ISABELA PAULO NASCIMENTO6009GUARULHOS62290525GnsDoQ9ZvCIY31QTmrCz7ejtG630475D4",
    qrCode: pix8,
  },
];

const GiftGrid = () => {
  return (
    <section id="presentes" className="py-20 px-6" style={{ backgroundImage: `url(${textura})`, backgroundSize: "cover", backgroundRepeat: "repeat" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-14">
            Lista de presentes
          </p>
          <h2 style={{color: "#403030"}} className="font-display text-3xl md:text-5xl text-foreground mb-3">
            Estamos saindo em viagem de lua de mel para o Marrocos<br />
          </h2>
          <h3 style={{color: "#403030"}} className="font-display text-3xl md:text-2xl text-foreground mb-5">
            Ajude-nos a não passar aperto nesse rolê e a trazer muito ouro (Inshallah!)
          </h3>
          <div className="w-12 h-px bg-gold mx-auto mb-14" />
          {/* Monograma */}
          <div className="flex justify-center my-8 animate-fade-in-up animation-delay-400" style={{ width: "100%", height: "auto" }}>
            <img src={flores} alt="Monograma Isa & Vini" className="w-60 h-24 object-contain mt-8" />
          </div>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Escolha com carinho, clique em um card para revelar o código PIX e nos presentear
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

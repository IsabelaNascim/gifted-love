import { Message } from "@/types/Message";
import textura from "@/assets/textura.png";
import flor from "@/assets/flor.png";
import moldSupEsq from "@/assets/mold_sup_esq.png";
import moldSupDir from "@/assets/mold_sup_dir.png";
import moldInfEsq from "@/assets/mold_inf_esq.png";
import moldInfDir from "@/assets/mold_inf_dir.png";

interface GuestMessagesProps {
  messages: Message[];
}

export default function GuestMessages({
  messages,
}: GuestMessagesProps) {

  return (
    <section id="mensagens" className="relative px-6 border-t border-border" style={{ backgroundImage: `url(${textura})`, backgroundSize: "cover", backgroundRepeat: "repeat", paddingTop: "5rem", paddingBottom: "10rem" }}>
      {/* Molduras nos cantos */}
      <img src={moldSupEsq} alt="" className="absolute top-0 left-0 w-40 md:w-56 pointer-events-none z-20" />
      <img src={moldSupDir} alt="" className="absolute top-0 right-0 w-40 md:w-56 pointer-events-none z-20" />
      <img src={moldInfEsq} alt="" className="absolute bottom-0 left-0 w-40 md:w-56 pointer-events-none z-20" />
      <img src={moldInfDir} alt="" className="absolute bottom-0 right-0 w-40 md:w-56 pointer-events-none z-20" />

      <div className="max-w-2xl mx-auto">

        <h2 className="text-3xl font-display text-center mb-6 text-foreground" style={{color: "#403030"}}>
          Mensagens dos convidados
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mb-14" />

        <div className="space-y-6">
          {messages.map((item) => (
            <div
              key={item.id}
              className="bg-card border rounded-xl p-6 shadow-sm"
              style={{ backgroundColor: "#faf9f8" }}
              >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg flex items-center gap-2" style={{color: "#403030"}}>
                  <img src={flor} alt="" className="w-10 h-10 object-contain" />
                    {item.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {new Date(item.created_at).toLocaleDateString("pt-BR")}
                </p>
              </div>
              <p className="mt-3 text-muted-foreground whitespace-pre-wrap"  style={{color: "#403030"}}>
                {item.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
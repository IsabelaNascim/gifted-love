import { useState } from "react";
import { Send } from "lucide-react";
import { createMessage } from "@/services/message.service";
import { Message } from "@/types/Message";
import flores from "@/assets/flores.png";
interface MessageCardProps {
  onMessageCreated: (message: Message) => void;
}

const MessageCard = ({
  onMessageCreated,
}: MessageCardProps) => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSend = async () => {
    if (!name.trim()) {
        alert("Informe seu nome.");
        return;
    }
    if (!message.trim()) {
        alert("Escreva uma mensagem.");
        return;
    }
    setSending(true);

    try {
      const novaMensagem = await createMessage(name,message);
      onMessageCreated(novaMensagem);
      setName("");
      setMessage("");
      document.getElementById("mensagens")?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error(error);
      alert("Não foi possível enviar sua mensagem.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="px-6 border-t border-border" style={{ paddingTop: 0, paddingBottom: "5rem", }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-14">
          {/* Monograma */}
          <div className="flex justify-center animate-fade-in-up animation-delay-400">
            <img src={flores} alt="Monograma Isa & Vini" className="w-60 h-24 object-contain mt-8" />
          </div>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-14">
            Deixe seus votos de felicidades
          </p>
        </div>
        {/* Card container */}
        <div className="bg-card rounded-2xl shadow-xl border border-border p-8 md:p-12 relative overflow-hidden">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold-light rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold-light rounded-br-2xl" />

          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl text-foreground italic">
              Aos noivos…
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mt-4" />
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-body text-muted-foreground mb-1 ml-2">
                Seu nome
              </label>
              <input
                type="text"
                value={name}
                maxLength={50}
                onChange={(e) => setName(e.target.value)}
                placeholder="Como você se chama?"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
              <p className="text-xs text-muted-foreground text-right mt-1 mr-2">
                {name.length}/50
              </p>
            </div>
            <div>
              <label className="block text-sm font-body text-muted-foreground mb-1 ml-2">
                Sua mensagem
              </label>
              <textarea
                value={message}
                maxLength={500}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escreva aqui sua mensagem para os noivos..."
                rows={5}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
              />
              <p className="text-xs text-muted-foreground text-right mt-1 mr-2">
                {message.length}/500
              </p>
            </div>
            <div className="text-center pt-2">
              <button
                onClick={handleSend}
                disabled={!message.trim() || sending}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-body text-sm tracking-wide hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {sending ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <>
                    <Send size={14} />
                    Enviar mensagem
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageCard;

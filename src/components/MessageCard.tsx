import { useState } from "react";
import { Heart, Send } from "lucide-react";

// 🔧 Cole aqui o seu endpoint do Formspree (ex: https://formspree.io/f/xxxxxxxx)
const FORMSPREE_ENDPOINT = "";

const MessageCard = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSend = async () => {
    if (!message.trim()) return;

    if (!FORMSPREE_ENDPOINT) {
      setError("Configure o endpoint do Formspree no arquivo MessageCard.tsx");
      return;
    }

    setSending(true);
    setError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || "Convidado anônimo",
          message: message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar mensagem.");
      }

      setSent(true);
    } catch {
      setError("Não foi possível enviar a mensagem. Tente novamente.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-muted/50">
      <div className="max-w-2xl mx-auto">
        <div className="bg-card rounded-2xl shadow-xl border border-border p-8 md:p-12 relative overflow-hidden">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold-light rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold-light rounded-br-2xl" />

          <div className="text-center mb-8">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-2">
              Deixe sua mensagem
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground italic">
              Aos noivos…
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mt-4" />
          </div>

          {sent ? (
            <div className="text-center py-8 animate-fade-in-up">
              <Heart className="mx-auto mb-4 text-accent" size={40} fill="currentColor" />
              <p className="font-display text-xl text-foreground mb-2">
                Mensagem enviada com carinho 💛
              </p>
              <p className="text-muted-foreground font-body text-sm">
                Obrigado por suas palavras especiais!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-1">
                  Seu nome
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como você se chama?"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-1">
                  Sua mensagem
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escreva aqui sua mensagem para os noivos..."
                  rows={5}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                />
              </div>

              {error && (
                <p className="text-sm text-destructive font-body text-center">{error}</p>
              )}

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

              {!FORMSPREE_ENDPOINT && (
                <p className="text-xs text-center text-muted-foreground/60 font-body mt-2">
                  ⚙️ Para ativar o envio real, crie uma conta em{" "}
                  <a
                    href="https://formspree.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-muted-foreground transition-colors"
                  >
                    formspree.io
                  </a>{" "}
                  e cole o endpoint em <code className="bg-muted px-1 rounded">MessageCard.tsx</code>.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MessageCard;

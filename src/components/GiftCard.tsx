import { useState } from "react";
import { Check, Copy, QrCode } from "lucide-react";

interface GiftCardProps {
  image: string;
  title: string;
  pixCode: string;
  qrCode?: string;
}

const GiftCard = ({ image, title, pixCode, qrCode }: GiftCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(pixCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textarea = document.createElement("textarea");
      textarea.value = pixCode;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="flip-card cursor-pointer w-full"
      style={{ height: "400px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
        {/* Front */}
        <div className="flip-card-front rounded-lg overflow-hidden shadow-lg bg-card border border-border">
          <div className="h-[260px] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-4 text-center" style={{ height: "140px" }}>
            <p className="font-display text-lg text-card-foreground">{title}</p>
            <p className="text-xs text-muted-foreground mt-1 font-body">
              Toque para ver o PIX
            </p>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back rounded-lg overflow-hidden shadow-lg bg-card border border-border flex flex-col items-center justify-center p-6">
          {/* QR Code placeholder */}
          <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center mb-4 border border-border">
            <div className="text-center">
              <img src={qrCode} alt="QR Code" className="grid grid-cols-5 gap-0.5 w-20 h-20 mx-auto" />
            </div>
          </div>

          <p className="font-display text-base text-card-foreground mb-3">{title}</p>

          <div className="w-full">
            <input
              type="text"
              readOnly
              value={pixCode}
              className="w-full text-xs bg-muted text-muted-foreground p-2 rounded-md border border-border text-center font-mono truncate"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <button
            onClick={handleCopy}
            className={`mt-3 flex items-center gap-2 px-4 py-2 rounded-md text-sm font-body transition-all duration-300 ${
              copied
                ? "bg-sage/30 text-foreground"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
          >
            {copied ? (
              <>
                <Check size={14} /> Copiado!
              </>
            ) : (
              <>
                <Copy size={14} /> Copiar código PIX
              </>
            )}
          </button>

          <p className="text-xs text-muted-foreground mt-3 font-body">
            Toque para voltar
          </p>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;

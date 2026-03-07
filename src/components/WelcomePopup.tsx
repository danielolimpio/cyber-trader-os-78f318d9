import { useState, useEffect } from "react";
import { X, MessageSquare } from "lucide-react";
import robotGif from "@/assets/vespers-robot.gif";

const STORAGE_KEY = "vespers_popup_shown";

export const WelcomePopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      const timer = setTimeout(() => setOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-primary/40 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a14] shadow-[0_0_60px_rgba(247,181,0,0.15)] animate-in zoom-in-95 fade-in duration-400">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-20 rounded-full bg-white/10 p-1.5 text-white/70 transition hover:bg-white/20 hover:text-white"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Glow top border */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="flex flex-col items-center px-6 pt-6 pb-8 text-center">
          {/* Robot GIF */}
          <div className="mb-4 relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
            <img
              src={robotGif}
              alt="Vespers Bot"
              className="relative w-52 h-52 object-contain drop-shadow-[0_0_20px_rgba(247,181,0,0.4)]"
            />
          </div>

          {/* Badge */}
          <span className="mb-3 inline-block rounded-full bg-primary/20 border border-primary/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            🎁 Oferta Exclusiva
          </span>

          {/* Title */}
          <h2 className="mb-2 text-xl md:text-2xl font-bold text-white leading-tight">
            Licença <span className="text-primary">Grátis</span> por 3 Anos!
          </h2>

          {/* Description */}
          <p className="mb-6 text-sm text-white/70 max-w-xs leading-relaxed">
            Entre em contato pelo WhatsApp para ganhar uma licença grátis válida por <strong className="text-white">3 anos!</strong>
          </p>

          {/* WhatsApp number */}
          <p className="mb-4 text-sm font-semibold text-white/90">
            📱 (12) 98251-9116
          </p>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/5512982519116?text=Olá, Gostaria de saber mais sobre a Vespers Bot e a licença grátis."
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="flex items-center gap-2 rounded-xl bg-[#25D366] px-8 py-3.5 text-base font-bold text-white shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]"
          >
            <MessageSquare className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

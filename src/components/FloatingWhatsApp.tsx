import { MessageSquare } from "lucide-react";

export const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/5512982519116?text=Olá, Gostaria de saber mais sobre a Vespers Bot."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="WhatsApp"
    >
      <MessageSquare className="w-6 h-6" />
    </a>
  );
};

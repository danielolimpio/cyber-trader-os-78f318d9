import { useState } from "react";
import { Play } from "lucide-react";

interface YouTubeLazyProps {
  videoId: string;
  title: string;
  className?: string;
}

export const YouTubeLazy = ({ videoId, title, className = "" }: YouTubeLazyProps) => {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={className}
        loading="lazy"
      />
    );
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      className={`relative cursor-pointer bg-black group/yt ${className}`}
      aria-label={`Play ${title}`}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover/yt:bg-black/40 transition-colors">
        <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover/yt:scale-110 transition-transform">
          <Play className="w-8 h-8 text-white fill-white ml-1" />
        </div>
      </div>
    </button>
  );
};

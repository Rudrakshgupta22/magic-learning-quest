import { useState, useEffect } from "react";
import mascotImage from "@/assets/wise-owl-mascot.png";

interface MascotWelcomeProps {
  message: string;
  onClose?: () => void;
}

export const MascotWelcome = ({ message, onClose }: MascotWelcomeProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose?.(), 300);
  };

  return (
    <div
      className={`
        fixed top-4 right-4 z-50 flex items-start gap-3 p-4 
        card-magic max-w-sm transition-all duration-300 
        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}
      `}
    >
      <div className="flex-shrink-0">
        <img
          src={mascotImage}
          alt="Wise Owl Mascot"
          className="w-16 h-16 wiggle"
        />
      </div>
      
      <div className="flex-1">
        <div className="speech-bubble relative">
          <p className="text-foreground text-sm font-medium leading-relaxed">
            {message}
          </p>
          <div className="absolute -left-2 top-3 w-0 h-0 border-t-[8px] border-b-[8px] border-r-[12px] border-t-transparent border-b-transparent border-r-white"></div>
        </div>
        
        {onClose && (
          <button
            onClick={handleClose}
            className="mt-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Got it! ✨
          </button>
        )}
      </div>
    </div>
  );
};
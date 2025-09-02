import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface LearningAreaCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
  progress?: number;
  starsEarned?: number;
  totalStars?: number;
  onClick: () => void;
}

export const LearningAreaCard = ({
  title,
  description,
  icon: Icon,
  colorClass,
  progress = 0,
  starsEarned = 0,
  totalStars = 10,
  onClick
}: LearningAreaCardProps) => {
  const progressPercent = Math.max(0, Math.min(100, progress));

  return (
    <div 
      className="card-magic p-6 cursor-pointer magic-hover group relative overflow-hidden bounce-in"
      onClick={onClick}
    >
      {/* Background Pattern */}
      <div className={`absolute inset-0 ${colorClass} opacity-10 rounded-3xl`}></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header with Icon and Stars */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-4 rounded-2xl ${colorClass} text-white shadow-lg`}>
            <Icon size={32} className="drop-shadow-sm" />
          </div>
          
          {/* Stars Display */}
          <div className="flex flex-col items-end">
            <div className="flex gap-1 mb-1">
              {Array.from({ length: 3 }, (_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-full ${
                    i < Math.min(3, Math.floor(starsEarned / 3))
                      ? "bg-warning shadow-glow"
                      : "bg-muted"
                  }`}
                >
                  ⭐
                </div>
              ))}
            </div>
            <span className="text-xs text-muted-foreground font-medium">
              {starsEarned}/{totalStars} ⭐
            </span>
          </div>
        </div>
        
        {/* Title and Description */}
        <h3 className="text-xl font-bold text-foreground mb-2 font-playful">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-muted-foreground font-medium">Progress</span>
            <span className="text-xs font-bold text-foreground">{progressPercent}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className={`h-full ${colorClass} transition-all duration-500 ease-out rounded-full`}
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">
            {progress === 0 ? "Start Adventure!" : "Continue Journey!"}
          </span>
          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:wiggle">
            ▶️
          </div>
        </div>
      </div>
      
      {/* Magical Sparkles Effect on Hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-4 right-4 w-2 h-2 bg-warning rounded-full animate-ping"></div>
        <div className="absolute bottom-6 left-6 w-1 h-1 bg-primary-glow rounded-full animate-ping animation-delay-100"></div>
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-accent-glow rounded-full animate-ping animation-delay-200"></div>
      </div>
    </div>
  );
};
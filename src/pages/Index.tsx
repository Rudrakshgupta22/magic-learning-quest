import { useState, useEffect } from "react";
import { Calculator, Book, Puzzle, FlaskConical, Star, Trophy } from "lucide-react";
import { MascotWelcome } from "@/components/MascotWelcome";
import { LearningAreaCard } from "@/components/LearningAreaCard";
import mascotImage from "@/assets/wise-owl-mascot.png";

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const learningAreas = [
    {
      id: "math-land",
      title: "Math Land",
      description: "Explore magical numbers, solve puzzles, and discover the wonders of mathematics in this enchanted realm!",
      icon: Calculator,
      colorClass: "learning-area-math",
      progress: 25,
      starsEarned: 7,
      totalStars: 15
    },
    {
      id: "story-forest",
      title: "Story Forest", 
      description: "Journey through tales and adventures, improve your reading skills, and create your own magical stories!",
      icon: Book,
      colorClass: "learning-area-story",
      progress: 60,
      starsEarned: 12,
      totalStars: 20
    },
    {
      id: "puzzle-castle",
      title: "Puzzle Castle",
      description: "Challenge your mind with brain teasers, logic games, and exciting puzzle adventures fit for a young knight!",
      icon: Puzzle,
      colorClass: "learning-area-puzzle", 
      progress: 40,
      starsEarned: 8,
      totalStars: 12
    },
    {
      id: "science-lab",
      title: "Science Lab",
      description: "Conduct amazing experiments, discover how the world works, and become a brilliant young scientist!",
      icon: FlaskConical,
      colorClass: "learning-area-science",
      progress: 15,
      starsEarned: 3,
      totalStars: 18
    }
  ];

  const handleAreaClick = (areaId: string) => {
    setSelectedArea(areaId);
    // Here you would typically navigate to the specific learning area
    console.log(`Navigating to ${areaId}`);
  };

  const totalStars = learningAreas.reduce((sum, area) => sum + area.starsEarned, 0);
  const totalProgress = Math.round(learningAreas.reduce((sum, area) => sum + area.progress, 0) / learningAreas.length);

  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Welcome Message */}
      {showWelcome && (
        <MascotWelcome
          message="Welcome to KidsLearn World! I'm Ollie the Wise Owl. Choose a magical land to start your learning adventure! ✨"
          onClose={() => setShowWelcome(false)}
        />
      )}

      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8 bounce-in">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img 
              src={mascotImage} 
              alt="Ollie the Wise Owl" 
              className="w-16 h-16 wiggle"
            />
            <h1 className="text-4xl md:text-6xl font-bold font-playful text-foreground">
              KidsLearn World
            </h1>
            <img 
              src={mascotImage} 
              alt="Ollie the Wise Owl" 
              className="w-16 h-16 wiggle"
              style={{ animationDelay: '0.5s' }}
            />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
            Choose your magical learning adventure!
          </p>
          
          {/* Progress Summary */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 card-magic px-6 py-3">
              <Star className="w-6 h-6 text-warning" />
              <span className="font-bold text-lg text-foreground">{totalStars}</span>
              <span className="text-muted-foreground">Stars Collected</span>
            </div>
            <div className="flex items-center gap-2 card-magic px-6 py-3">
              <Trophy className="w-6 h-6 text-secondary" />
              <span className="font-bold text-lg text-foreground">{totalProgress}%</span>
              <span className="text-muted-foreground">Overall Progress</span>
            </div>
          </div>
        </header>

        {/* Learning Areas Grid */}
        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {learningAreas.map((area, index) => (
              <div 
                key={area.id}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <LearningAreaCard
                  title={area.title}
                  description={area.description}
                  icon={area.icon}
                  colorClass={area.colorClass}
                  progress={area.progress}
                  starsEarned={area.starsEarned}
                  totalStars={area.totalStars}
                  onClick={() => handleAreaClick(area.id)}
                />
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center mt-16 mb-8">
          <div className="card-magic p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-2 font-playful">
              Keep Learning, Keep Growing! 🌟
            </h3>
            <p className="text-muted-foreground">
              Every adventure makes you smarter and stronger. Ollie the Owl is always here to help guide your way!
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
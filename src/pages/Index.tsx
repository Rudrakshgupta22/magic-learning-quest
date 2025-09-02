import { useState } from "react";
import { Calculator, Microscope, BookOpen, Code, Star, Trophy, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import TypingText from "@/components/TypingText";
import { LearningAreaCard } from "@/components/LearningAreaCard";

const Index = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const learningAreas = [
    {
      id: "mathematics",
      title: "Mathematics",
      description: "Master algebra, geometry, calculus, and advanced mathematical concepts with interactive problem-solving tools.",
      icon: Calculator,
      colorClass: "subject-math",
      progress: 65,
      starsEarned: 28,
      totalStars: 40
    },
    {
      id: "science",
      title: "Science", 
      description: "Explore physics, chemistry, biology, and earth sciences through virtual labs and experiments.",
      icon: Microscope,
      colorClass: "subject-science",
      progress: 72,
      starsEarned: 35,
      totalStars: 45
    },
    {
      id: "language",
      title: "Language Arts",
      description: "Develop reading, writing, literature analysis, and communication skills for academic success.",
      icon: BookOpen,
      colorClass: "subject-language", 
      progress: 58,
      starsEarned: 22,
      totalStars: 35
    },
    {
      id: "technology",
      title: "Technology",
      description: "Learn programming, digital literacy, robotics, and emerging technologies for the future.",
      icon: Code,
      colorClass: "subject-tech",
      progress: 45,
      starsEarned: 18,
      totalStars: 30
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
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 slide-in">
            STEM Learning Hub
          </h1>
          <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium mb-8">
            <TypingText 
              text="Learn all the subjects of STEM with interactive content designed for rural learners"
              delay={50}
            />
          </div>
          
          {/* Progress Summary */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-12 fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-3 card-modern px-6 py-4">
              <Star className="w-6 h-6 text-warning" />
              <div className="text-left">
                <div className="font-bold text-xl text-foreground">{totalStars}</div>
                <div className="text-sm text-muted-foreground">Stars Earned</div>
              </div>
            </div>
            <div className="flex items-center gap-3 card-modern px-6 py-4">
              <Trophy className="w-6 h-6 text-secondary" />
              <div className="text-left">
                <div className="font-bold text-xl text-foreground">{totalProgress}%</div>
                <div className="text-sm text-muted-foreground">Progress</div>
              </div>
            </div>
            <div className="flex items-center gap-3 card-modern px-6 py-4">
              <Award className="w-6 h-6 text-success" />
              <div className="text-left">
                <div className="font-bold text-xl text-foreground">{learningAreas.length}</div>
                <div className="text-sm text-muted-foreground">Subjects</div>
              </div>
            </div>
          </div>
        </header>

        {/* Learning Areas Grid */}
        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {learningAreas.map((area, index) => (
              <div 
                key={area.id}
                className="fade-in"
                style={{ animationDelay: `${0.7 + index * 0.2}s` }}
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
          <div className="card-modern p-8 max-w-3xl mx-auto fade-in" style={{ animationDelay: '1.5s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Empowering Rural Education Through Technology
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Designed for students in classes 6-12, our platform brings quality STEM education to every corner of India. 
              Learn at your own pace with interactive content optimized for all devices.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
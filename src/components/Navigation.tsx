import { Home, BookOpen, PlayCircle, FileText, PenTool, Phone, LogIn, UserPlus } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { name: "Home", icon: Home, color: "btn-primary-modern" },
    { name: "Courses", icon: BookOpen, color: "btn-secondary-modern" },
    { name: "Tutorials", icon: PlayCircle, color: "btn-accent-modern" },
    { name: "Blog", icon: FileText, color: "btn-success-modern" },
    { name: "Notes", icon: PenTool, color: "btn-primary-modern" },
    { name: "Contact", icon: Phone, color: "btn-secondary-modern" }
  ];

  return (
    <nav className="w-full py-4 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Main Navigation - Centered */}
          <div className="flex-1 flex justify-center">
            <div className="flex flex-wrap gap-3 justify-center">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.name}
                    className={`${item.color} flex items-center gap-2 text-sm md:text-base`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="hidden sm:inline">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Auth Buttons - Right Side */}
          <div className="flex items-center gap-3 ml-4">
            <button className="btn-login flex items-center gap-2">
              <LogIn className="w-4 h-4" />
              <span className="hidden md:inline">Login</span>
            </button>
            <button className="btn-signup flex items-center gap-2">
              <UserPlus className="w-4 h-4" />
              <span className="hidden md:inline">Sign Up</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
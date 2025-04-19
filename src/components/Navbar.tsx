
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-border z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-mindful-sage to-mindful-mint flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="font-semibold text-xl text-mindful-sage">MindfulGlowHaven</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground/80 hover:text-mindful-sage transition-colors">Home</Link>
            <Link to="/assessment" className="text-foreground/80 hover:text-mindful-sage transition-colors">Assessment</Link>
            <Link to="/therapy-recommendations" className="text-foreground/80 hover:text-mindful-sage transition-colors">Therapy</Link>
            <Link to="/progress-tracker" className="text-foreground/80 hover:text-mindful-sage transition-colors">Progress</Link>
            <Link to="/therapist-connect" className="text-foreground/80 hover:text-mindful-sage transition-colors">Connect</Link>
            <Link to="/chatroom" className="text-foreground/80 hover:text-mindful-sage transition-colors">Community</Link>
            <Link to="/know-yourself" className="text-foreground/80 hover:text-mindful-sage transition-colors">Know Yourself</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button variant="ghost" size="icon">
              <Bell size={20} />
            </Button>
            <Link to="/login">
              <Button variant="outline" className="rounded-full text-mindful-sage border-mindful-sage hover:bg-mindful-sage/10">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="mindful-button">Register</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleNav} className="text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3 animate-fade-in">
            <Link to="/" className="block px-3 py-2 rounded-md hover:bg-muted" onClick={toggleNav}>Home</Link>
            <Link to="/assessment" className="block px-3 py-2 rounded-md hover:bg-muted" onClick={toggleNav}>Assessment</Link>
            <Link to="/therapy-recommendations" className="block px-3 py-2 rounded-md hover:bg-muted" onClick={toggleNav}>Therapy</Link>
            <Link to="/progress-tracker" className="block px-3 py-2 rounded-md hover:bg-muted" onClick={toggleNav}>Progress</Link>
            <Link to="/therapist-connect" className="block px-3 py-2 rounded-md hover:bg-muted" onClick={toggleNav}>Connect</Link>
            <Link to="/chatroom" className="block px-3 py-2 rounded-md hover:bg-muted" onClick={toggleNav}>Community</Link>
            <Link to="/know-yourself" className="block px-3 py-2 rounded-md hover:bg-muted" onClick={toggleNav}>Know Yourself</Link>
            <div className="pt-2 flex flex-col space-y-2">
              <Link to="/login" onClick={toggleNav}>
                <Button variant="outline" className="w-full rounded-full text-mindful-sage border-mindful-sage">Login</Button>
              </Link>
              <Link to="/register" onClick={toggleNav}>
                <Button className="mindful-button w-full">Register</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-mindful-sage/10 border-t border-mindful-sage/20 mt-12">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-mindful-sage to-mindful-mint flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-semibold text-xl text-mindful-sage">MindfulGlowHaven</span>
            </Link>
            <p className="text-foreground/70 text-sm">
              A safe space for your mental health journey. Find support, track progress, and grow in a nurturing environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-mindful-sage hover:text-mindful-sage/70 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-mindful-sage hover:text-mindful-sage/70 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-mindful-sage hover:text-mindful-sage/70 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-mindful-sage hover:text-mindful-sage/70 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-mindful-mauve">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/assessment" className="text-foreground/70 hover:text-mindful-sage transition-colors">Mental Health Assessment</Link></li>
              <li><Link to="/therapy-recommendations" className="text-foreground/70 hover:text-mindful-sage transition-colors">Therapy Resources</Link></li>
              <li><Link to="/know-yourself" className="text-foreground/70 hover:text-mindful-sage transition-colors">Self-Discovery Tools</Link></li>
              <li><Link to="#" className="text-foreground/70 hover:text-mindful-sage transition-colors">Crisis Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-mindful-mauve">Community</h3>
            <ul className="space-y-2">
              <li><Link to="/chatroom" className="text-foreground/70 hover:text-mindful-sage transition-colors">Support Groups</Link></li>
              <li><Link to="/therapist-connect" className="text-foreground/70 hover:text-mindful-sage transition-colors">Find Therapists</Link></li>
              <li><Link to="#" className="text-foreground/70 hover:text-mindful-sage transition-colors">Success Stories</Link></li>
              <li><Link to="#" className="text-foreground/70 hover:text-mindful-sage transition-colors">Events & Webinars</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-mindful-mauve">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-foreground/70 hover:text-mindful-sage transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-foreground/70 hover:text-mindful-sage transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-foreground/70 hover:text-mindful-sage transition-colors">Terms of Service</Link></li>
              <li><Link to="/feedback" className="text-foreground/70 hover:text-mindful-sage transition-colors">Feedback</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-mindful-sage/20 mt-8 pt-8 text-center text-foreground/60 text-sm">
          <p className="flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-mindful-pink" /> for better mental health
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} MindfulGlowHaven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

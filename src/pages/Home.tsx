
import { Link } from "react-router-dom";
import { ChevronRight, Heart, Shield, Users, BookOpen, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteCarousel from "@/components/QuoteCarousel";
import MoodTracker from "@/components/MoodTracker";
import DidYouKnow from "@/components/DidYouKnow";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_60%_20%,#DFF5EA_0%,#F5CAC3_25%,#A8DADC_50%,#84A59D_100%)] opacity-20"></div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-mindful-sage">
                Your journey to <span className="text-mindful-brightPink">better mental health</span> starts here
              </h1>
              <p className="text-lg text-foreground/80">
                MindfulGlowHaven provides a safe, supportive space to assess, track, and improve your mental wellbeing with expert guidance and community support.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <Link to="/assessment">
                  <Button className="mindful-button w-full sm:w-auto text-base">
                    Start Your Assessment
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/know-yourself">
                  <Button variant="outline" className="w-full sm:w-auto text-base border-mindful-sage text-mindful-sage hover:bg-mindful-sage/5">
                    Discover Yourself
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-[500px] mx-auto rounded-full bg-gradient-to-br from-mindful-mint via-mindful-blue to-mindful-sage opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <img 
                src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80&w=600" 
                alt="Calming nature scene" 
                className="rounded-3xl shadow-xl relative mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white/80 backdrop-blur-sm p-4 shadow-lg border border-mindful-sage/10 animate-float">
                <p className="text-mindful-sage font-medium">Join thousands improving their mental health</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-mindful-mint/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-mindful-mauve mb-4">How We Support Your Journey</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Our comprehensive approach provides personalized tools and resources for every step of your mental health journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="mindful-card text-center">
              <div className="w-16 h-16 rounded-full bg-mindful-pink/20 flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-mindful-pink" />
              </div>
              <h3 className="text-xl font-medium text-mindful-sage mb-3">Personalized Assessment</h3>
              <p className="text-foreground/70">
                Evidence-based questionnaires to understand your mental health needs and track progress over time.
              </p>
            </div>
            
            <div className="mindful-card text-center">
              <div className="w-16 h-16 rounded-full bg-mindful-blue/20 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-mindful-blue" />
              </div>
              <h3 className="text-xl font-medium text-mindful-sage mb-3">Therapy Resources</h3>
              <p className="text-foreground/70">
                Access mindfulness exercises, CBT techniques, breathing sessions, and journaling prompts.
              </p>
            </div>
            
            <div className="mindful-card text-center">
              <div className="w-16 h-16 rounded-full bg-mindful-sage/20 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-mindful-sage" />
              </div>
              <h3 className="text-xl font-medium text-mindful-sage mb-3">Expert Connection</h3>
              <p className="text-foreground/70">
                Find and connect with qualified therapists specialized in various mental health areas.
              </p>
            </div>
            
            <div className="mindful-card text-center">
              <div className="w-16 h-16 rounded-full bg-mindful-mauve/20 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-mindful-mauve" />
              </div>
              <h3 className="text-xl font-medium text-mindful-sage mb-3">Community Support</h3>
              <p className="text-foreground/70">
                Join a safe, anonymous community to share experiences and receive encouragement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mood Tracking & Quote Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MoodTracker />
            <QuoteCarousel />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-mindful-sage to-mindful-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Begin Your Healing Journey Today</h2>
            <p className="text-white/80 mb-8">
              Mental health is a journey, not a destination. Let us walk alongside you with the tools, resources, and support you need.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link to="/register">
                <Button className="bg-white text-mindful-sage hover:bg-white/90 w-full sm:w-auto text-base">
                  Create Your Account
                </Button>
              </Link>
              <Link to="/assessment">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto text-base">
                  Take Assessment First
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mindful-sage mb-4">Learn More About Mental Health</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Explore our collection of articles, guides, and resources to better understand mental health.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="mindful-card">
              <div className="h-48 rounded-xl bg-mindful-pink/20 mb-4 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-mindful-pink/40" />
              </div>
              <h3 className="text-xl font-medium text-mindful-sage mb-2">Understanding Anxiety</h3>
              <p className="text-foreground/70 mb-4">
                Learn about different types of anxiety disorders, their symptoms, and effective management strategies.
              </p>
              <Link to="#" className="text-mindful-sage font-medium hover:underline inline-flex items-center">
                Read More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="mindful-card">
              <div className="h-48 rounded-xl bg-mindful-blue/20 mb-4 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-mindful-blue/40" />
              </div>
              <h3 className="text-xl font-medium text-mindful-sage mb-2">Depression Guide</h3>
              <p className="text-foreground/70 mb-4">
                An in-depth look at depression, including causes, symptoms, treatment options, and self-care practices.
              </p>
              <Link to="#" className="text-mindful-sage font-medium hover:underline inline-flex items-center">
                Read More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="mindful-card">
              <div className="h-48 rounded-xl bg-mindful-sage/20 mb-4 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-mindful-sage/40" />
              </div>
              <h3 className="text-xl font-medium text-mindful-sage mb-2">Mindfulness Practices</h3>
              <p className="text-foreground/70 mb-4">
                Discover how mindfulness can transform your mental health with practical exercises and techniques.
              </p>
              <Link to="#" className="text-mindful-sage font-medium hover:underline inline-flex items-center">
                Read More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Did You Know Popup */}
      <DidYouKnow />
    </div>
  );
};

export default Home;

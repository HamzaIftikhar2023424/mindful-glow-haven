
import { useState, useEffect } from "react";
import { X, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const facts = [
  "1 in 4 people will experience a mental health problem of some kind each year.",
  "Regular exercise can reduce symptoms of depression and anxiety as effectively as medication for some people.",
  "Journaling for just 15-20 minutes per day can significantly improve mental well-being.",
  "Getting enough sleep is crucial for mental health - most adults need 7-9 hours per night.",
  "The brain continues to develop until age 25, which is why young adults may experience mood swings.",
  "Social connections are as important to physical health as blood pressure and obesity.",
  "Mindfulness meditation can physically change the brain, increasing gray matter in regions linked to learning and memory.",
  "Mental health conditions are often treatable, with success rates of 70-90% with proper care.",
  "Just 10 minutes of daily meditation can improve focus and reduce stress levels.",
  "Nature exposure for just 20 minutes can significantly lower stress hormone levels."
];

const DidYouKnow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    // Show the popup after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const closeFact = () => {
    setIsVisible(false);
  };

  const showNextFact = () => {
    setCurrentFact((prev) => (prev + 1) % facts.length);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 max-w-sm z-50 animate-slide-up">
      <div className="mindful-card border-mindful-blue shadow-lg">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center">
            <Info className="h-5 w-5 text-mindful-blue mr-2" />
            <h3 className="font-medium text-lg text-mindful-blue">Did You Know?</h3>
          </div>
          <Button variant="ghost" size="icon" onClick={closeFact} className="h-8 w-8 rounded-full hover:bg-mindful-blue/10">
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <p className="text-foreground/80 mb-5">
          {facts[currentFact]}
        </p>
        
        <div className="flex justify-between">
          <Button variant="outline" size="sm" onClick={closeFact} className="text-sm">
            Dismiss
          </Button>
          <Button size="sm" onClick={showNextFact} className="text-sm bg-mindful-blue hover:bg-mindful-blue/90 text-white">
            Another fact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DidYouKnow;

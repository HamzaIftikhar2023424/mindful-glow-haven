
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const quotes = [
  {
    text: "Mental health is not a destination, but a process. It's about how you drive, not where you're going.",
    author: "Noam Shpancer"
  },
  {
    text: "You don't have to be positive all the time. It's perfectly okay to feel sad, angry, annoyed, frustrated, scared and anxious. Having feelings doesn't make you a negative person. It makes you human.",
    author: "Lori Deschene"
  },
  {
    text: "Self-care is how you take your power back.",
    author: "Lalah Delia"
  },
  {
    text: "You are not alone in this journey. Every step you take is a step towards healing.",
    author: "MindfulGlowHaven"
  },
  {
    text: "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
    author: "Unknown"
  }
];

const QuoteCarousel = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className="mindful-card h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-medium text-mindful-sage">Daily Inspiration</h3>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" onClick={prevQuote} className="text-mindful-sage hover:bg-mindful-sage/10">
            <ChevronLeft size={20} />
          </Button>
          <Button variant="ghost" size="icon" onClick={nextQuote} className="text-mindful-sage hover:bg-mindful-sage/10">
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>
      
      <div className="relative overflow-hidden min-h-[150px] flex items-center">
        <div 
          className="transition-all duration-500 ease-in-out"
          style={{ opacity: 1 }}
        >
          <blockquote className="text-lg italic text-foreground/80">
            "{quotes[currentQuote].text}"
          </blockquote>
          <footer className="mt-4 text-right text-sm text-mindful-mauve">
            — {quotes[currentQuote].author}
          </footer>
        </div>
      </div>
      
      <div className="flex justify-center mt-4 space-x-1">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentQuote(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentQuote ? "bg-mindful-sage w-4" : "bg-mindful-sage/30"
            }`}
            aria-label={`Go to quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default QuoteCarousel;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { SendIcon, Smile, Meh, Frown, Star } from "lucide-react";

const Feedback = () => {
  const [mood, setMood] = useState<string | null>(null);
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!mood || !rating) {
      toast({
        title: "Missing information",
        description: "Please select your current mood and rate your experience.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Feedback Submitted",
        description: "Thank you for your feedback! It helps us improve our platform.",
      });
      
      // Reset form
      setMood(null);
      setRating(null);
      setFeedback("");
      setEmail("");
    }, 1500);
  };
  
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-mindful-sage mb-4">Share Your Feedback</h1>
          <p className="text-foreground/70">
            We'd love to hear about your experience with MindfulGlowHaven. Your feedback helps us improve our services.
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <Card className="border-mindful-sage/20 mb-8">
            <CardContent className="pt-6">
              <div className="mb-6">
                <h2 className="text-xl font-medium text-mindful-sage mb-4">How are you feeling today?</h2>
                <RadioGroup
                  value={mood || ""}
                  onValueChange={setMood}
                  className="flex justify-center space-x-8"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className="relative">
                      <RadioGroupItem value="good" id="mood-good" className="sr-only" />
                      <Label
                        htmlFor="mood-good"
                        className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all ${
                          mood === "good"
                            ? "bg-mindful-sage text-white"
                            : "bg-mindful-sage/10 text-mindful-sage hover:bg-mindful-sage/20"
                        }`}
                      >
                        <Smile className="h-8 w-8" />
                      </Label>
                    </div>
                    <span className="text-sm">Good</span>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-2">
                    <div className="relative">
                      <RadioGroupItem value="okay" id="mood-okay" className="sr-only" />
                      <Label
                        htmlFor="mood-okay"
                        className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all ${
                          mood === "okay"
                            ? "bg-mindful-blue text-white"
                            : "bg-mindful-blue/10 text-mindful-blue hover:bg-mindful-blue/20"
                        }`}
                      >
                        <Meh className="h-8 w-8" />
                      </Label>
                    </div>
                    <span className="text-sm">Okay</span>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-2">
                    <div className="relative">
                      <RadioGroupItem value="bad" id="mood-bad" className="sr-only" />
                      <Label
                        htmlFor="mood-bad"
                        className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all ${
                          mood === "bad"
                            ? "bg-mindful-mauve text-white"
                            : "bg-mindful-mauve/10 text-mindful-mauve hover:bg-mindful-mauve/20"
                        }`}
                      >
                        <Frown className="h-8 w-8" />
                      </Label>
                    </div>
                    <span className="text-sm">Not Great</span>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-medium text-mindful-sage mb-4">Rate your experience with us</h2>
                <div className="flex justify-center">
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                          rating !== null && star <= rating
                            ? "text-amber-400"
                            : "text-gray-300 hover:text-amber-200"
                        }`}
                      >
                        <Star className="h-8 w-8 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-mindful-sage/20 mb-8">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="feedback" className="text-base font-medium text-mindful-sage">
                    Tell us more about your experience
                  </Label>
                  <Textarea
                    id="feedback"
                    placeholder="Share your thoughts, suggestions, or concerns..."
                    className="mt-2 resize-none h-32"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-base font-medium text-mindful-sage">
                    Email (optional)
                  </Label>
                  <p className="text-sm text-foreground/70 mb-2">
                    If you'd like us to follow up with you about your feedback
                  </p>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center">
            <Button 
              type="submit" 
              className="bg-mindful-sage hover:bg-mindful-sage/90 text-white min-w-[150px]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                <span className="flex items-center">
                  <SendIcon className="mr-2 h-4 w-4" />
                  Submit Feedback
                </span>
              )}
            </Button>
          </div>
        </form>
        
        <div className="mt-16 text-center">
          <h2 className="text-xl font-medium text-mindful-sage mb-4">Need Immediate Support?</h2>
          <p className="text-foreground/70 mb-6 max-w-xl mx-auto">
            If you're experiencing a mental health crisis or need urgent assistance, please reach out to one of these resources:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Card className="border-mindful-sage/20">
              <CardContent className="p-4">
                <h3 className="font-medium mb-1">Crisis Text Line</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  Text HOME to 741741 for 24/7 support
                </p>
                <Button variant="outline" className="w-full text-sm">
                  Visit Website
                </Button>
              </CardContent>
            </Card>
            <Card className="border-mindful-sage/20">
              <CardContent className="p-4">
                <h3 className="font-medium mb-1">National Suicide Prevention Lifeline</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  Call 988 or 1-800-273-8255
                </p>
                <Button variant="outline" className="w-full text-sm">
                  Visit Website
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;


import { useState } from "react";
import { Calendar, MessageSquare, Star, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

type TherapistProps = {
  id: string;
  name: string;
  specialty: string[];
  rating: number;
  location: string;
  image: string;
  availableSlots: number;
};

const TherapistCard = ({
  id,
  name,
  specialty,
  rating,
  location,
  image,
  availableSlots,
}: TherapistProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();

  const handleConnect = () => {
    toast({
      title: "Request Sent",
      description: `Your connection request has been sent to ${name}. They will respond shortly.`,
      duration: 3000,
    });
  };

  return (
    <div className={`mindful-card transition-all duration-300 ${isExpanded ? "scale-[1.02]" : ""}`}>
      <div className="flex items-start gap-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-mindful-sage"
        />
        <div className="flex-1">
          <h3 className="font-medium text-lg">{name}</h3>
          <div className="flex items-center text-sm text-foreground/70 mb-1">
            <MapPin size={14} className="mr-1 text-mindful-pink" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm text-amber-500 mb-3">
            <Star size={14} className="mr-1" />
            <span>{rating.toFixed(1)} Rating</span>
          </div>
          <div className="flex flex-wrap gap-1 mb-3">
            {specialty.map((spec, index) => (
              <Badge key={index} variant="secondary" className="bg-mindful-mint text-mindful-sage">
                {spec}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className={`grid gap-3 transition-all duration-300 ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          {isExpanded && (
            <div className="pt-4 border-t border-border mt-3 animate-fade-in">
              <p className="text-sm text-foreground/70 mb-4">
                I'm a licensed therapist specializing in helping people overcome anxiety, depression, and relationship challenges. My approach is warm, collaborative, and focused on your unique needs.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-foreground/70">
                  <Clock size={14} className="mr-1 text-mindful-blue" />
                  <span>{availableSlots} slots available this week</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="rounded-full" onClick={handleConnect}>
                    <MessageSquare size={14} className="mr-1" />
                    Message
                  </Button>
                  <Button size="sm" className="rounded-full bg-mindful-sage text-white hover:bg-mindful-sage/90" onClick={handleConnect}>
                    <Calendar size={14} className="mr-1" />
                    Book
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full mt-3 text-mindful-mauve hover:text-mindful-mauve hover:bg-mindful-mauve/10"
      >
        {isExpanded ? "Show Less" : "View Details"}
      </Button>
    </div>
  );
};

export default TherapistCard;

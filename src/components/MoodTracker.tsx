
import { useState } from "react";
import { Smile, Meh, Frown } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const MoodTracker = () => {
  const [mood, setMood] = useState(5);
  const { toast } = useToast();

  const handleMoodChange = (value: number[]) => {
    setMood(value[0]);
  };

  const handleMoodSubmit = () => {
    toast({
      title: "Mood recorded",
      description: `You're feeling ${getMoodText(mood)} today. We've logged this for your progress tracking.`,
      duration: 3000,
    });
  };

  const getMoodText = (value: number) => {
    if (value <= 3) return "a bit down";
    if (value <= 6) return "okay";
    return "pretty good";
  };

  const getMoodIcon = () => {
    if (mood <= 3) return <Frown className="h-8 w-8 text-mindful-mauve" />;
    if (mood <= 6) return <Meh className="h-8 w-8 text-mindful-blue" />;
    return <Smile className="h-8 w-8 text-mindful-sage" />;
  };

  const getMoodColor = () => {
    if (mood <= 3) return "bg-mindful-mauve";
    if (mood <= 6) return "bg-mindful-blue";
    return "bg-mindful-sage";
  };

  return (
    <div className="mindful-card">
      <h3 className="text-xl font-medium text-mindful-sage mb-4">How are you feeling today?</h3>
      <div className="flex justify-center mb-6">{getMoodIcon()}</div>
      <div className="mb-6">
        <Slider
          defaultValue={[5]}
          min={1}
          max={10}
          step={1}
          onValueChange={handleMoodChange}
          className="my-4"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Not great</span>
          <span>Neutral</span>
          <span>Amazing</span>
        </div>
      </div>
      <div className="p-4 rounded-lg bg-background mb-6">
        <p className="text-center">
          You're feeling <span className="font-medium">{getMoodText(mood)}</span> today
        </p>
      </div>
      <Button onClick={handleMoodSubmit} className={`w-full ${getMoodColor()} text-white hover:opacity-90`}>
        Log My Mood
      </Button>
    </div>
  );
};

export default MoodTracker;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

type Question = {
  id: number;
  text: string;
  options: string[];
};

const phq9Questions: Question[] = [
  {
    id: 1,
    text: "Little interest or pleasure in doing things",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
  },
  {
    id: 2,
    text: "Feeling down, depressed, or hopeless",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
  },
  {
    id: 3,
    text: "Trouble falling or staying asleep, or sleeping too much",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
  },
  {
    id: 4,
    text: "Feeling tired or having little energy",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
  },
  {
    id: 5,
    text: "Poor appetite or overeating",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
  }
];

const AssessmentForm = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentStep, setCurrentStep] = useState(0);
  const { toast } = useToast();

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < phq9Questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Calculate score
    const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0);
    
    // Show result toast
    toast({
      title: "Assessment Completed",
      description: `Your PHQ-9 score is ${totalScore}. A clinician would normally interpret this for you.`,
      duration: 5000
    });
  };

  const currentQuestion = phq9Questions[currentStep];

  return (
    <div className="mindful-card">
      <h3 className="text-xl font-medium text-mindful-sage mb-6">PHQ-9 Depression Screening</h3>
      <p className="text-foreground/70 mb-8">
        Over the past 2 weeks, how often have you been bothered by any of the following problems?
      </p>
      
      <div className="mb-8">
        <h4 className="font-medium mb-4 text-foreground">
          {currentQuestion.text}
        </h4>
        
        <RadioGroup
          value={answers[currentQuestion.id]?.toString()}
          onValueChange={(value) => handleAnswer(currentQuestion.id, parseInt(value))}
          className="space-y-3"
        >
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={index.toString()} id={`q${currentQuestion.id}-option${index}`} />
              <Label 
                htmlFor={`q${currentQuestion.id}-option${index}`}
                className="cursor-pointer"
              >
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      
      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="border-mindful-sage text-mindful-sage"
        >
          Previous
        </Button>
        
        <div className="text-sm text-center text-muted-foreground">
          Question {currentStep + 1} of {phq9Questions.length}
        </div>
        
        <Button 
          onClick={handleNext}
          disabled={answers[currentQuestion.id] === undefined}
          className="bg-mindful-sage hover:bg-mindful-sage/90 text-white"
        >
          {currentStep < phq9Questions.length - 1 ? "Next" : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default AssessmentForm;

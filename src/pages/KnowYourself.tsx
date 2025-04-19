
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Brain, Heart, BookOpen, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const KnowYourself = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { toast } = useToast();
  
  const handleComplete = () => {
    toast({
      title: "Activity Completed",
      description: "Great job! Your progress has been saved.",
      duration: 3000,
    });
  };
  
  const disorders = [
    {
      id: "depression",
      name: "Depression",
      description: "Major Depressive Disorder is characterized by persistent feelings of sadness, hopelessness, and loss of interest in activities.",
      symptoms: [
        "Persistent sad, anxious, or 'empty' mood",
        "Loss of interest in activities once enjoyed",
        "Decreased energy or fatigue",
        "Difficulty concentrating or making decisions",
        "Changes in appetite or sleep patterns",
        "Feelings of worthlessness or excessive guilt",
        "Thoughts of death or suicide"
      ],
      prevalence: "Very common in late teens and early twenties",
      impact: "Can significantly affect academic performance, relationships, and daily functioning",
      resources: ["CBT Therapy", "Medication", "Support Groups", "Self-Care Practices"],
      color: "pink"
    },
    {
      id: "anxiety",
      name: "Anxiety Disorders",
      description: "Includes Generalized Anxiety Disorder (GAD), Social Anxiety, and Panic Disorder. Characterized by excessive worry and fear.",
      symptoms: [
        "Excessive worry about everyday matters",
        "Physical symptoms like racing heart, dizziness, shortness of breath",
        "Restlessness or feeling on edge",
        "Difficulty controlling worry",
        "Sleep problems",
        "Muscle tension",
        "Panic attacks (in some cases)"
      ],
      prevalence: "Often begins during teenage years, peaks in early adulthood",
      impact: "Can interfere with daily activities, social interactions, and quality of life",
      resources: ["CBT Therapy", "Mindfulness", "Relaxation Techniques", "Medication"],
      color: "blue"
    },
    {
      id: "adhd",
      name: "ADHD",
      description: "Attention-Deficit/Hyperactivity Disorder is characterized by patterns of inattention, hyperactivity, and impulsivity.",
      symptoms: [
        "Difficulty sustaining attention in tasks",
        "Often appears not to listen when spoken to directly",
        "Difficulty organizing tasks and activities",
        "Often fidgets or squirms",
        "Excessive talking or interrupting",
        "Difficulty waiting turn",
        "Forgetfulness in daily activities"
      ],
      prevalence: "Can persist from childhood into adolescence and adulthood",
      impact: "Impacts school/work performance, time management, and social relationships",
      resources: ["Behavioral Therapy", "Medication", "Organizational Strategies", "ADHD Coaching"],
      color: "sage"
    },
    {
      id: "bipolar",
      name: "Bipolar Disorder",
      description: "Characterized by alternating periods of depression and mania, affecting mood, energy, and activity levels.",
      symptoms: [
        "Manic episodes: abnormally elevated mood, increased energy",
        "Depressive episodes: feelings of sadness, hopelessness",
        "Dramatic shifts in mood and energy levels",
        "Impulsive or risky behavior during manic phases",
        "Sleep disturbances",
        "Racing thoughts",
        "Difficulty concentrating"
      ],
      prevalence: "Often begins in late teens to early 20s",
      impact: "Affects decision-making, relationships, and overall functioning",
      resources: ["Mood Stabilizers", "Psychotherapy", "Regular Sleep Schedule", "Support Groups"],
      color: "mauve"
    }
  ];
  
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-mindful-sage mb-4">Know Yourself Better</h1>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Understanding mental health conditions is the first step toward healing. Explore common conditions, recognize symptoms, and discover strategies for managing them.
          </p>
        </div>
        
        <Tabs defaultValue="understand">
          <TabsList className="mb-8 justify-center">
            <TabsTrigger value="understand">Understand Conditions</TabsTrigger>
            <TabsTrigger value="self-discovery">Self-Discovery</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="understand">
            <div className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-mindful-sage">Common Mental Health Conditions</h2>
                <Link to="/assessment">
                  <Button className="bg-mindful-sage hover:bg-mindful-sage/90 text-white">
                    Take Assessment
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {disorders.map((disorder) => (
                  <Card 
                    key={disorder.id} 
                    className={`border-mindful-${disorder.color}/20 hover:border-mindful-${disorder.color}/50 transition-colors overflow-hidden`}
                  >
                    <div className={`h-2 bg-mindful-${disorder.color}`}></div>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className={`h-10 w-10 rounded-full bg-mindful-${disorder.color}/20 flex items-center justify-center mr-3`}>
                            <Brain className={`h-5 w-5 text-mindful-${disorder.color}`} />
                          </div>
                          <div>
                            <h3 className="font-medium text-lg">{disorder.name}</h3>
                            <p className="text-xs text-muted-foreground">Prevalence: {disorder.prevalence}</p>
                          </div>
                        </div>
                        <Badge className={`bg-mindful-${disorder.color}/20 text-mindful-${disorder.color} border-mindful-${disorder.color}/30`}>
                          {disorder.id}
                        </Badge>
                      </div>
                      
                      <p className="text-foreground/70 mb-4">
                        {disorder.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Common Symptoms:</h4>
                        <ul className="text-sm space-y-1">
                          {disorder.symptoms.slice(0, 3).map((symptom, index) => (
                            <li key={index} className="flex items-start">
                              <div className={`h-5 w-5 rounded-full bg-mindful-${disorder.color}/20 flex-shrink-0 flex items-center justify-center mr-2 mt-0.5`}>
                                <Check className={`h-3 w-3 text-mindful-${disorder.color}`} />
                              </div>
                              <span className="text-foreground/80">{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className={`w-full text-mindful-${disorder.color} border-mindful-${disorder.color} hover:bg-mindful-${disorder.color}/5`}
                      >
                        Learn More About {disorder.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-mindful-sage">Understand Each Condition</h2>
            </div>
            
            <Card className="mb-10 border-mindful-sage/20">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="space-y-2">
                      {disorders.map((disorder, index) => (
                        <button
                          key={disorder.id}
                          onClick={() => setActiveIndex(index)}
                          className={`w-full text-left p-4 rounded-lg transition-colors ${
                            activeIndex === index
                              ? `bg-mindful-${disorder.color}/20 border-l-4 border-mindful-${disorder.color}`
                              : "hover:bg-muted"
                          }`}
                        >
                          <h3 className="font-medium">{disorder.name}</h3>
                          <p className="text-xs text-muted-foreground">Click to learn more</p>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className={`p-6 rounded-lg bg-mindful-${disorders[activeIndex].color}/10 mb-6`}>
                      <h3 className={`text-xl font-medium text-mindful-${disorders[activeIndex].color} mb-4`}>
                        {disorders[activeIndex].name}
                      </h3>
                      <p className="text-foreground/80 mb-4">{disorders[activeIndex].description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Symptoms:</h4>
                        <ul className="space-y-2">
                          {disorders[activeIndex].symptoms.map((symptom, index) => (
                            <li key={index} className="flex items-start">
                              <div className={`h-5 w-5 rounded-full bg-mindful-${disorders[activeIndex].color}/20 flex-shrink-0 flex items-center justify-center mr-2 mt-0.5`}>
                                <Check className={`h-3 w-3 text-mindful-${disorders[activeIndex].color}`} />
                              </div>
                              <span>{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-medium mb-2">Prevalence:</h4>
                          <p className="text-foreground/80">{disorders[activeIndex].prevalence}</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Impact:</h4>
                          <p className="text-foreground/80">{disorders[activeIndex].impact}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Treatment & Management:</h4>
                        <div className="flex flex-wrap gap-2">
                          {disorders[activeIndex].resources.map((resource, index) => (
                            <Badge key={index} variant="outline" className={`text-mindful-${disorders[activeIndex].color}`}>
                              {resource}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <Button variant="outline" className="border-mindful-sage text-mindful-sage">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Read Research
                      </Button>
                      
                      <Link to="/assessment">
                        <Button className="bg-mindful-sage hover:bg-mindful-sage/90 text-white">
                          Take Related Assessment
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="p-6 bg-mindful-mint/20 rounded-lg border border-mindful-sage/20 text-center">
              <h3 className="text-xl font-medium text-mindful-sage mb-2">Remember</h3>
              <p className="text-foreground/80 max-w-2xl mx-auto">
                Self-education is important, but it's not a substitute for professional diagnosis and treatment. If you identify with symptoms of any mental health condition, please consult with a healthcare provider.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="self-discovery">
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-mindful-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-mindful-pink" />
              </div>
              <h2 className="text-2xl font-semibold text-mindful-sage mb-4">Your Journey to Self-Discovery</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
                Understanding yourself is a powerful step toward mental wellness. Explore these activities to gain insights into your thoughts, emotions, and patterns.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <Card className="border-mindful-sage/20">
                  <CardContent className="pt-6">
                    <h3 className="font-medium text-lg mb-3">Values Exploration</h3>
                    <p className="text-foreground/70 mb-4">
                      Identify your core values and understand how they influence your decisions and well-being.
                    </p>
                    <Button 
                      className="w-full bg-mindful-sage hover:bg-mindful-sage/90 text-white"
                      onClick={handleComplete}
                    >
                      Start Activity
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-mindful-blue/20">
                  <CardContent className="pt-6">
                    <h3 className="font-medium text-lg mb-3">Emotional Awareness</h3>
                    <p className="text-foreground/70 mb-4">
                      Learn to identify and understand your emotions to develop healthier coping strategies.
                    </p>
                    <Button 
                      className="w-full bg-mindful-blue hover:bg-mindful-blue/90 text-white"
                      onClick={handleComplete}
                    >
                      Start Activity
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-mindful-pink/20">
                  <CardContent className="pt-6">
                    <h3 className="font-medium text-lg mb-3">Thought Patterns</h3>
                    <p className="text-foreground/70 mb-4">
                      Identify unhelpful thought patterns and learn techniques to challenge and reframe them.
                    </p>
                    <Button 
                      className="w-full bg-mindful-pink hover:bg-mindful-pink/90 text-white"
                      onClick={handleComplete}
                    >
                      Start Activity
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-mindful-sage">Personality Assessment</h2>
                <Button className="bg-mindful-sage hover:bg-mindful-sage/90 text-white" onClick={handleComplete}>
                  Take Assessment
                </Button>
              </div>
              
              <Card className="border-mindful-sage/20">
                <CardContent className="pt-6">
                  <p className="text-foreground/70 mb-6">
                    Understanding your personality traits can provide insights into your natural tendencies, strengths, and potential challenges. Our comprehensive personality assessment explores:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-mindful-sage/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="h-3 w-3 text-mindful-sage" />
                        </div>
                        <div>
                          <h4 className="font-medium">Communication Style</h4>
                          <p className="text-sm text-foreground/70">How you express yourself and relate to others</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-mindful-sage/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="h-3 w-3 text-mindful-sage" />
                        </div>
                        <div>
                          <h4 className="font-medium">Stress Response</h4>
                          <p className="text-sm text-foreground/70">How you typically react to challenging situations</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-mindful-sage/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="h-3 w-3 text-mindful-sage" />
                        </div>
                        <div>
                          <h4 className="font-medium">Decision-Making</h4>
                          <p className="text-sm text-foreground/70">Your approach to choices and problem-solving</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-mindful-sage/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="h-3 w-3 text-mindful-sage" />
                        </div>
                        <div>
                          <h4 className="font-medium">Social Preferences</h4>
                          <p className="text-sm text-foreground/70">How you interact with others and recharge</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-mindful-sage/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="h-3 w-3 text-mindful-sage" />
                        </div>
                        <div>
                          <h4 className="font-medium">Emotional Intelligence</h4>
                          <p className="text-sm text-foreground/70">Your awareness and management of emotions</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-mindful-sage/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="h-3 w-3 text-mindful-sage" />
                        </div>
                        <div>
                          <h4 className="font-medium">Core Motivations</h4>
                          <p className="text-sm text-foreground/70">What drives and inspires you</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mb-10">
              <h2 className="text-2xl font-semibold text-mindful-sage mb-4">Recommended Journey</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
                Based on your profile, we recommend this personalized self-discovery journey:
              </p>
              
              <div className="relative max-w-3xl mx-auto">
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-mindful-sage/20"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="bg-white p-1 rounded-full">
                    <div className="h-8 w-8 rounded-full bg-mindful-sage text-white flex items-center justify-center">
                      1
                    </div>
                  </div>
                  <div className="mt-4 mb-12 mindful-card text-left">
                    <h3 className="text-lg font-medium text-mindful-sage mb-2">Begin with Self-Awareness</h3>
                    <p className="text-foreground/70 mb-4">
                      Start with daily reflection exercises to build awareness of your thoughts, emotions, and reactions.
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-mindful-sage text-mindful-sage"
                      onClick={handleComplete}
                    >
                      Access Resources
                    </Button>
                  </div>
                  
                  <div className="bg-white p-1 rounded-full">
                    <div className="h-8 w-8 rounded-full bg-mindful-blue text-white flex items-center justify-center">
                      2
                    </div>
                  </div>
                  <div className="mt-4 mb-12 mindful-card text-left">
                    <h3 className="text-lg font-medium text-mindful-blue mb-2">Explore Your Patterns</h3>
                    <p className="text-foreground/70 mb-4">
                      Use journaling prompts to identify recurring patterns in your thoughts, behaviors, and relationships.
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-mindful-blue text-mindful-blue"
                      onClick={handleComplete}
                    >
                      Start Journaling
                    </Button>
                  </div>
                  
                  <div className="bg-white p-1 rounded-full">
                    <div className="h-8 w-8 rounded-full bg-mindful-pink text-white flex items-center justify-center">
                      3
                    </div>
                  </div>
                  <div className="mt-4 mindful-card text-left">
                    <h3 className="text-lg font-medium text-mindful-pink mb-2">Develop New Skills</h3>
                    <p className="text-foreground/70 mb-4">
                      Based on your discoveries, learn new coping skills and strategies for personal growth.
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-mindful-pink text-mindful-pink"
                      onClick={handleComplete}
                    >
                      Explore Skills
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="resources">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <Card className="border-mindful-sage/20">
                <CardContent className="pt-6">
                  <div className="h-10 w-10 rounded-full bg-mindful-sage/20 flex items-center justify-center mb-4">
                    <BookOpen className="h-5 w-5 text-mindful-sage" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">Recommended Books</h3>
                  <ul className="space-y-3 mb-4">
                    <li className="text-foreground/80">
                      <p className="font-medium">Feeling Good: The New Mood Therapy</p>
                      <p className="text-sm text-muted-foreground">by David D. Burns</p>
                    </li>
                    <li className="text-foreground/80">
                      <p className="font-medium">The Anxiety and Phobia Workbook</p>
                      <p className="text-sm text-muted-foreground">by Edmund J. Bourne</p>
                    </li>
                    <li className="text-foreground/80">
                      <p className="font-medium">The Mindful Way Through Depression</p>
                      <p className="text-sm text-muted-foreground">by Mark Williams, John Teasdale, and others</p>
                    </li>
                    <li className="text-foreground/80">
                      <p className="font-medium">The Body Keeps the Score</p>
                      <p className="text-sm text-muted-foreground">by Bessel van der Kolk</p>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">View All Recommendations</Button>
                </CardContent>
              </Card>
              
              <Card className="border-mindful-sage/20">
                <CardContent className="pt-6">
                  <div className="h-10 w-10 rounded-full bg-mindful-blue/20 flex items-center justify-center mb-4">
                    <BookOpen className="h-5 w-5 text-mindful-blue" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">Educational Articles</h3>
                  <ul className="space-y-3 mb-4">
                    <li>
                      <Link to="#" className="text-mindful-blue hover:underline font-medium">
                        Understanding the Science of Depression
                      </Link>
                      <p className="text-sm text-muted-foreground">10 min read</p>
                    </li>
                    <li>
                      <Link to="#" className="text-mindful-blue hover:underline font-medium">
                        How Anxiety Affects Your Brain and Body
                      </Link>
                      <p className="text-sm text-muted-foreground">8 min read</p>
                    </li>
                    <li>
                      <Link to="#" className="text-mindful-blue hover:underline font-medium">
                        The Connection Between Sleep and Mental Health
                      </Link>
                      <p className="text-sm text-muted-foreground">12 min read</p>
                    </li>
                    <li>
                      <Link to="#" className="text-mindful-blue hover:underline font-medium">
                        Neuroplasticity: How Your Brain Can Change
                      </Link>
                      <p className="text-sm text-muted-foreground">15 min read</p>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">Browse All Articles</Button>
                </CardContent>
              </Card>
              
              <Card className="border-mindful-sage/20">
                <CardContent className="pt-6">
                  <div className="h-10 w-10 rounded-full bg-mindful-pink/20 flex items-center justify-center mb-4">
                    <BookOpen className="h-5 w-5 text-mindful-pink" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">Support Organizations</h3>
                  <ul className="space-y-3 mb-4">
                    <li className="text-foreground/80">
                      <p className="font-medium">National Alliance on Mental Illness (NAMI)</p>
                      <p className="text-sm text-muted-foreground">Support groups, education, advocacy</p>
                    </li>
                    <li className="text-foreground/80">
                      <p className="font-medium">Anxiety and Depression Association of America</p>
                      <p className="text-sm text-muted-foreground">Resources for anxiety and depression</p>
                    </li>
                    <li className="text-foreground/80">
                      <p className="font-medium">Mental Health America</p>
                      <p className="text-sm text-muted-foreground">Screening tools and resources</p>
                    </li>
                    <li className="text-foreground/80">
                      <p className="font-medium">International OCD Foundation</p>
                      <p className="text-sm text-muted-foreground">Resources for OCD and related disorders</p>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">View All Organizations</Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="p-8 bg-mindful-mint/30 rounded-lg border border-mindful-sage/20 mb-10">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold text-mindful-sage mb-4 text-center">Crisis Resources</h2>
                <p className="text-center text-foreground/80 mb-6">
                  If you or someone you know is experiencing a mental health crisis, these resources provide immediate support:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/80 rounded-lg">
                    <h3 className="font-medium mb-2">National Suicide Prevention Lifeline</h3>
                    <p className="text-foreground/80 mb-2">Call or text 988 (24/7)</p>
                    <Button variant="outline" size="sm" className="w-full">Visit Website</Button>
                  </div>
                  
                  <div className="p-4 bg-white/80 rounded-lg">
                    <h3 className="font-medium mb-2">Crisis Text Line</h3>
                    <p className="text-foreground/80 mb-2">Text HOME to 741741 (24/7)</p>
                    <Button variant="outline" size="sm" className="w-full">Visit Website</Button>
                  </div>
                  
                  <div className="p-4 bg-white/80 rounded-lg">
                    <h3 className="font-medium mb-2">SAMHSA's National Helpline</h3>
                    <p className="text-foreground/80 mb-2">Call 1-800-662-HELP (4357)</p>
                    <Button variant="outline" size="sm" className="w-full">Visit Website</Button>
                  </div>
                  
                  <div className="p-4 bg-white/80 rounded-lg">
                    <h3 className="font-medium mb-2">Disaster Distress Helpline</h3>
                    <p className="text-foreground/80 mb-2">Call or text 1-800-985-5990</p>
                    <Button variant="outline" size="sm" className="w-full">Visit Website</Button>
                  </div>
                </div>
                
                <p className="text-center text-sm text-foreground/60 mt-6">
                  In case of immediate danger, please call emergency services (911 in the US) or go to your nearest emergency room.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-mindful-sage mb-4">Create Your Personal Resource Library</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
                Save articles, videos, and tools that resonate with you to create a personalized mental health resource library.
              </p>
              <Button className="bg-mindful-sage hover:bg-mindful-sage/90 text-white" onClick={handleComplete}>
                Start Your Library
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default KnowYourself;

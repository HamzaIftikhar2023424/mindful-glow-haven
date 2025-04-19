
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, BookOpen, Headphones, Video, FileText, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const TherapyRecommendations = () => {
  const [progress, setProgress] = useState(30);
  
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-mindful-sage mb-4">Your Personalized Therapy Plan</h1>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Based on your assessment, we've created a customized therapy plan to help you on your mental health journey.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress</span>
              <span className="text-mindful-sage font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2 bg-mindful-sage/20" indicatorClassName="bg-mindful-sage" />
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-mindful-sage">Your Mental Health Profile</h2>
            <Link to="/assessment">
              <Button variant="outline" size="sm" className="text-mindful-sage border-mindful-sage">
                Retake Assessment
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-mindful-sage/20">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-mindful-pink/20 flex items-center justify-center mr-3">
                    <Heart className="h-5 w-5 text-mindful-pink" />
                  </div>
                  <div>
                    <h3 className="font-medium">Depression</h3>
                    <div className="flex items-center">
                      <span className="text-sm text-foreground/70 mr-2">Severity:</span>
                      <Badge className="bg-amber-500">Moderate</Badge>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-foreground/70 mb-3">
                  Your assessment indicates symptoms of moderate depression, including low mood and decreased energy.
                </p>
                <div className="h-2 bg-mindful-pink/20 rounded-full">
                  <div className="h-2 bg-mindful-pink rounded-full" style={{ width: "65%" }}></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>Mild</span>
                  <span>Moderate</span>
                  <span>Severe</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-mindful-sage/20">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-mindful-blue/20 flex items-center justify-center mr-3">
                    <Heart className="h-5 w-5 text-mindful-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium">Anxiety</h3>
                    <div className="flex items-center">
                      <span className="text-sm text-foreground/70 mr-2">Severity:</span>
                      <Badge className="bg-amber-500">Moderate</Badge>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-foreground/70 mb-3">
                  You're experiencing moderate anxiety symptoms, including worry and difficulty relaxing.
                </p>
                <div className="h-2 bg-mindful-blue/20 rounded-full">
                  <div className="h-2 bg-mindful-blue rounded-full" style={{ width: "60%" }}></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>Mild</span>
                  <span>Moderate</span>
                  <span>Severe</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-mindful-sage/20">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-mindful-sage/20 flex items-center justify-center mr-3">
                    <Heart className="h-5 w-5 text-mindful-sage" />
                  </div>
                  <div>
                    <h3 className="font-medium">Stress</h3>
                    <div className="flex items-center">
                      <span className="text-sm text-foreground/70 mr-2">Severity:</span>
                      <Badge className="bg-red-500">High</Badge>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-foreground/70 mb-3">
                  You're experiencing high levels of stress that are affecting your daily functioning and sleep.
                </p>
                <div className="h-2 bg-mindful-sage/20 rounded-full">
                  <div className="h-2 bg-mindful-sage rounded-full" style={{ width: "80%" }}></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>Low</span>
                  <span>Moderate</span>
                  <span>High</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mb-12">
          <Tabs defaultValue="daily">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-mindful-sage">Recommended Activities</h2>
              <TabsList>
                <TabsTrigger value="daily">Daily</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="daily" className="space-y-6">
              <Card className="overflow-hidden border-mindful-sage/20 hover:border-mindful-sage/50 transition-colors">
                <div className="md:flex">
                  <div className="bg-mindful-mint/30 md:w-1/3 p-6 flex flex-col justify-center">
                    <div className="mb-4 flex justify-center">
                      <div className="h-16 w-16 rounded-full bg-white/80 flex items-center justify-center">
                        <Headphones className="h-8 w-8 text-mindful-sage" />
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-center mb-2">5-Minute Meditation</h3>
                    <div className="flex items-center justify-center text-sm text-foreground/70">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>5 minutes</span>
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <Badge className="bg-mindful-sage mb-2">Highly Recommended</Badge>
                        <h4 className="font-medium">Guided Breathing Meditation</h4>
                      </div>
                      <Button className="bg-mindful-sage hover:bg-mindful-sage/90 text-white">
                        Start Now
                      </Button>
                    </div>
                    <p className="text-foreground/70 mb-4">
                      This short meditation focuses on deep breathing to reduce anxiety and stress. Perfect for starting your day or taking a quick break.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-mindful-sage">Anxiety Relief</Badge>
                      <Badge variant="outline" className="text-mindful-sage">Stress Reduction</Badge>
                      <Badge variant="outline" className="text-mindful-sage">Mindfulness</Badge>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="overflow-hidden border-mindful-sage/20 hover:border-mindful-sage/50 transition-colors">
                <div className="md:flex">
                  <div className="bg-mindful-pink/20 md:w-1/3 p-6 flex flex-col justify-center">
                    <div className="mb-4 flex justify-center">
                      <div className="h-16 w-16 rounded-full bg-white/80 flex items-center justify-center">
                        <FileText className="h-8 w-8 text-mindful-pink" />
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-center mb-2">Gratitude Journal</h3>
                    <div className="flex items-center justify-center text-sm text-foreground/70">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>10 minutes</span>
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <Badge className="bg-mindful-pink mb-2">Daily Practice</Badge>
                        <h4 className="font-medium">Three Things I'm Grateful For</h4>
                      </div>
                      <Button className="bg-mindful-pink hover:bg-mindful-pink/90 text-white">
                        Start Now
                      </Button>
                    </div>
                    <p className="text-foreground/70 mb-4">
                      Take a few minutes to write down three things you're grateful for today. This simple practice can significantly improve mood and outlook.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-mindful-pink">Depression Management</Badge>
                      <Badge variant="outline" className="text-mindful-pink">Positive Psychology</Badge>
                      <Badge variant="outline" className="text-mindful-pink">Mood Improvement</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="weekly" className="space-y-6">
              <Card className="overflow-hidden border-mindful-sage/20 hover:border-mindful-sage/50 transition-colors">
                <div className="md:flex">
                  <div className="bg-mindful-blue/20 md:w-1/3 p-6 flex flex-col justify-center">
                    <div className="mb-4 flex justify-center">
                      <div className="h-16 w-16 rounded-full bg-white/80 flex items-center justify-center">
                        <Video className="h-8 w-8 text-mindful-blue" />
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-center mb-2">CBT Workshop</h3>
                    <div className="flex items-center justify-center text-sm text-foreground/70">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>30 minutes</span>
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <Badge className="bg-mindful-blue mb-2">Weekly Session</Badge>
                        <h4 className="font-medium">Cognitive Behavioral Techniques</h4>
                      </div>
                      <Button className="bg-mindful-blue hover:bg-mindful-blue/90 text-white">
                        Schedule
                      </Button>
                    </div>
                    <p className="text-foreground/70 mb-4">
                      Learn practical CBT techniques to identify and change negative thought patterns that contribute to anxiety and depression.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-mindful-blue">Cognitive Restructuring</Badge>
                      <Badge variant="outline" className="text-mindful-blue">Thought Challenging</Badge>
                      <Badge variant="outline" className="text-mindful-blue">Behavioral Activation</Badge>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="overflow-hidden border-mindful-sage/20 hover:border-mindful-sage/50 transition-colors">
                <div className="md:flex">
                  <div className="bg-mindful-mauve/20 md:w-1/3 p-6 flex flex-col justify-center">
                    <div className="mb-4 flex justify-center">
                      <div className="h-16 w-16 rounded-full bg-white/80 flex items-center justify-center">
                        <BookOpen className="h-8 w-8 text-mindful-mauve" />
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-center mb-2">Stress Management</h3>
                    <div className="flex items-center justify-center text-sm text-foreground/70">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>45 minutes</span>
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <Badge className="bg-mindful-mauve mb-2">Group Workshop</Badge>
                        <h4 className="font-medium">Practical Stress Reduction Techniques</h4>
                      </div>
                      <Button className="bg-mindful-mauve hover:bg-mindful-mauve/90 text-white">
                        Join Group
                      </Button>
                    </div>
                    <p className="text-foreground/70 mb-4">
                      Join our weekly stress management workshop to learn practical techniques for managing stress in your daily life.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-mindful-mauve">Stress Management</Badge>
                      <Badge variant="outline" className="text-mindful-mauve">Coping Skills</Badge>
                      <Badge variant="outline" className="text-mindful-mauve">Work-Life Balance</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="monthly" className="space-y-6">
              <Card className="overflow-hidden border-mindful-sage/20 hover:border-mindful-sage/50 transition-colors">
                <div className="md:flex">
                  <div className="bg-mindful-sage/20 md:w-1/3 p-6 flex flex-col justify-center">
                    <div className="mb-4 flex justify-center">
                      <div className="h-16 w-16 rounded-full bg-white/80 flex items-center justify-center">
                        <Video className="h-8 w-8 text-mindful-sage" />
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-center mb-2">Wellness Workshop</h3>
                    <div className="flex items-center justify-center text-sm text-foreground/70">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>2 hours</span>
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <Badge className="bg-mindful-sage mb-2">Monthly Event</Badge>
                        <h4 className="font-medium">Holistic Mental Health Practices</h4>
                      </div>
                      <Button className="bg-mindful-sage hover:bg-mindful-sage/90 text-white">
                        Reserve Spot
                      </Button>
                    </div>
                    <p className="text-foreground/70 mb-4">
                      Join our comprehensive monthly workshop covering various aspects of mental wellness, from nutrition to sleep hygiene.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-mindful-sage">Holistic Health</Badge>
                      <Badge variant="outline" className="text-mindful-sage">Lifestyle Changes</Badge>
                      <Badge variant="outline" className="text-mindful-sage">Community Support</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="flex justify-center">
          <Link to="/therapist-connect">
            <Button className="bg-mindful-sage hover:bg-mindful-sage/90 text-white">
              Connect with a Therapist
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TherapyRecommendations;

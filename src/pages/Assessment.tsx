
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, BrainCircuit, ListChecks, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AssessmentForm from "@/components/AssessmentForm";
import MoodTracker from "@/components/MoodTracker";

const Assessment = () => {
  const [selectedTab, setSelectedTab] = useState("initial");
  
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-mindful-sage mb-4">Mental Health Assessment</h1>
          <p className="text-foreground/70">
            Complete the assessment below to receive personalized insights and recommendations for your mental health journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="initial" onValueChange={setSelectedTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="initial">Initial Assessment</TabsTrigger>
                <TabsTrigger value="specialized">Specialized Screening</TabsTrigger>
                <TabsTrigger value="mood">Mood Tracking</TabsTrigger>
              </TabsList>
              
              <TabsContent value="initial">
                <div className="mindful-card mb-6">
                  <div className="flex items-center mb-6">
                    <div className="h-10 w-10 rounded-full bg-mindful-sage/20 flex items-center justify-center mr-4">
                      <ListChecks className="h-5 w-5 text-mindful-sage" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">PHQ-9 Depression Screening</h3>
                      <p className="text-sm text-foreground/70">
                        A standardized questionnaire to assess depression symptoms
                      </p>
                    </div>
                  </div>
                  
                  <AssessmentForm />
                </div>
                
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    className="border-mindful-sage text-mindful-sage"
                  >
                    Save for Later
                  </Button>
                  
                  <Button
                    onClick={() => setSelectedTab("specialized")}
                    className="bg-mindful-sage hover:bg-mindful-sage/90 text-white"
                  >
                    Continue to Specialized Screening
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="specialized">
                <div className="mindful-card mb-6">
                  <div className="flex items-center mb-6">
                    <div className="h-10 w-10 rounded-full bg-mindful-blue/20 flex items-center justify-center mr-4">
                      <BrainCircuit className="h-5 w-5 text-mindful-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Anxiety Assessment (GAD-7)</h3>
                      <p className="text-sm text-foreground/70">
                        Evaluates anxiety symptoms and their impact on daily life
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">
                      This assessment would contain the GAD-7 questionnaire to evaluate anxiety levels.
                    </p>
                    <Button variant="outline">Start GAD-7 Assessment</Button>
                  </div>
                </div>
                
                <div className="mindful-card mb-6">
                  <div className="flex items-center mb-6">
                    <div className="h-10 w-10 rounded-full bg-mindful-pink/20 flex items-center justify-center mr-4">
                      <BrainCircuit className="h-5 w-5 text-mindful-pink" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Specific Disorder Screening</h3>
                      <p className="text-sm text-foreground/70">
                        Optional assessments for PTSD, OCD, bipolar disorder, and more
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <Button variant="outline" className="justify-start">
                      <div className="text-left">
                        <p className="font-medium">PTSD Screening</p>
                        <p className="text-xs text-muted-foreground">PCL-5 Assessment</p>
                      </div>
                    </Button>
                    
                    <Button variant="outline" className="justify-start">
                      <div className="text-left">
                        <p className="font-medium">OCD Screening</p>
                        <p className="text-xs text-muted-foreground">Y-BOCS Assessment</p>
                      </div>
                    </Button>
                    
                    <Button variant="outline" className="justify-start">
                      <div className="text-left">
                        <p className="font-medium">Eating Disorder</p>
                        <p className="text-xs text-muted-foreground">EAT-26 Assessment</p>
                      </div>
                    </Button>
                    
                    <Button variant="outline" className="justify-start">
                      <div className="text-left">
                        <p className="font-medium">Bipolar Screening</p>
                        <p className="text-xs text-muted-foreground">MDQ Assessment</p>
                      </div>
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedTab("initial")}
                    className="border-mindful-sage text-mindful-sage"
                  >
                    Back to Initial Assessment
                  </Button>
                  
                  <Button
                    onClick={() => setSelectedTab("mood")}
                    className="bg-mindful-sage hover:bg-mindful-sage/90 text-white"
                  >
                    Continue to Mood Tracking
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="mood">
                <div className="grid grid-cols-1 gap-6">
                  <MoodTracker />
                  
                  <div className="mindful-card">
                    <div className="flex items-center mb-6">
                      <div className="h-10 w-10 rounded-full bg-mindful-mauve/20 flex items-center justify-center mr-4">
                        <MessageSquare className="h-5 w-5 text-mindful-mauve" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Journal Entry</h3>
                        <p className="text-sm text-foreground/70">
                          Express your thoughts and feelings to gain insights
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <textarea
                        className="w-full h-32 p-3 rounded-md border border-input bg-background text-foreground"
                        placeholder="How are you feeling today? What's on your mind?"
                      ></textarea>
                    </div>
                    
                    <Button className="w-full bg-mindful-mauve hover:bg-mindful-mauve/90 text-white">
                      Save Journal Entry
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-between mt-6">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedTab("specialized")}
                    className="border-mindful-sage text-mindful-sage"
                  >
                    Back to Specialized Screening
                  </Button>
                  
                  <Link to="/therapy-recommendations">
                    <Button className="bg-mindful-sage hover:bg-mindful-sage/90 text-white">
                      View Recommendations
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="lg:col-span-1">
            <div className="mindful-card mb-6">
              <h3 className="text-xl font-medium text-mindful-sage mb-4">Why Assessment Matters</h3>
              <p className="text-foreground/70 mb-4">
                Completing these assessments helps us provide personalized recommendations for your mental health journey.
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-mindful-sage/20 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs text-mindful-sage">✓</span>
                  </div>
                  <span>Identifies areas that need attention</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-mindful-sage/20 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs text-mindful-sage">✓</span>
                  </div>
                  <span>Tracks changes in your mental health over time</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-mindful-sage/20 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs text-mindful-sage">✓</span>
                  </div>
                  <span>Helps therapists provide better care</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-mindful-sage/20 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs text-mindful-sage">✓</span>
                  </div>
                  <span>Creates a baseline for measuring progress</span>
                </li>
              </ul>
            </div>
            
            <div className="mindful-card">
              <h3 className="text-xl font-medium text-mindful-sage mb-4">Need Help?</h3>
              <p className="text-foreground/70 mb-4">
                If you're experiencing a crisis or need immediate assistance, please reach out for help.
              </p>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <div className="text-left">
                    <p className="font-medium">Crisis Helpline</p>
                    <p className="text-xs text-muted-foreground">24/7 Support Available</p>
                  </div>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <div className="text-left">
                    <p className="font-medium">Chat with AI Assistant</p>
                    <p className="text-xs text-muted-foreground">Get immediate responses</p>
                  </div>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <div className="text-left">
                    <p className="font-medium">Contact a Therapist</p>
                    <p className="text-xs text-muted-foreground">Schedule an emergency session</p>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;

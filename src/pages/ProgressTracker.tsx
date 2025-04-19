
import { useState } from "react";
import { Calendar, Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import ProgressChart from "@/components/ProgressChart";
import { useToast } from "@/components/ui/use-toast";

const ProgressTracker = () => {
  const [timeframe, setTimeframe] = useState("week");
  const [category, setCategory] = useState("all");
  const { toast } = useToast();
  
  const handleDownloadReport = () => {
    toast({
      title: "Report Download",
      description: "Your progress report has been prepared and downloaded.",
      duration: 3000,
    });
  };
  
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-mindful-sage mb-2">Your Progress Journey</h1>
            <p className="text-foreground/70">
              Track your mental health progress and see how far you've come.
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="border-mindful-sage text-mindful-sage" onClick={handleDownloadReport}>
              <Download className="mr-2 h-4 w-4" />
              Download Report
            </Button>
            <Button className="bg-mindful-sage hover:bg-mindful-sage/90 text-white">
              <Calendar className="mr-2 h-4 w-4" />
              Add Entry
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="border-mindful-sage/20">
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                  <h2 className="text-xl font-semibold text-mindful-sage">Mood & Wellness Tracking</h2>
                  
                  <div className="flex items-center space-x-3">
                    <Select value={timeframe} onValueChange={setTimeframe}>
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="week">Last Week</SelectItem>
                        <SelectItem value="month">Last Month</SelectItem>
                        <SelectItem value="quarter">Last 3 Months</SelectItem>
                        <SelectItem value="year">Last Year</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Button variant="ghost" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <ProgressChart />
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="border-mindful-sage/20 mb-6">
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-4 text-mindful-sage">Wellness Score</h3>
                
                <div className="flex justify-center mb-6">
                  <div className="h-32 w-32 rounded-full border-8 border-mindful-mint flex items-center justify-center">
                    <span className="text-3xl font-bold text-mindful-sage">72</span>
                  </div>
                </div>
                
                <p className="text-center text-foreground/70 text-sm mb-4">
                  Your wellness score has improved 18% in the last month.
                </p>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-mindful-mint/20 p-3 rounded-lg">
                    <p className="font-medium">Mood</p>
                    <p className="text-foreground/70">7.0/10</p>
                  </div>
                  
                  <div className="bg-mindful-mint/20 p-3 rounded-lg">
                    <p className="font-medium">Sleep</p>
                    <p className="text-foreground/70">7.1/10</p>
                  </div>
                  
                  <div className="bg-mindful-mint/20 p-3 rounded-lg">
                    <p className="font-medium">Anxiety</p>
                    <p className="text-foreground/70">5.0/10</p>
                  </div>
                  
                  <div className="bg-mindful-mint/20 p-3 rounded-lg">
                    <p className="font-medium">Energy</p>
                    <p className="text-foreground/70">6.8/10</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-mindful-sage/20">
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-4 text-mindful-sage">Activity Completion</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Meditation</span>
                      <span className="text-mindful-sage">8/10</span>
                    </div>
                    <div className="h-2 bg-mindful-sage/20 rounded-full">
                      <div className="h-2 bg-mindful-sage rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Journaling</span>
                      <span className="text-mindful-pink">5/10</span>
                    </div>
                    <div className="h-2 bg-mindful-pink/20 rounded-full">
                      <div className="h-2 bg-mindful-pink rounded-full" style={{ width: "50%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>CBT Exercises</span>
                      <span className="text-mindful-blue">7/10</span>
                    </div>
                    <div className="h-2 bg-mindful-blue/20 rounded-full">
                      <div className="h-2 bg-mindful-blue rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Breathing Exercises</span>
                      <span className="text-mindful-mauve">9/10</span>
                    </div>
                    <div className="h-2 bg-mindful-mauve/20 rounded-full">
                      <div className="h-2 bg-mindful-mauve rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-mindful-sage">Recent Journal Entries</h2>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Entries</SelectItem>
                <SelectItem value="mood">Mood Entries</SelectItem>
                <SelectItem value="gratitude">Gratitude</SelectItem>
                <SelectItem value="reflection">Reflections</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-4">
            <Card className="border-mindful-sage/20 hover:border-mindful-sage/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-medium">Morning Reflection</h3>
                  <span className="text-sm text-muted-foreground">May 18, 2025</span>
                </div>
                <p className="text-foreground/70 mb-3">
                  Today I woke up feeling more refreshed than usual. The meditation session last night really helped me fall asleep faster. I'm noticing less anxiety in the mornings now.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 rounded-full text-xs bg-mindful-mint text-mindful-sage">Mood: Good</span>
                    <span className="px-2 py-1 rounded-full text-xs bg-mindful-mint text-mindful-sage">Sleep: 7hrs</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-mindful-sage hover:text-mindful-sage hover:bg-mindful-sage/10">
                    View Full Entry
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-mindful-sage/20 hover:border-mindful-sage/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-medium">Gratitude List</h3>
                  <span className="text-sm text-muted-foreground">May 17, 2025</span>
                </div>
                <p className="text-foreground/70 mb-3">
                  Three things I'm grateful for today:
                  1. The supportive call from my friend
                  2. Finding time to read my favorite book
                  3. The peaceful walk in the park during lunch break
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 rounded-full text-xs bg-mindful-pink/20 text-mindful-pink">Gratitude</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-mindful-sage hover:text-mindful-sage hover:bg-mindful-sage/10">
                    View Full Entry
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-mindful-sage/20 hover:border-mindful-sage/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-medium">Anxiety Reflection</h3>
                  <span className="text-sm text-muted-foreground">May 15, 2025</span>
                </div>
                <p className="text-foreground/70 mb-3">
                  Felt anxious about the upcoming presentation. Used the breathing technique from Tuesday's session - it helped calm my nerves. Reminder: anxiety doesn't define my capabilities.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 rounded-full text-xs bg-mindful-blue/20 text-mindful-blue">Anxiety: Moderate</span>
                    <span className="px-2 py-1 rounded-full text-xs bg-mindful-blue/20 text-mindful-blue">Coping: Good</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-mindful-sage hover:text-mindful-sage hover:bg-mindful-sage/10">
                    View Full Entry
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-foreground/70 mb-4">
            Remember that progress isn't always linear. Every step you take, however small, is moving you forward.
          </p>
          <Button className="bg-mindful-sage hover:bg-mindful-sage/90 text-white">
            Create New Journal Entry
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;

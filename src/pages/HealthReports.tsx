
import { useState } from "react";
import { Download, FileText, Calendar, PieChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import ProgressChart from "@/components/ProgressChart";

const HealthReports = () => {
  const [reportType, setReportType] = useState("monthly");
  const { toast } = useToast();
  
  const handleDownload = (reportName: string) => {
    toast({
      title: "Report Downloaded",
      description: `${reportName} has been downloaded successfully.`,
      duration: 3000,
    });
  };
  
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-mindful-sage mb-4">Psychological Health Reports</h1>
          <p className="text-foreground/70">
            View and download comprehensive reports of your mental health journey, progress, and insights.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h2 className="text-xl font-semibold text-mindful-sage">Your Reports</h2>
          
          <div className="flex items-center space-x-3">
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Report Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
            
            <Button className="bg-mindful-sage hover:bg-mindful-sage/90 text-white">
              <Download className="mr-2 h-4 w-4" />
              Download All
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="border-mindful-sage/20 hover:border-mindful-sage/50 transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-mindful-sage/20 flex items-center justify-center mr-3">
                    <FileText className="h-5 w-5 text-mindful-sage" />
                  </div>
                  <div>
                    <h3 className="font-medium">May 2025 Summary</h3>
                    <p className="text-xs text-muted-foreground">Generated on May 31, 2025</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => handleDownload("May 2025 Summary")}>
                  <Download className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground/70">Mood Average:</span>
                  <span className="font-medium">7.2/10</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground/70">Anxiety Level:</span>
                  <span className="font-medium">4.5/10</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground/70">Sleep Quality:</span>
                  <span className="font-medium">6.8/10</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground/70">Completed Activities:</span>
                  <span className="font-medium">24/30</span>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full text-mindful-sage border-mindful-sage hover:bg-mindful-sage/5 mt-2"
              >
                View Full Report
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-mindful-sage/20 hover:border-mindful-sage/50 transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-mindful-sage/20 flex items-center justify-center mr-3">
                    <FileText className="h-5 w-5 text-mindful-sage" />
                  </div>
                  <div>
                    <h3 className="font-medium">April 2025 Summary</h3>
                    <p className="text-xs text-muted-foreground">Generated on April 30, 2025</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => handleDownload("April 2025 Summary")}>
                  <Download className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground/70">Mood Average:</span>
                  <span className="font-medium">6.8/10</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground/70">Anxiety Level:</span>
                  <span className="font-medium">5.2/10</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground/70">Sleep Quality:</span>
                  <span className="font-medium">6.1/10</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground/70">Completed Activities:</span>
                  <span className="font-medium">19/30</span>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full text-mindful-sage border-mindful-sage hover:bg-mindful-sage/5 mt-2"
              >
                View Full Report
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-mindful-sage/20 hover:border-mindful-sage/50 transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-mindful-sage/20 flex items-center justify-center mr-3">
                    <FileText className="h-5 w-5 text-mindful-sage" />
                  </div>
                  <div>
                    <h3 className="font-medium">March 2025 Summary</h3>
                    <p className="text-xs text-muted-foreground">Generated on March 31, 2025</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => handleDownload("March 2025 Summary")}>
                  <Download className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground/70">Mood Average:</span>
                  <span className="font-medium">6.1/10</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground/70">Anxiety Level:</span>
                  <span className="font-medium">6.4/10</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground/70">Sleep Quality:</span>
                  <span className="font-medium">5.5/10</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground/70">Completed Activities:</span>
                  <span className="font-medium">15/30</span>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full text-mindful-sage border-mindful-sage hover:bg-mindful-sage/5 mt-2"
              >
                View Full Report
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-mindful-sage">Quarterly Progress Report</h2>
            <Button variant="outline" className="border-mindful-sage text-mindful-sage" onClick={() => handleDownload("Q2 2025 Progress Report")}>
              <Download className="mr-2 h-4 w-4" />
              Download Report
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <Card className="border-mindful-sage/20">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4 text-mindful-sage">3-Month Trend Analysis</h3>
                  <ProgressChart />
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="border-mindful-sage/20 mb-6">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4 text-mindful-sage">Key Insights</h3>
                  
                  <div className="space-y-4">
                    <div className="pb-4 border-b border-border">
                      <h4 className="font-medium text-mindful-sage mb-1">Improving Trends</h4>
                      <p className="text-sm text-foreground/70">
                        Your mood has shown a consistent upward trend over the last 3 months, with a 16% improvement.
                      </p>
                    </div>
                    
                    <div className="pb-4 border-b border-border">
                      <h4 className="font-medium text-mindful-sage mb-1">Challenge Areas</h4>
                      <p className="text-sm text-foreground/70">
                        Sleep quality continues to fluctuate. Consider focusing on sleep hygiene activities.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-mindful-sage mb-1">Recommendations</h4>
                      <ul className="text-sm text-foreground/70 space-y-2 list-disc pl-4">
                        <li>Continue daily meditation practice</li>
                        <li>Increase physical activity sessions</li>
                        <li>Consider therapist-recommended sleep routine</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-mindful-sage/20">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4 text-mindful-sage">Activity Effectiveness</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Meditation</span>
                        <span className="text-mindful-sage">High Impact</span>
                      </div>
                      <div className="h-2 bg-mindful-sage/20 rounded-full">
                        <div className="h-2 bg-mindful-sage rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Journaling</span>
                        <span className="text-mindful-blue">Medium Impact</span>
                      </div>
                      <div className="h-2 bg-mindful-blue/20 rounded-full">
                        <div className="h-2 bg-mindful-blue rounded-full" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>CBT Exercises</span>
                        <span className="text-mindful-pink">Medium Impact</span>
                      </div>
                      <div className="h-2 bg-mindful-pink/20 rounded-full">
                        <div className="h-2 bg-mindful-pink rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Physical Activity</span>
                        <span className="text-mindful-sage">High Impact</span>
                      </div>
                      <div className="h-2 bg-mindful-sage/20 rounded-full">
                        <div className="h-2 bg-mindful-sage rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-foreground/70 mb-4">
            These reports are designed to help you and your healthcare providers track your progress over time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button className="bg-mindful-sage hover:bg-mindful-sage/90 text-white">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Report Review
            </Button>
            <Button variant="outline" className="border-mindful-sage text-mindful-sage" onClick={() => handleDownload("Complete History")}>
              <PieChart className="mr-2 h-4 w-4" />
              Download Complete History
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthReports;

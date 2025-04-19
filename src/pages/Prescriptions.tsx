
import { useState } from "react";
import { Download, Clock, AlertCircle, Calendar, Plus, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const prescriptions = [
  {
    id: "1",
    medication: "Sertraline (Zoloft)",
    dosage: "50mg",
    instructions: "Take one tablet by mouth once daily in the morning with food.",
    prescribedBy: "Dr. Sarah Johnson",
    prescribedDate: "May 15, 2025",
    refillsRemaining: 2,
    nextRefillDate: "June 15, 2025",
    status: "active",
  },
  {
    id: "2",
    medication: "Alprazolam (Xanax)",
    dosage: "0.25mg",
    instructions: "Take one tablet by mouth as needed for anxiety, not to exceed 3 tablets per day. Do not drink alcohol.",
    prescribedBy: "Dr. Sarah Johnson",
    prescribedDate: "May 10, 2025",
    refillsRemaining: 1,
    nextRefillDate: "June 10, 2025",
    status: "active",
  },
  {
    id: "3",
    medication: "Escitalopram (Lexapro)",
    dosage: "10mg",
    instructions: "Take one tablet by mouth once daily at bedtime.",
    prescribedBy: "Dr. Michael Chen",
    prescribedDate: "April 5, 2025",
    refillsRemaining: 0,
    nextRefillDate: null,
    status: "expired",
  }
];

const Prescriptions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();
  
  const handleDownload = (prescription: any) => {
    toast({
      title: "Prescription Downloaded",
      description: `${prescription.medication} prescription has been downloaded.`,
      duration: 3000,
    });
  };
  
  const handleRefill = (prescription: any) => {
    toast({
      title: "Refill Requested",
      description: `Refill request for ${prescription.medication} has been sent to your doctor.`,
      duration: 3000,
    });
  };
  
  const filteredPrescriptions = prescriptions.filter(
    (prescription) =>
      prescription.medication.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prescription.prescribedBy.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-mindful-sage mb-4">Your Prescriptions</h1>
          <p className="text-foreground/70">
            Manage and track your prescribed medications. Request refills and download prescription details.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="relative flex-1">
            <Input
              placeholder="Search medications or doctors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="border-mindful-sage text-mindful-sage">
              <Calendar className="mr-2 h-4 w-4" />
              Medication Schedule
            </Button>
            <Button className="bg-mindful-sage hover:bg-mindful-sage/90 text-white">
              <Plus className="mr-2 h-4 w-4" />
              Add New Medication
            </Button>
          </div>
        </div>
        
        {filteredPrescriptions.length > 0 ? (
          <div className="space-y-6">
            {filteredPrescriptions.map((prescription) => (
              <Card 
                key={prescription.id} 
                className={`border-mindful-sage/20 overflow-hidden ${
                  prescription.status === "expired" ? "opacity-70" : ""
                }`}
              >
                <div className="border-l-4 border-mindful-sage h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <h3 className="font-medium text-lg mr-3">{prescription.medication}</h3>
                          <Badge className={
                            prescription.status === "active" 
                              ? "bg-green-500" 
                              : "bg-red-500"
                          }>
                            {prescription.status === "active" ? "Active" : "Expired"}
                          </Badge>
                        </div>
                        
                        <p className="text-lg font-medium text-foreground mb-4">{prescription.dosage}</p>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex items-start">
                            <div className="h-5 w-5 rounded-full bg-mindful-sage/20 flex items-center justify-center mr-2 mt-0.5">
                              <span className="text-xs text-mindful-sage">✓</span>
                            </div>
                            <p className="text-foreground/80">{prescription.instructions}</p>
                          </div>
                          
                          <div className="flex items-center">
                            <div className="h-5 w-5 rounded-full bg-mindful-sage/20 flex items-center justify-center mr-2">
                              <span className="text-xs text-mindful-sage">✓</span>
                            </div>
                            <p className="text-foreground/80">
                              Prescribed by {prescription.prescribedBy} on {prescription.prescribedDate}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm">
                          {prescription.refillsRemaining > 0 ? (
                            <div className="flex items-center">
                              <RefreshCw className="h-4 w-4 mr-1 text-green-500" />
                              <span>{prescription.refillsRemaining} refills remaining</span>
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <AlertCircle className="h-4 w-4 mr-1 text-red-500" />
                              <span>No refills remaining</span>
                            </div>
                          )}
                          
                          {prescription.nextRefillDate && (
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1 text-mindful-blue" />
                              <span>Next refill: {prescription.nextRefillDate}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-row md:flex-col space-x-3 md:space-x-0 md:space-y-3">
                        <Button 
                          variant="outline" 
                          className="text-mindful-sage border-mindful-sage"
                          onClick={() => handleDownload(prescription)}
                          size="sm"
                        >
                          <Download className="h-4 w-4 md:mr-2" />
                          <span className="hidden md:inline">Download</span>
                        </Button>
                        
                        {prescription.status === "active" && prescription.refillsRemaining > 0 && (
                          <Button 
                            className="bg-mindful-sage hover:bg-mindful-sage/90 text-white"
                            onClick={() => handleRefill(prescription)}
                            size="sm"
                          >
                            <RefreshCw className="h-4 w-4 md:mr-2" />
                            <span className="hidden md:inline">Request Refill</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="border-mindful-sage/20 p-8 text-center">
            <h3 className="text-xl font-medium text-mindful-sage mb-3">No Prescriptions Found</h3>
            <p className="text-foreground/70 mb-6">
              {searchTerm
                ? `No prescriptions match "${searchTerm}". Try a different search term.`
                : "You don't have any prescriptions yet."}
            </p>
            {searchTerm ? (
              <Button 
                variant="outline" 
                className="border-mindful-sage text-mindful-sage"
                onClick={() => setSearchTerm("")}
              >
                Clear Search
              </Button>
            ) : (
              <Button className="bg-mindful-sage hover:bg-mindful-sage/90 text-white">
                <Plus className="mr-2 h-4 w-4" />
                Add Medication
              </Button>
            )}
          </Card>
        )}
        
        <div className="mt-12 p-6 bg-mindful-pink/10 rounded-lg border border-mindful-pink/20">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-mindful-pink mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium text-lg mb-2">Important Medication Information</h3>
              <p className="text-foreground/80 mb-4">
                Always take medications as prescribed by your healthcare provider. Do not adjust dosages or stop taking medication without consulting your doctor.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-foreground/70">
                  • If you experience any side effects, contact your healthcare provider immediately.
                </p>
                <p className="text-foreground/70">
                  • Keep all medications out of reach of children and in their original containers.
                </p>
                <p className="text-foreground/70">
                  • Dispose of unused medications properly according to local guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescriptions;

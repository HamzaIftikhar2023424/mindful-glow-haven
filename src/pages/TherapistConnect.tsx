
import { useState } from "react";
import { Search, Filter, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import TherapistCard from "@/components/TherapistCard";

const therapists = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: ["Anxiety", "Depression", "CBT"],
    rating: 4.9,
    location: "New York, NY (Remote Available)",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=150",
    availableSlots: 5
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: ["Trauma", "PTSD", "Mindfulness"],
    rating: 4.8,
    location: "San Francisco, CA (Remote Available)",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=150",
    availableSlots: 3
  },
  {
    id: "3",
    name: "Samantha Rodriguez, LMFT",
    specialty: ["Family Therapy", "Relationships", "Anxiety"],
    rating: 4.7,
    location: "Chicago, IL (Remote Available)",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=150",
    availableSlots: 7
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    specialty: ["Depression", "Bipolar Disorder", "CBT"],
    rating: 4.9,
    location: "Boston, MA (Remote Available)",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=150",
    availableSlots: 4
  }
];

const TherapistConnect = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState("any");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const toggleSpecialty = (specialty: string) => {
    if (selectedSpecialties.includes(specialty)) {
      setSelectedSpecialties(selectedSpecialties.filter(item => item !== specialty));
    } else {
      setSelectedSpecialties([...selectedSpecialties, specialty]);
    }
  };
  
  const filteredTherapists = therapists.filter(therapist => {
    // Filter by search term
    const matchesSearch = 
      searchTerm === "" || 
      therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      therapist.specialty.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Filter by specialty
    const matchesSpecialty = 
      selectedSpecialties.length === 0 || 
      therapist.specialty.some(s => selectedSpecialties.includes(s));
    
    // Filter by availability
    let matchesAvailability = true;
    if (selectedAvailability === "high") {
      matchesAvailability = therapist.availableSlots >= 5;
    } else if (selectedAvailability === "medium") {
      matchesAvailability = therapist.availableSlots >= 3;
    } else if (selectedAvailability === "low") {
      matchesAvailability = therapist.availableSlots >= 1;
    }
    
    return matchesSearch && matchesSpecialty && matchesAvailability;
  });
  
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-mindful-sage mb-4">Connect with Therapists</h1>
          <p className="text-foreground/70 max-w-2xl">
            Find and connect with licensed therapists specialized in various mental health areas. Browse profiles, check availability, and book appointments.
          </p>
        </div>
        
        <div className="mb-8">
          <Tabs defaultValue="find">
            <TabsList className="mb-6">
              <TabsTrigger value="find">Find a Therapist</TabsTrigger>
              <TabsTrigger value="appointments">My Appointments</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
            </TabsList>
            
            <TabsContent value="find">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-3">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        placeholder="Search by name, specialty, or location..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Button 
                      variant="outline" 
                      className="border-mindful-sage text-mindful-sage"
                      onClick={() => setIsFilterOpen(!isFilterOpen)}
                    >
                      <Filter className="mr-2 h-4 w-4" />
                      Filters
                    </Button>
                    <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Availability</SelectItem>
                        <SelectItem value="high">High (5+ slots)</SelectItem>
                        <SelectItem value="medium">Medium (3+ slots)</SelectItem>
                        <SelectItem value="low">Low (1+ slots)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {isFilterOpen && (
                  <div className="md:col-span-3 mindful-card mb-4 animate-fade-in">
                    <h3 className="text-lg font-medium text-mindful-sage mb-4">Filter Therapists</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Specialty</h4>
                        <div className="space-y-2">
                          {["Anxiety", "Depression", "Trauma", "PTSD", "CBT", "Relationships", "Mindfulness", "Family Therapy", "Bipolar Disorder"].map((specialty) => (
                            <div key={specialty} className="flex items-center space-x-2">
                              <Checkbox 
                                id={`specialty-${specialty}`} 
                                checked={selectedSpecialties.includes(specialty)}
                                onCheckedChange={() => toggleSpecialty(specialty)}
                              />
                              <Label htmlFor={`specialty-${specialty}`} className="cursor-pointer">
                                {specialty}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-3">Session Type</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="remote" />
                            <Label htmlFor="remote" className="cursor-pointer">Remote</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="in-person" />
                            <Label htmlFor="in-person" className="cursor-pointer">In-Person</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="both" checked />
                            <Label htmlFor="both" className="cursor-pointer">Both</Label>
                          </div>
                        </div>
                        
                        <h4 className="font-medium mb-3 mt-6">Price Range</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="price-low" />
                            <Label htmlFor="price-low" className="cursor-pointer">$50-$100</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="price-mid" checked />
                            <Label htmlFor="price-mid" className="cursor-pointer">$100-$150</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="price-high" />
                            <Label htmlFor="price-high" className="cursor-pointer">$150+</Label>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-3">Language</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="english" checked />
                            <Label htmlFor="english" className="cursor-pointer">English</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="spanish" />
                            <Label htmlFor="spanish" className="cursor-pointer">Spanish</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="french" />
                            <Label htmlFor="french" className="cursor-pointer">French</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="mandarin" />
                            <Label htmlFor="mandarin" className="cursor-pointer">Mandarin</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="other-lang" />
                            <Label htmlFor="other-lang" className="cursor-pointer">Other</Label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end mt-6 space-x-3">
                      <Button variant="outline" onClick={() => {
                        setSelectedSpecialties([]);
                        setSelectedAvailability("any");
                      }}>
                        Reset
                      </Button>
                      <Button 
                        className="bg-mindful-sage hover:bg-mindful-sage/90 text-white"
                        onClick={() => setIsFilterOpen(false)}
                      >
                        Apply Filters
                      </Button>
                    </div>
                  </div>
                )}
                
                <div className="md:col-span-3">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium text-mindful-sage">
                      {filteredTherapists.length} therapists available
                    </h3>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
                      <span className="text-sm text-muted-foreground">Showing therapists in all locations</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {filteredTherapists.length > 0 ? (
                      filteredTherapists.map((therapist) => (
                        <TherapistCard key={therapist.id} {...therapist} />
                      ))
                    ) : (
                      <Card className="p-8 text-center border-mindful-sage/20">
                        <h3 className="text-lg font-medium text-mindful-sage mb-2">No therapists found</h3>
                        <p className="text-foreground/70 mb-4">
                          Try adjusting your filters or search term to find more therapists.
                        </p>
                        <Button 
                          variant="outline" 
                          className="border-mindful-sage text-mindful-sage"
                          onClick={() => {
                            setSearchTerm("");
                            setSelectedSpecialties([]);
                            setSelectedAvailability("any");
                          }}
                        >
                          Reset All Filters
                        </Button>
                      </Card>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="appointments">
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-mindful-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-mindful-sage" />
                </div>
                <h3 className="text-xl font-medium text-mindful-sage mb-2">No Upcoming Appointments</h3>
                <p className="text-foreground/70 mb-6 max-w-md mx-auto">
                  You don't have any scheduled appointments yet. Connect with a therapist to book your first session.
                </p>
                <Button className="bg-mindful-sage hover:bg-mindful-sage/90 text-white">
                  Find a Therapist
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="messages">
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-mindful-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-mindful-sage" />
                </div>
                <h3 className="text-xl font-medium text-mindful-sage mb-2">No Messages Yet</h3>
                <p className="text-foreground/70 mb-6 max-w-md mx-auto">
                  Once you connect with a therapist, your conversations will appear here.
                </p>
                <Button className="bg-mindful-sage hover:bg-mindful-sage/90 text-white">
                  Browse Therapists
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TherapistConnect;

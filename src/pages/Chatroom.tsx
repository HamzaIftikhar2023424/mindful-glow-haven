
import { useState, useRef, useEffect } from "react";
import { Send, Users, Info, Search, Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatMessage from "@/components/ChatMessage";

// Sample data for chat rooms
const chatRooms = [
  { id: "1", name: "Depression Support", description: "Share experiences and coping strategies", members: 156, category: "condition" },
  { id: "2", name: "Anxiety Community", description: "Discussions about anxiety management", members: 189, category: "condition" },
  { id: "3", name: "Mindfulness Practice", description: "Daily mindfulness and meditation support", members: 124, category: "practice" },
  { id: "4", name: "Medication Support", description: "Discuss medication experiences and side-effects", members: 78, category: "treatment" },
  { id: "5", name: "Recovery Stories", description: "Share your journey and inspire others", members: 92, category: "support" },
];

// Sample messages for a chat room
const sampleMessages = [
  {
    id: "1",
    message: "Hi everyone! Just joined this group and wanted to introduce myself. I've been dealing with anxiety for about 3 years now.",
    username: "Alex",
    timestamp: "10:30 AM",
    isCurrentUser: false,
  },
  {
    id: "2",
    message: "Welcome @Alex! We're glad you're here. This is a safe space to share and learn from each other.",
    username: "Taylor",
    timestamp: "10:32 AM",
    isCurrentUser: false,
  },
  {
    id: "3",
    message: "I've found that deep breathing exercises really help me when I'm feeling anxious. Has anyone else tried this?",
    username: "You",
    timestamp: "10:35 AM",
    isCurrentUser: true,
  },
  {
    id: "4",
    message: "Yes! Breathing exercises are great. I also find that going for a short walk helps me clear my mind.",
    username: "Sam",
    timestamp: "10:38 AM",
    isCurrentUser: false,
  },
  {
    id: "5",
    message: "I've been trying meditation lately too. It was hard at first but it's getting easier with practice.",
    username: "You",
    timestamp: "10:40 AM",
    isCurrentUser: true,
  },
  {
    id: "6",
    message: "Meditation has been a game-changer for me too. @Alex have you tried any meditation apps?",
    username: "Jordan",
    timestamp: "10:42 AM",
    isCurrentUser: false,
  },
  {
    id: "7",
    message: "Not yet, but I'd love some recommendations! My therapist has suggested I try it.",
    username: "Alex",
    timestamp: "10:45 AM",
    isCurrentUser: false,
  },
];

const Chatroom = () => {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState(sampleMessages);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(chatRooms[0]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom of messages when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (messageInput.trim() === "") return;
    
    const newMessage = {
      id: String(Date.now()),
      message: messageInput,
      username: "You",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isCurrentUser: true,
    };
    
    setMessages([...messages, newMessage]);
    setMessageInput("");
  };
  
  const filteredRooms = chatRooms.filter(
    (room) =>
      room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-mindful-sage mb-4">Community Support</h1>
          <p className="text-foreground/70">
            Connect with others who share similar experiences. Share your journey, provide support, and learn from the community.
          </p>
        </div>
        
        <Tabs defaultValue="chat">
          <TabsList className="mb-6">
            <TabsTrigger value="chat">Chat Rooms</TabsTrigger>
            <TabsTrigger value="community">Community Guidelines</TabsTrigger>
            <TabsTrigger value="events">Support Events</TabsTrigger>
          </TabsList>
          
          <TabsContent value="chat">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background rounded-lg border border-border overflow-hidden">
                <div className="p-4 border-b border-border">
                  <h2 className="font-medium text-lg mb-4">Join a Support Group</h2>
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search groups..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="flex space-x-2 mb-2 overflow-x-auto pb-2">
                    <Button variant="outline" size="sm" className="whitespace-nowrap">All Groups</Button>
                    <Button variant="outline" size="sm" className="whitespace-nowrap">Most Active</Button>
                    <Button variant="outline" size="sm" className="whitespace-nowrap">Recently Added</Button>
                  </div>
                </div>
                
                <ScrollArea className="h-[500px]">
                  <div className="p-2">
                    {filteredRooms.length > 0 ? (
                      filteredRooms.map((room) => (
                        <div
                          key={room.id}
                          onClick={() => setSelectedRoom(room)}
                          className={`p-3 rounded-md mb-2 cursor-pointer transition-colors ${
                            selectedRoom.id === room.id
                              ? "bg-mindful-sage/10 border-l-4 border-mindful-sage"
                              : "hover:bg-muted"
                          }`}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-medium">{room.name}</h3>
                            <Badge variant="outline" className="text-xs">
                              <Users className="h-3 w-3 mr-1" />
                              {room.members}
                            </Badge>
                          </div>
                          <p className="text-sm text-foreground/70 mb-1">{room.description}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <span>Active now</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center">
                        <p className="text-muted-foreground mb-2">No groups match your search</p>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSearchTerm("")}
                        >
                          Clear Search
                        </Button>
                      </div>
                    )}
                  </div>
                </ScrollArea>
                
                <div className="p-4 border-t border-border">
                  <Button className="w-full bg-mindful-sage hover:bg-mindful-sage/90 text-white">
                    <Plus className="mr-2 h-4 w-4" />
                    Create New Group
                  </Button>
                </div>
              </div>
              
              <div className="md:col-span-2 bg-background rounded-lg border border-border flex flex-col">
                <div className="p-4 border-b border-border">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-mindful-sage/20 rounded-full flex items-center justify-center mr-3">
                        {selectedRoom.category === "condition" && <Users className="h-5 w-5 text-mindful-sage" />}
                        {selectedRoom.category === "practice" && <Users className="h-5 w-5 text-mindful-blue" />}
                        {selectedRoom.category === "treatment" && <Users className="h-5 w-5 text-mindful-pink" />}
                        {selectedRoom.category === "support" && <Users className="h-5 w-5 text-mindful-mauve" />}
                      </div>
                      <div>
                        <h2 className="font-medium">{selectedRoom.name}</h2>
                        <p className="text-xs text-muted-foreground">{selectedRoom.members} members</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Info className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    <div className="text-center">
                      <Badge variant="outline" className="mb-2">May 19, 2025</Badge>
                      <Card className="p-4 mx-auto max-w-md bg-mindful-sage/5 border-mindful-sage/20">
                        <p className="text-sm text-foreground/80">
                          Welcome to the {selectedRoom.name} group! This is a safe space to share experiences and support each other. Please be respectful and kind.
                        </p>
                      </Card>
                    </div>
                    
                    {messages.map((message) => (
                      <ChatMessage
                        key={message.id}
                        message={message.message}
                        username={message.username}
                        timestamp={message.timestamp}
                        isCurrentUser={message.isCurrentUser}
                      />
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
                
                <div className="p-4 border-t border-border">
                  <form onSubmit={handleSendMessage} className="flex space-x-2">
                    <Input
                      placeholder="Type your message..."
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      className="flex-1"
                    />
                    <Button 
                      type="submit" 
                      className="bg-mindful-sage hover:bg-mindful-sage/90 text-white"
                      disabled={messageInput.trim() === ""}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground mt-2">
                    Remember: This is a peer support group, not professional therapy. For crisis support, please contact your healthcare provider.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="community">
            <Card className="p-6 border-mindful-sage/20">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold text-mindful-sage mb-6 text-center">Community Guidelines</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-mindful-sage mb-2">1. Be Kind and Respectful</h3>
                    <p className="text-foreground/70">
                      Treat others with empathy and compassion. Everyone here is on their own mental health journey. Disrespectful comments, harassment, or bullying will not be tolerated.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-mindful-sage mb-2">2. Protect Privacy</h3>
                    <p className="text-foreground/70">
                      Respect the privacy of others. Do not share personal information about other members outside the platform. What's shared here, stays here.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-mindful-sage mb-2">3. This Is Peer Support, Not Professional Advice</h3>
                    <p className="text-foreground/70">
                      While sharing experiences and coping strategies is encouraged, remember that this community is not a substitute for professional mental health care. If you're in crisis, please contact a healthcare provider or crisis hotline.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-mindful-sage mb-2">4. Use Content Warnings</h3>
                    <p className="text-foreground/70">
                      When discussing potentially triggering topics, please use content warnings to give others the choice to engage with the content.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-mindful-sage mb-2">5. Report Concerns</h3>
                    <p className="text-foreground/70">
                      If you see content that violates these guidelines or concerns you, please report it to the moderators. We're here to maintain a safe space for everyone.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button className="bg-mindful-sage hover:bg-mindful-sage/90 text-white">
                    Return to Chat Rooms
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="events">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="overflow-hidden border-mindful-sage/20">
                <div className="h-40 bg-gradient-to-r from-mindful-sage to-mindful-blue flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold">Anxiety Management</h3>
                    <p>Virtual Workshop</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium text-lg">Coping with Anxiety</h3>
                      <p className="text-sm text-muted-foreground">May 25, 2025 • 2:00 PM EST</p>
                    </div>
                    <Badge>Upcoming</Badge>
                  </div>
                  <p className="text-foreground/70 mb-4">
                    Learn practical techniques for managing anxiety in daily life, led by Dr. Sarah Johnson.
                  </p>
                  <div className="flex items-center space-x-2 mb-6">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=150" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">Dr. Sarah Johnson</span>
                  </div>
                  <Button className="w-full bg-mindful-sage hover:bg-mindful-sage/90 text-white">
                    Register Now
                  </Button>
                </div>
              </Card>
              
              <Card className="overflow-hidden border-mindful-sage/20">
                <div className="h-40 bg-gradient-to-r from-mindful-pink to-mindful-mauve flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold">Depression Support</h3>
                    <p>Group Session</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium text-lg">Living with Depression</h3>
                      <p className="text-sm text-muted-foreground">May 27, 2025 • 7:00 PM EST</p>
                    </div>
                    <Badge>Upcoming</Badge>
                  </div>
                  <p className="text-foreground/70 mb-4">
                    A supportive group discussion for those experiencing depression, facilitated by Michael Chen, LMFT.
                  </p>
                  <div className="flex items-center space-x-2 mb-6">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=150" />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">Michael Chen, LMFT</span>
                  </div>
                  <Button className="w-full bg-mindful-sage hover:bg-mindful-sage/90 text-white">
                    Register Now
                  </Button>
                </div>
              </Card>
              
              <Card className="overflow-hidden border-mindful-sage/20">
                <div className="h-40 bg-gradient-to-r from-mindful-mint to-mindful-sage flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold">Mindfulness Practice</h3>
                    <p>Interactive Session</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium text-lg">Daily Mindfulness</h3>
                      <p className="text-sm text-muted-foreground">May 30, 2025 • 10:00 AM EST</p>
                    </div>
                    <Badge>Upcoming</Badge>
                  </div>
                  <p className="text-foreground/70 mb-4">
                    Learn how to incorporate mindfulness into your daily routine with simple, effective practices.
                  </p>
                  <div className="flex items-center space-x-2 mb-6">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=150" />
                      <AvatarFallback>SR</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">Samantha Rodriguez</span>
                  </div>
                  <Button className="w-full bg-mindful-sage hover:bg-mindful-sage/90 text-white">
                    Register Now
                  </Button>
                </div>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-foreground/70 mb-4">
                All events are free for members. Registration is required to receive the attendance link.
              </p>
              <Button variant="outline" className="border-mindful-sage text-mindful-sage">
                View All Upcoming Events
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Chatroom;

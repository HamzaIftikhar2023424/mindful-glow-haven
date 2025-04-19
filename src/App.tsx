
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DidYouKnow from "./components/DidYouKnow";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Assessment from "./pages/Assessment";
import TherapyRecommendations from "./pages/TherapyRecommendations";
import ProgressTracker from "./pages/ProgressTracker";
import TherapistConnect from "./pages/TherapistConnect";
import HealthReports from "./pages/HealthReports";
import Feedback from "./pages/Feedback";
import Prescriptions from "./pages/Prescriptions";
import Chatroom from "./pages/Chatroom";
import KnowYourself from "./pages/KnowYourself";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/therapy-recommendations" element={<TherapyRecommendations />} />
              <Route path="/progress-tracker" element={<ProgressTracker />} />
              <Route path="/therapist-connect" element={<TherapistConnect />} />
              <Route path="/health-reports" element={<HealthReports />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/prescriptions" element={<Prescriptions />} />
              <Route path="/chatroom" element={<Chatroom />} />
              <Route path="/know-yourself" element={<KnowYourself />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <DidYouKnow />
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

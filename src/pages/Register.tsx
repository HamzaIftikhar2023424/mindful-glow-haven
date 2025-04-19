
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { EyeIcon, EyeOffIcon, UserPlusIcon } from "lucide-react";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !email || !password || !confirmPassword) {
      toast({
        title: "Invalid input",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure both passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    if (!agreedToTerms) {
      toast({
        title: "Terms and Conditions",
        description: "Please agree to the terms and conditions to continue.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration process with a delay
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration Successful",
        description: "Welcome to MindfulGlowHaven! Your account has been created.",
      });
      navigate("/assessment");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="hidden md:flex flex-col justify-center p-8 bg-gradient-to-br from-mindful-pink via-mindful-mauve to-mindful-sage rounded-2xl text-white">
          <h1 className="text-3xl font-bold mb-4">Begin Your Journey</h1>
          <p className="mb-6">
            Join our community and take the first step towards improved mental well-being.
          </p>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="h-6 w-6 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center">
                ✓
              </div>
              <p className="text-sm text-white/90">Personalized mental health assessments</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-6 w-6 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center">
                ✓
              </div>
              <p className="text-sm text-white/90">Connect with licensed therapists</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-6 w-6 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center">
                ✓
              </div>
              <p className="text-sm text-white/90">Track your progress with detailed insights</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-6 w-6 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center">
                ✓
              </div>
              <p className="text-sm text-white/90">Access a supportive community</p>
            </div>
          </div>
        </div>
        
        <div className="mindful-card flex flex-col justify-center">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-mindful-sage">Create Your Account</h2>
            <p className="text-foreground/70">
              Sign up to begin your mental health journey
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                placeholder="Jane Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/50 hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Password must be at least 8 characters
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="flex items-start space-x-2 mt-4">
              <Checkbox 
                id="terms" 
                checked={agreedToTerms}
                onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="terms" className="text-sm cursor-pointer">
                  I agree to the{" "}
                  <Link to="#" className="text-mindful-sage hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="#" className="text-mindful-sage hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-mindful-sage hover:bg-mindful-sage/90 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating account...
                </span>
              ) : (
                <span className="flex items-center">
                  <UserPlusIcon className="mr-2 h-4 w-4" />
                  Create Account
                </span>
              )}
            </Button>
            
            <div className="text-center text-sm">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-mindful-sage hover:underline font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

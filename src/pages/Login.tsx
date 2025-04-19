
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { EyeIcon, EyeOffIcon, LogInIcon } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Invalid input",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate login process with a delay
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful",
        description: "Welcome back to MindfulGlowHaven!",
      });
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="hidden md:flex flex-col justify-center p-8 bg-gradient-to-br from-mindful-mint via-mindful-blue to-mindful-sage rounded-2xl text-white">
          <h1 className="text-3xl font-bold mb-4">Welcome Back</h1>
          <p className="mb-6">
            Continue your mental health journey with personalized resources and support.
          </p>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="h-6 w-6 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center">
                ✓
              </div>
              <p className="text-sm text-white/90">Track your progress with detailed analytics</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-6 w-6 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center">
                ✓
              </div>
              <p className="text-sm text-white/90">Access your personalized therapy recommendations</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-6 w-6 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center">
                ✓
              </div>
              <p className="text-sm text-white/90">Connect with therapists and the community</p>
            </div>
          </div>
        </div>
        
        <div className="mindful-card flex flex-col justify-center">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-mindful-sage">Log In</h2>
            <p className="text-foreground/70">
              Please sign in to your account
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
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
              <div className="flex justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="#" className="text-xs text-mindful-sage hover:underline">
                  Forgot password?
                </Link>
              </div>
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
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remember" 
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <Label htmlFor="remember" className="text-sm cursor-pointer">
                Remember me for 30 days
              </Label>
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
                  Signing in...
                </span>
              ) : (
                <span className="flex items-center">
                  <LogInIcon className="mr-2 h-4 w-4" />
                  Sign in
                </span>
              )}
            </Button>
            
            <div className="text-center text-sm">
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="text-mindful-sage hover:underline font-medium">
                  Sign up
                </Link>
              </p>
            </div>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-card px-2 text-xs text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" type="button" className="w-full">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                    <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                    <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                    <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                    <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                  </g>
                </svg>
                Google
              </Button>
              <Button variant="outline" type="button" className="w-full">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128 0C57.3223 0 0 57.3223 0 128C0 184.615 36.6762 232.478 87.5169 249.531C93.845 250.785 96.1691 246.893 96.1691 243.526C96.1691 240.446 96.0629 232.478 96.0629 221.833C60.508 229.292 52.9435 206.157 52.9435 206.157C47.1355 191.191 38.7168 187.298 38.7168 187.298C27.0335 179.414 39.5604 179.414 39.5604 179.414C52.5125 180.243 59.2585 192.551 59.2585 192.551C70.6293 212.203 89.0408 206.686 96.5999 203.394C97.6497 195.096 100.942 189.401 104.448 186.215C76.1123 183.029 46.2917 171.965 46.2917 122.517C46.2917 108.387 51.2559 96.9041 59.5832 87.8415C58.3271 84.6555 53.9932 71.3686 61.0328 53.576C61.0328 53.576 71.7852 50.1836 95.957 66.8166C106.195 63.9494 117.053 62.5156 127.894 62.4889C138.734 62.4889 149.593 63.9228 159.831 66.8166C184.003 50.1836 194.755 53.576 194.755 53.576C201.795 71.3686 197.461 84.6555 196.204 87.8415C204.638 96.9041 209.496 108.387 209.496 122.517C209.496 171.965 179.676 182.923 151.34 186.109C155.773 190.107 159.725 197.887 159.725 209.981C159.725 227.082 159.619 239.158 159.619 243.526C159.619 246.893 161.943 250.785 168.271 249.531C219.112 232.478 255.788 184.615 255.788 128C255.894 57.3223 198.572 0 128 0Z" fill="currentColor"/>
                </svg>
                GitHub
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

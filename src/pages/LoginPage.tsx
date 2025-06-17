import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import SocialLoginButton from '@/components/SocialLoginButton';
import { Github, Chrome, LogIn, AlertCircle } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  console.log('LoginPage loaded');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    console.log('Login attempt with:', { email, password, rememberMe });
    // Simulate API call
    if (email === 'user@example.com' && password === 'password123') {
      console.log('Login successful');
      // For Sonner/Toast: You would typically call toast("Login successful!") here
      navigate('/dashboard');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Attempting login with ${provider}`);
    // Placeholder for social login logic
    // For demo, let's navigate to dashboard on any social login click
    // You would typically use a library like Firebase, Auth0, etc.
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <Avatar className="mx-auto h-16 w-16 mb-4">
            <AvatarImage src="https://via.placeholder.com/100" alt="App Logo" />
            <AvatarFallback>LOGO</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold">Welcome Back!</CardTitle>
          <CardDescription>Sign in to continue to your account.</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Login Failed</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember-me"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <Label htmlFor="remember-me" className="text-sm font-medium">Remember me</Label>
              </div>
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="w-full">
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
          </form>
          <Separator className="my-6" />
          <div className="space-y-3">
            <SocialLoginButton
              providerName="Google"
              icon={<Chrome />}
              onClick={() => handleSocialLogin('Google')}
              variant="outline"
            />
            <SocialLoginButton
              providerName="GitHub"
              icon={<Github />}
              onClick={() => handleSocialLogin('GitHub')}
              variant="outline"
            />
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
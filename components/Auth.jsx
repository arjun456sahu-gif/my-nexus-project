"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Added for navigation
import { motion } from "framer-motion";
import { Button } from "./ui/Button"; // Corrected standard Shadcn path
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, ArrowRight } from "lucide-react";

const GithubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export default function Auth() {
  const router = useRouter(); // Router initialization

  const handleLogin = (e) => {
    e.preventDefault();
    // Yahan aap loading logic ya authentication check add kar sakte hain
    router.push("/"); // Button click par user ko base route par bhej dega
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#020617] overflow-hidden p-4">
      {/* Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10"
      >
        <Card className="border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl text-white">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-3xl font-bold tracking-tighter">Welcome Back</CardTitle>
            <CardDescription className="text-gray-400">
              Enter your credentials to access your NEXUS dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" onClick={handleLogin} className="border-white/10 bg-white/5 hover:bg-white/10 text-white h-11">
                <GithubIcon className="mr-2 h-5 w-5" /> Github
              </Button>
              <Button variant="outline" onClick={handleLogin} className="border-white/10 bg-white/5 hover:bg-white/10 text-white h-11">
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-2.21 5.39-7.84 5.39-4.84 0-8.79-4.01-8.79-8.94s3.95-8.94 8.79-8.94c2.75 0 4.59 1.17 5.65 2.18l2.59-2.5c-1.66-1.55-3.82-2.5-8.24-2.5-6.62 0-12 5.38-12 12s5.38 12 12 12c6.91 0 11.5-4.86 11.5-11.69 0-.78-.08-1.38-.18-1.97h-11.32z"/></svg> Google
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase text-gray-500 italic">
                <span className="bg-[#020617] px-2">Or continue with</span>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input id="email" type="email" placeholder="arjun@example.com" className="pl-10 border-white/10 bg-white/5 focus:ring-blue-500" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input id="password" type="password" className="pl-10 border-white/10 bg-white/5 focus:ring-blue-500" />
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col gap-4 mt-2">
            {/* Added onClick for redirection */}
            <Button onClick={handleLogin} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold h-11 group transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
              Login to Nexus
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-center text-sm text-gray-500">
              Don&apos;t have an account? <span className="text-blue-400 hover:underline cursor-pointer" onClick={() => router.push("/signup")}>Sign up</span>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
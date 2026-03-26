"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button"; // Shadcn Button
import { 
  ArrowUpRight, 
  ShieldCheck, 
  Lightning,      // Ye 'Zap' ka alternative hai
  ChartLineUp 
} from "@phosphor-icons/react";

export default function Landing() {
  return (
    <section className="relative min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      
      {/* High-Performance Glows (Using CSS transform for speed) */}
      <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-center max-w-4xl"
      >
        {/* Badge - Linear Style */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">
         <Lightning size={16} weight="fill" className="text-blue-400" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-100">
            The Future of Finance
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 bg-linear-to-b from-white via-white to-white/40 bg-clip-text text-transparent leading-[1.1]">
          Templates with shadcn  <br /> <span className="text-blue-500">The Global Credit</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Empowering the next generation of financial applications with a secure 
          liquidity engine optimized for the modern web.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button size="lg" className="rounded-xl px-10 h-14 bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all">
            Launch App
            <ArrowUpRight size={20} weight="bold" className="ml-2" />
          </Button>
          
          <Button variant="outline" size="lg" className="rounded-xl px-10 h-14 border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all">
            Read Whitepaper
          </Button>
        </div>
      </motion.div>

      {/* Floating Glass Card */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-24 z-10 w-full max-w-5xl min-h-100 rounded-[32px] border border-white/10 bg-linear-to-br from-white/10 to-transparent backdrop-blur-2xl p-10 shadow-2xl overflow-hidden"
      >
         <div className="flex flex-col md:flex-row justify-between items-start gap-12 h-full">
            <div className="space-y-6">
               <div className="size-14 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                  <ShieldCheck size={32} weight="duotone" className="text-blue-400" />
               </div>
               <div>
                  <h3 className="text-3xl font-bold mb-2">Secure Yield Pool</h3>
                  <p className="text-gray-400 text-lg leading-snug max-w-70">
                    Automated liquidity management with 0.01% slippage protocols.
                  </p>
               </div>
            </div>
            
            {/* Visual Graph with Animation */}
            <div className="w-full flex-1 flex items-end justify-center h-50 md:h-full pb-4">
               <div className="w-full h-40 flex items-end gap-3 px-4 border-b border-white/5">
                  {[40, 75, 50, 95, 60, 85, 70, 90].map((h, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ height: 0 }} 
                      animate={{ height: `${h}%` }} 
                      transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
                      className="flex-1 bg-linear-to-t from-blue-500/40 via-blue-500/10 to-transparent rounded-t-md relative group"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                    </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </motion.div>
    </section>
  );
}
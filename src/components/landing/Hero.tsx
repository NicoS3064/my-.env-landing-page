import React from 'react';
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Sparkles, Lock, Zap } from 'lucide-react';

const Hero = () => {
  const showMailerLitePopup = () => {
    console.log('Button clicked - attempting to show MailerLite popup');
    
    (window as any).ml?.('show', 'XVg7nu', true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Prominent SOC 2 Badge */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-bold shadow-xl shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105">
                <Shield className="h-5 w-5" />
                SOC 2 Ready Architecture
                <Sparkles className="h-4 w-4 animate-pulse" />
              </div>
              <Badge variant="outline" className="text-primary border-primary/50 bg-primary/5 hover:bg-primary/10 transition-colors">
                🔐 Early Access — Secure Your Keys First
              </Badge>
            </div>
            
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-foreground bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                Stop Hardcoding API Keys. 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse"> Secure Them</span> Instead.
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
                <span className="text-primary font-bold">my .env</span> automatically rotates your API keys and gives your apps one secure endpoint to fetch credentials. 
                <span className="text-red-600 font-semibold">Eliminate scattered keys</span> in your codebase forever.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                className="group ml-onclick-form bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 text-white px-10 py-4 text-xl font-bold rounded-xl border-0 transition-all duration-300 inline-flex items-center justify-center shadow-2xl shadow-slate-900/25 hover:shadow-slate-900/40 hover:scale-105 hover:-translate-y-1 cursor-pointer"
                onClick={() => (window as any).ml?.('show', 'XVg7nu', true)}
              >
                <Lock className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                Get Your Free Security Checklist
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-base text-muted-foreground bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Instant checklist delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-500"></div>
                <span className="font-medium">No spam, ever</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
                <span className="font-medium">Unsubscribe anytime</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-fade-in delay-300">
            <div className="bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl shadow-slate-900/10 hover:shadow-slate-900/20 transition-all duration-500 hover:scale-105">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 shadow-inner">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
                    <span className="text-slate-400 ml-3 font-mono">~/secure-terminal</span>
                  </div>
                  <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg p-6 font-mono text-sm space-y-3 border border-slate-600/50">
                    <div className="text-slate-400 flex items-center gap-2">
                      <span className="text-red-400">⚠️</span>
                      // Before: Exposed keys everywhere
                    </div>
                    <div className="text-red-400 line-through opacity-75 hover:opacity-100 transition-opacity">
                      const stripe = new Stripe('sk_live_abc123...')
                    </div>
                    <div className="text-red-400 line-through opacity-75 hover:opacity-100 transition-opacity">
                      const aws = new AWS({`{apiKey: "AKIA123..."}`})
                    </div>
                    <div className="text-slate-400 mt-6 flex items-center gap-2">
                      <span className="text-green-400">✅</span>
                      // After: One secure endpoint
                    </div>
                    <div className="text-green-400 font-semibold hover:text-green-300 transition-colors cursor-pointer">
                      const keys = await myenv.get('stripe')
                    </div>
                    <div className="text-green-400 font-semibold hover:text-green-300 transition-colors cursor-pointer">
                      const stripe = new Stripe(keys.secret)
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <Zap className="h-4 w-4 text-yellow-400" />
                      <span className="text-yellow-400 text-xs">Auto-rotated • Secure • Monitored</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating indicators */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-blue-500/25 animate-bounce">
              🚀 In Development
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-green-500/25 animate-pulse">
              🔐 Early Access
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

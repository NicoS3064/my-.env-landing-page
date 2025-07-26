
import React from 'react';
import { Shield, Lock, Zap, Star, CheckCircle, Sparkles } from 'lucide-react';

const AuthorityProof = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-indigo-950/20 dark:to-purple-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-5xl mx-auto mb-20 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Star className="h-8 w-8 text-yellow-500 animate-spin" />
            <h2 className="text-4xl lg:text-6xl font-black text-foreground">
              One Vault. All Your Keys. 
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> Completely Secure</span>
            </h2>
            <Sparkles className="h-8 w-8 text-purple-500 animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Built with enterprise-grade security that developers actually want to use
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          <div className="group text-center animate-fade-in">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-8 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-bounce">
                SOC 2
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">Enterprise Security</h3>
            <p className="text-muted-foreground leading-relaxed">SOC 2 compliant architecture designed for security-first teams who don't want to compromise</p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm text-green-600 font-medium">Ready for enterprise</span>
            </div>
          </div>
          
          <div className="group text-center animate-fade-in delay-150">
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-yellow-500/25 group-hover:shadow-yellow-500/40 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-8 bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                AUTO
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">Automatic Rotation</h3>
            <p className="text-muted-foreground leading-relaxed">Keys rotate automatically without breaking your applications. Set it once, secure forever</p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm text-green-600 font-medium">Zero downtime</span>
            </div>
          </div>
          
          <div className="group text-center animate-fade-in delay-300">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                <Lock className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-8 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-ping">
                ONE
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">One Endpoint</h3>
            <p className="text-muted-foreground leading-relaxed">Replace scattered keys with one secure API endpoint. Simple integration, maximum security</p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm text-green-600 font-medium">Developer friendly</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-white/80 to-slate-50/80 dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl animate-fade-in delay-500">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-blue-600 mb-2">256-bit</div>
              <div className="text-sm text-muted-foreground font-medium">Encryption</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-green-600 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground font-medium">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-purple-600 mb-2">50+</div>
              <div className="text-sm text-muted-foreground font-medium">Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-orange-600 mb-2">0</div>
              <div className="text-sm text-muted-foreground font-medium">Downtime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorityProof;

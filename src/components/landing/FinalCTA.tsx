
import React from 'react';
import { ArrowRight, Shield, Clock, Users, Rocket, Zap, Lock } from 'lucide-react';

const FinalCTA = () => {
  const showMailerLitePopup = () => {
    const success = (window as any).ml?.('show', 'XVg7nu', true);
    
    if (!success) {
      console.log('MailerLite popup call was queued or failed');
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-12 animate-fade-in">
            {/* Main Headline */}
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Rocket className="h-10 w-10 text-yellow-400 animate-bounce" />
                <h2 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Don't Wait for the Next 
                  <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent animate-pulse"> Security Breach</span>
                </h2>
                <Zap className="h-10 w-10 text-yellow-400 animate-ping" />
              </div>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto font-medium">
                Get your free API Security Checklist now and be among the first to secure your APIs 
                with automated key management. <span className="text-yellow-300 font-bold">Time is running out</span> — 
                every day without proper key management is another day at risk.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-8 py-12">
              <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Free Security Checklist</h3>
                <p className="text-blue-200 leading-relaxed">Actionable steps to secure your APIs today, written by security experts who've seen it all</p>
                <div className="mt-4 text-green-300 font-semibold text-sm">
                  ✅ Instant delivery to your inbox
                </div>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:-translate-y-2 md:scale-110">
                <div className="bg-gradient-to-br from-blue-400 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">VIP Early Access</h3>
                <p className="text-blue-200 leading-relaxed">Be first to test my .env and get exclusive launch pricing before anyone else</p>
                <div className="mt-4 text-blue-300 font-semibold text-sm">
                  🚀 Limited spots available
                </div>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Expert Insights</h3>
                <p className="text-blue-200 leading-relaxed">Security best practices and insider knowledge from our team of API security specialists</p>
                <div className="mt-4 text-purple-300 font-semibold text-sm">
                  🔐 Proven strategies inside
                </div>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-white/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <a 
                  className="group ml-onclick-form bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 text-black px-12 py-6 text-2xl font-black rounded-2xl transition-all duration-300 inline-flex items-center justify-center shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 hover:scale-105 transform cursor-pointer"
                  onClick={() => (window as any).ml('show', 'XVg7nu', true)}
                >
                  <Lock className="mr-4 h-8 w-8 group-hover:rotate-12 transition-transform duration-300" />
                  Get Your Free Security Checklist Now
                  <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-medium">Instant delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                    <span className="font-medium">No spam, ever</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                    <span className="font-medium">Unsubscribe anytime</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Guarantee */}
            <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-8 max-w-3xl mx-auto animate-fade-in delay-700">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <Shield className="h-6 w-6 text-emerald-400" />
                🛡️ Privacy Guaranteed
                <Lock className="h-6 w-6 text-emerald-400" />
              </h3>
              <p className="text-emerald-100 leading-relaxed">
                Your email stays private and secure. We'll only send you valuable security content 
                and my .env updates. <strong>No spam, no sharing with third parties, no nonsense.</strong> 
                Built by developers who hate spam as much as you do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

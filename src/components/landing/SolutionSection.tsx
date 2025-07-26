
import React from 'react';
import { Check, ArrowRight, Shield, Zap, Lock, Bell } from 'lucide-react';

const SolutionSection = () => {
  const benefits = [
    "Never hardcode API keys again (planned)",
    "Automatic key rotation on schedule (roadmap)", 
    "One secure endpoint for all apps (coming)",
    "Complete usage visibility & analytics (planned)",
    "SOC 2 compliance ready architecture",
    "Zero-downtime key updates (planned)"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Solution Description */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                One Vault. All Your Keys. 
                <span className="text-primary"> Completely Secure.</span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                my .env will replace scattered API keys with a single, secure endpoint. 
                Your applications will fetch credentials automatically while your actual keys 
                stay encrypted and rotate on schedule. Join our waitlist for early access.
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                data-tf-popup="ULdXPJsh"
                data-tf-size="100"
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center justify-center waitlist-btn"
              >
                <Bell className="mr-2 h-4 w-4" />
                Join the Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Column - Visual Demo */}
          <div className="relative">
            {/* Main demo card */}
            <div className="bg-background rounded-xl shadow-2xl border border-border p-6">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">my .env Dashboard (Preview)</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">In Development</span>
                  </div>
                </div>

                {/* API Keys List */}
                <div className="space-y-3">
                  {[
                    { name: "Stripe API", status: "Planned", rotated: "Auto-rotate", icon: Shield },
                    { name: "AWS S3", status: "Planned", rotated: "Scheduled", icon: Zap },
                    { name: "SendGrid", status: "Planned", rotated: "On-demand", icon: Lock }
                  ].map((key, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <key.icon className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium text-foreground">{key.name}</div>
                          <div className="text-sm text-muted-foreground">{key.rotated}</div>
                        </div>
                      </div>
                      <div className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                        {key.status}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Code Example */}
                <div className="bg-secondary/20 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-2">Planned Integration:</div>
                  <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">
                    <code>
                      <span className="text-primary">const</span> keys = <span className="text-blue-500">await</span> myenv.get(
                      {'\n  '}
                      <span className="text-green-500">'stripe'</span>
                      {'\n'}
                      )
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Floating indicators */}
            <div className="absolute -top-3 -right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              In Development
            </div>
            <div className="absolute -bottom-3 -left-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              Early Access
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

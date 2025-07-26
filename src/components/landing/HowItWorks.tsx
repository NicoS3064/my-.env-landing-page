import React from 'react';
import { ArrowRight, Bell } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Join the Waitlist",
      description: "Sign up for early access and be notified when KeyGuard Vault launches. Get exclusive updates on development progress and special launch pricing.",
      visual: "🔔"
    },
    {
      number: "02", 
      title: "Connect Your Services (Coming)",
      description: "When launched, import your existing API keys from AWS, Stripe, SendGrid, and 50+ other services with one-click integrations.",
      visual: "🔗"
    },
    {
      number: "03",
      title: "Set Rotation Schedules (Planned)",
      description: "Configure automatic rotation policies. Weekly, monthly, or custom schedules. KeyGuard will handle the rotation seamlessly.",
      visual: "⚙️"
    },
    {
      number: "04",
      title: "Update Your Code Once (Future)",
      description: "Replace hardcoded keys with simple KeyGuard API calls. One line of code gives you access to all your credentials.",
      visual: "💻"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            From Chaos to Control in 
            <span className="text-primary"> 4 Simple Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            KeyGuard Vault will set up in under 10 minutes when launched. No complex infrastructure changes, 
            no lengthy migrations. Just secure, automated API key management. Join our waitlist to be the first to know when we launch.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                {/* Step Number & Visual */}
                <div className="flex-shrink-0 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-4xl mb-4">
                    {step.visual}
                  </div>
                  <div className="text-sm font-bold text-primary tracking-wider">
                    STEP {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-10 top-20 w-px h-12 bg-border"></div>
              )}

              {/* Mobile Arrow */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center mb-8">
                  <ArrowRight className="h-6 w-6 text-primary rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Ready to be among the first?
            </h3>
            <p className="text-muted-foreground mb-4">
              Join our waitlist for early access and exclusive launch updates
            </p>
            <button 
              data-tf-popup="ULdXPJsh"
              data-tf-size="100"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center waitlist-btn"
            >
              <Bell className="mr-2 h-4 w-4" />
              Join the Waitlist →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

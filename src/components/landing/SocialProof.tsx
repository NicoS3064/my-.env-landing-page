import React from 'react';
import { Star, Quote, Bell } from 'lucide-react';

const SocialProof = () => {
  const stats = [
    { number: "50+", label: "Planned Integrations" },
    { number: "256-bit", label: "Encryption Standard" },
    { number: "24/7", label: "Monitoring (Planned)" },
    { number: "SOC 2", label: "Ready Architecture" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Built for Security-Conscious 
            <span className="text-primary"> Development Teams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            KeyGuard Vault is being designed with enterprise-grade security and developer experience in mind, 
            following industry best practices for API key management and rotation.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Quote className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Automated Rotation (Coming)</h3>
            <p className="text-muted-foreground">Set it and forget it. Keys will rotate automatically based on your security policies.</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Quote className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Zero Downtime (Planned)</h3>
            <p className="text-muted-foreground">Seamless key rotation without interrupting your applications or services.</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Quote className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Audit Ready (Coming)</h3>
            <p className="text-muted-foreground">Complete audit trails and compliance reports for security reviews.</p>
          </div>
        </div>

        {/* Waitlist CTA */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 border border-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🚀 Ready to Secure Your API Keys?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join our waitlist to be among the first to access KeyGuard Vault when we launch. 
              Get early access, exclusive updates, and special launch pricing.
            </p>
            <button 
              data-tf-popup="ULdXPJsh"
              data-tf-size="100"
              className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center waitlist-btn"
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

export default SocialProof;

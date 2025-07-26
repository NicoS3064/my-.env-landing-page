import React from 'react';
import { Target, Rocket, Users, Bell } from 'lucide-react';

const Vision = () => {
  const visionPoints = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To eliminate API key vulnerabilities that lead to data breaches and security incidents. Every hardcoded key is a potential disaster waiting to happen."
    },
    {
      icon: Rocket,
      title: "The Future",
      description: "A world where developers never worry about API key management. Where rotation, distribution, and monitoring happen automatically in the background."
    },
    {
      icon: Users,
      title: "Built With You",
      description: "KeyGuard Vault is being built based on real feedback from security engineers and developers. Join our waitlist to influence the roadmap."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            The Future of 
            <span className="text-primary"> API Security</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just building another security tool. We're reimagining how teams 
            manage, rotate, and secure their most critical credentials.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {visionPoints.map((point, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <point.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 max-w-2xl mx-auto border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Help Us Build the Future
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join our waitlist to get early access, share your feedback, and help shape 
              KeyGuard Vault into the perfect solution for your team's needs.
            </p>
            <button 
              data-tf-popup="ULdXPJsh"
              data-tf-size="100"
              className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center waitlist-btn"
            >
              <Bell className="mr-2 h-4 w-4" />
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

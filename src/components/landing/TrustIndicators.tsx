
import React from 'react';
import { Shield, Users, Zap, Lock } from 'lucide-react';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      label: "SOC 2 Ready",
      description: "Built with enterprise security standards"
    },
    {
      icon: Users,
      label: "Developer Focused", 
      description: "Designed by developers, for developers"
    },
    {
      icon: Zap,
      label: "Zero Downtime",
      description: "Seamless integration planned"
    },
    {
      icon: Lock,
      label: "End-to-End Encryption",
      description: "Your keys stay protected"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Built for Security-First Teams
          </h2>
          <p className="text-muted-foreground">
            KeyGuard Vault is being designed with enterprise-grade security and developer experience in mind
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <indicator.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{indicator.label}</h3>
              <p className="text-sm text-muted-foreground">{indicator.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Get your free security checklist and be notified when we launch
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;

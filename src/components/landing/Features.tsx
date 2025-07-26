
import React from 'react';
import { 
  Shield, 
  RefreshCw, 
  BarChart3, 
  Users, 
  Zap, 
  Lock,
  AlertTriangle,
  Clock,
  CheckCircle
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Military-Grade Encryption",
      description: "AES-256 encryption at rest and TLS 1.3 in transit. Your keys will be safer than in your own infrastructure.",
      highlight: "SOC 2 Ready"
    },
    {
      icon: RefreshCw,
      title: "Automated Key Rotation",
      description: "Set it and forget it. Keys will rotate automatically on your schedule without breaking your applications.",
      highlight: "Planned Feature"
    },
    {
      icon: BarChart3,
      title: "Complete Usage Analytics",
      description: "See exactly which keys are used where, when, and by whom. Track rotation history and security metrics.",
      highlight: "Coming Soon"
    },
    {
      icon: Users,
      title: "Team Access Controls",
      description: "Role-based permissions will ensure only authorized team members can access specific keys and environments.",
      highlight: "RBAC Planned"
    },
    {
      icon: Zap,
      title: "One-Line Integration",
      description: "Replace all your hardcoded keys with a single API call. Will work with any language or framework.",
      highlight: "Developer Friendly"
    },
    {
      icon: Lock,
      title: "Secure Secret Sharing",
      description: "Share sensitive credentials with team members without exposing them in chat or email.",
      highlight: "Roadmap Feature"
    },
    {
      icon: AlertTriangle,
      title: "Breach Detection",
      description: "AI-powered monitoring will detect unusual key usage patterns and potential security incidents.",
      highlight: "Advanced Feature"
    },
    {
      icon: Clock,
      title: "Expiration Management",
      description: "Never lose access due to expired keys. Automatic notifications and renewal workflows planned.",
      highlight: "Coming Soon"
    },
    {
      icon: CheckCircle,
      title: "Compliance Ready",
      description: "Built-in audit trails and compliance reporting for SOC 2, ISO 27001, and other standards.",
      highlight: "Architecture Ready"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Planned Features for 
            <span className="text-primary"> Complete API Security</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These are the features we're building for KeyGuard Vault. Join our waitlist to 
            get early access and help shape the development priorities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                    {feature.highlight}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 max-w-4xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🚀 Development Roadmap
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Phase 1 (MVP)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Basic key storage</li>
                  <li>• Simple API access</li>
                  <li>• Core integrations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Phase 2 (Growth)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Automated rotation</li>
                  <li>• Advanced analytics</li>
                  <li>• Team management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Phase 3 (Enterprise)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Advanced security</li>
                  <li>• Custom integrations</li>
                  <li>• Enterprise features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

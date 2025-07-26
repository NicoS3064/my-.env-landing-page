
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for individual developers and small projects",
      badge: null,
      features: [
        "Up to 10 API keys",
        "Manual key rotation",
        "Basic dashboard",
        "Email support",
        "Community access"
      ],
      cta: "Start Free",
      ctaVariant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      price: "$15",
      period: "per user/month",
      description: "For teams that need automated security and advanced features",
      badge: "Most Popular",
      features: [
        "Unlimited API keys",
        "Automated key rotation",
        "Team collaboration",
        "Usage analytics",
        "Role-based access control",
        "Slack/Teams integration",
        "Priority support",
        "SOC 2 compliance"
      ],
      cta: "Start Free Trial",
      ctaVariant: "default" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "For large organizations with custom security requirements",
      badge: "Custom Solution",
      features: [
        "Everything in Pro",
        "Custom integrations",
        "Advanced audit logs",
        "Single sign-on (SSO)",
        "Dedicated support",
        "Custom SLA",
        "On-premise deployment",
        "Security review & audit"
      ],
      cta: "Contact Sales",
      ctaVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
            <span className="text-primary"> That Scales With You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Start free, upgrade when you need more. No hidden fees, no surprise charges. 
            Just secure API key management that grows with your team.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Check className="h-4 w-4 text-green-500" />
            <span>14-day free trial on all paid plans</span>
            <span className="mx-2">•</span>
            <Check className="h-4 w-4 text-green-500" />
            <span>Cancel anytime</span>
            <span className="mx-2">•</span>
            <Check className="h-4 w-4 text-green-500" />
            <span>No setup fees</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-background border rounded-lg p-8 relative hover:shadow-lg transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary scale-105 shadow-lg' 
                  : 'border-border hover:-translate-y-1'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    {plan.popular ? (
                      <><Star className="h-3 w-3 mr-1" /> {plan.badge}</>
                    ) : (
                      plan.badge
                    )}
                  </Badge>
                </div>
              )}

              <div className="space-y-6">
                {/* Header */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground ml-1">
                        /{plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  className={`w-full py-3 font-semibold ${
                    plan.ctaVariant === 'default' 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                      : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                  variant={plan.ctaVariant}
                  size="lg"
                >
                  {plan.cta}
                  {plan.ctaVariant === 'default' && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Teaser */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Questions about pricing or features?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View FAQ
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Schedule Demo
            </Button>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 max-w-2xl mx-auto border border-green-200">
            <div className="text-2xl mb-2">💰</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              30-Day Money-Back Guarantee
            </h3>
            <p className="text-muted-foreground">
              Not satisfied? Get a full refund within 30 days, no questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

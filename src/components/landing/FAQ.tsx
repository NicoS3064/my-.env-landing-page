
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How secure is KeyGuard Vault compared to managing keys ourselves?",
      answer: "KeyGuard Vault uses military-grade AES-256 encryption, SOC 2 compliance, and is audited by third-party security firms. We specialize in key security, so we can dedicate resources to security measures that would be expensive for individual companies to implement. Your keys are actually more secure with us than storing them in your own infrastructure."
    },
    {
      question: "What happens if KeyGuard goes down? Will our applications break?",
      answer: "We maintain 99.99% uptime with multiple failover systems. In the extremely rare case of an outage, your applications can fall back to cached keys that are automatically stored locally with a short TTL. We also offer enterprise customers the option to run KeyGuard on-premise for maximum control."
    },
    {
      question: "How difficult is it to integrate KeyGuard into existing applications?",
      answer: "Integration typically takes less than 30 minutes. You replace your hardcoded API keys with a single line of code that calls our API. We provide SDKs for all major languages (Node.js, Python, Go, Java, etc.) and detailed documentation. Most teams are fully migrated within a day."
    },
    {
      question: "Can I try KeyGuard without affecting my production systems?",
      answer: "Absolutely! Start with our free plan to test with non-critical keys, or use our staging environment feature to test the full integration without touching production. We also offer a sandbox mode that simulates all features without managing real credentials."
    },
    {
      question: "How does automatic key rotation work without breaking our apps?",
      answer: "Our rotation system is designed to be zero-downtime. When a key rotates, we maintain both the old and new keys for a brief overlap period, ensuring your applications never lose access. You can also set custom rotation schedules and receive notifications before rotations occur."
    },
    {
      question: "What about compliance requirements like SOC 2 or ISO 27001?",
      answer: "KeyGuard Vault is SOC 2 Type II certified and helps you meet compliance requirements. We provide detailed audit logs, access controls, and compliance reports that auditors love. Many customers tell us we've simplified their compliance processes significantly."
    },
    {
      question: "Is there a limit to how many API keys I can store?",
      answer: "The free plan supports up to 10 API keys, which is perfect for individual developers. Pro plans have unlimited keys, and Enterprise customers get custom limits based on their needs. We've supported customers with thousands of keys across hundreds of services."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked 
            <span className="text-primary"> Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions 
            we get from security-conscious development teams.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-sm transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronDown className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-4">
              Our security experts are here to help you make the right decision for your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:nicoschwantes3006@gmail.com"
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

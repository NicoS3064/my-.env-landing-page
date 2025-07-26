import React from 'react';
import { AlertTriangle, FileX, Clock, Shield, Flame, Skull } from 'lucide-react';

const ProblemSection = () => {
  const showMailerLitePopup = () => {
    console.log('Button clicked - attempting to show MailerLite popup');
    
    (window as any).ml_safe?.('show', 'XVg7nu', true);
  };

  const problems = [
    {
      icon: AlertTriangle,
      title: "API Keys Scattered Everywhere",
      description: "Your credentials are hardcoded in repos, env files, and config files across dozens of services.",
      impact: "Massive security risk",
      color: "red"
    },
    {
      icon: Clock,
      title: "Manual Key Rotation Nightmare", 
      description: "Rotating keys manually takes hours and often breaks production when you miss updating one location.",
      impact: "Downtime & frustration",
      color: "orange"
    },
    {
      icon: FileX,
      title: "Zero Visibility Into Usage",
      description: "You have no idea which keys are being used where, when they expire, or if they've been compromised.",
      impact: "Compliance failures",
      color: "yellow"
    },
    {
      icon: Shield,
      title: "Stale Keys = Security Holes",
      description: "Old, forgotten API keys remain active for months, creating backdoors that attackers can exploit.",
      impact: "Data breaches",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: "bg-red-100 text-red-600 border-red-200 dark:bg-red-900/20 dark:text-red-400",
      orange: "bg-orange-100 text-orange-600 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400",
      yellow: "bg-yellow-100 text-yellow-600 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400",
      purple: "bg-purple-100 text-purple-600 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400"
    };
    return colors[color as keyof typeof colors] || colors.red;
  };

  return (
    <section className="py-24 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-slate-900 dark:via-red-950/20 dark:to-orange-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Flame className="h-8 w-8 text-red-500 animate-pulse" />
            <h2 className="text-4xl lg:text-6xl font-black text-foreground">
              Your API Keys Are a 
              <span className="bg-gradient-to-r from-red-600 via-orange-600 to-red-700 bg-clip-text text-transparent animate-pulse"> Security Disaster</span> Waiting to Happen
            </h2>
            <Skull className="h-8 w-8 text-red-500 animate-bounce" />
          </div>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Every developer knows the pain. You need API keys for everything, but managing them securely is a nightmare. 
            <span className="text-red-600 font-bold"> Here's what's probably happening in your codebase right now:</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-xl ${getColorClasses(problem.color)} border-2 group-hover:scale-110 transition-transform duration-300`}>
                  <problem.icon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {problem.description}
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 text-red-700 dark:text-red-400 rounded-full text-sm font-bold border border-red-200 dark:border-red-800">
                    💥 {problem.impact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 dark:from-red-950/50 dark:via-orange-950/50 dark:to-yellow-950/50 border-2 border-red-300 dark:border-red-800 rounded-2xl p-10 text-center shadow-2xl shadow-red-500/10 animate-fade-in delay-500">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white text-2xl font-bold">$</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-red-900 dark:text-red-300">
                The Real Cost: $4.45M Average Data Breach
              </h3>
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
            </div>
            <p className="text-red-800 dark:text-red-400 text-lg lg:text-xl leading-relaxed">
              According to IBM's 2024 Cost of Data Breach Report, the average cost of a data breach is 
              <span className="font-black text-2xl text-red-600"> $4.45 million</span>. 
              <strong className="text-red-900 dark:text-red-300"> API security incidents are increasingly common</strong> and exposed credentials are often the entry point.
            </p>
            <button 
              className="mt-6 inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-full font-bold text-lg shadow-lg hover:bg-red-700 transition-colors cursor-pointer"
              onClick={showMailerLitePopup}
            >
              🚨 Don't become another statistic
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

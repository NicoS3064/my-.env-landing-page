
import React from 'react';
import { Code2, Lock } from 'lucide-react';

const Header = () => {
  const showMailerLitePopup = () => {
    const success = (window as any).ml?.('show', 'XVg7nu', true);
    
    if (!success) {
      console.log('MailerLite popup call was queued or failed');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo/Brand */}
          <div className="flex items-center gap-3">
            <div className="relative">
              {/* Main logo container with gradient background */}
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300 border border-white/20">
                <Code2 className="h-7 w-7 text-white stroke-[2.5]" />
              </div>
              {/* Security badge positioned clearly */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                <Lock className="h-3.5 w-3.5 text-white stroke-[2.5]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground tracking-tight">
                my <span className="text-blue-600">.env</span>
              </span>
            </div>
          </div>
          
          {/* CTA */}
          <a 
            className="ml-onclick-form bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 cursor-pointer"
            onClick={() => (window as any).ml?.('show', 'XVg7nu', true)}
          >
            Get Free Checklist
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

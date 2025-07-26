
import React from 'react';
import { Button } from "@/components/ui/button";
import { Bell } from 'lucide-react';

const WaitlistForm = () => {
  return (
    <section className="text-center px-6 py-12 bg-background rounded-lg shadow-lg border border-border">
      <h2 className="text-3xl font-bold mb-4 text-foreground">Join the KeyGuard Vault Waitlist</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Be the first to secure your API keys with automated rotation, zero downtime, and exclusive early access perks.
      </p>
      <button 
        data-tf-popup="ULdXPJsh"
        data-tf-size="100"
        className="font-semibold px-6 py-3 inline-flex items-center gap-2 waitlist-btn bg-slate-900 hover:bg-slate-800 text-white rounded-md transition-colors"
      >
        <Bell className="h-4 w-4" />
        Join Waitlist
      </button>
    </section>
  );
};

export default WaitlistForm;

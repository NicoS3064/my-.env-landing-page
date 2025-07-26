
import React from 'react';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import ProblemSection from '../components/landing/ProblemSection';
import AuthorityProof from '../components/landing/AuthorityProof';
import FinalCTA from '../components/landing/FinalCTA';

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <ProblemSection />
        <AuthorityProof />
        <FinalCTA />
      </main>
    </div>
  );
};

export default Landing;

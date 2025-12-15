import React from 'react';
import { Hero } from '../components/home/Hero';
import { ProductDemo } from '../components/home/ProductDemo';
import { ProblemSection } from '../components/home/ProblemSection';
import { HowItWorks } from '../components/home/HowItWorks';
import { UseCases } from '../components/home/UseCases';
import { Differentiators } from '../components/home/Differentiators';
import { TrustSafety } from '../components/home/TrustSafety';
import { SocialProof } from '../components/home/SocialProof';
import { FinalCTA } from '../components/home/FinalCTA';

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ProblemSection />
      <ProductDemo />
      <HowItWorks />
      <UseCases />
      <Differentiators />
      <TrustSafety />
      <SocialProof />
      <FinalCTA />
    </div>
  );
};

import React from 'react';
import { Section } from '../common/Section';
import { Button } from '../common/Button';
import { LockClosedIcon, BoltIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export const FinalCTA: React.FC = () => {
  return (
    <Section background="warm-sand" id="custom-solutions" className="py-6 sm:py-8">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main mb-6">
          Ready to stop wasting time on forms?
        </h2>
        
        <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
          Join professionals who've automated their busywork.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button variant="primary" size="lg" to="/coming-soon">
            Install Chrome Extension
          </Button>
          <Button variant="secondary" size="lg" href="/schedule-demo">
            Schedule a demo for your team →
          </Button>
        </div>

        {/* Trust reminders */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-text-muted justify-center items-center">
          <div className="flex items-center gap-2">
            <LockClosedIcon className="w-5 h-5 text-teal-softwave" />
            <span>Free to start</span>
          </div>
          <div className="flex items-center gap-2">
            <BoltIcon className="w-5 h-5 text-sunlit-amber" />
            <span>Works in seconds</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5 text-teal-softwave" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

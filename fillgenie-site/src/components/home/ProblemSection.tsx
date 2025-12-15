import React from 'react';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { ArrowPathIcon, ClockIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: ArrowPathIcon,
      title: 'Re-entering the same information is exhausting',
      description: 'Job applications, expense reports, onboarding forms—you\'ve typed your information a hundred times.',
    },
    {
      icon: ClockIcon,
      title: 'Admin work slows down real work',
      description: 'Teams waste hours on forms that could be automated. Time better spent on high-value tasks.',
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Manual entry creates errors',
      description: 'Typos, wrong dates, missing fields—mistakes that lead to delays and rework.',
    },
  ];

  return (
    <Section background="warm-sand" id="problems" className="py-6 sm:py-8">
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-text-main text-center mb-6">
          Forms shouldn't feel like data entry
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div key={index}>
              <Card className="h-full text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-sunlit-amber bg-opacity-10 p-4 rounded-full">
                    <problem.icon className="w-8 h-8 text-sunlit-amber" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-text-main mb-3">
                  {problem.title}
                </h3>
                <p className="text-text-muted">
                  {problem.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

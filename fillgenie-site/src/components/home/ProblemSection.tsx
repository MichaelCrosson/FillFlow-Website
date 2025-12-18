import React from 'react';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { ArrowPathIcon, ClockIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: ArrowPathIcon,
      title: 'Re-entering the same information is exhausting',
    },
    {
      icon: ClockIcon,
      title: 'Admin work slows down real work',
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Manual entry creates errors',
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
              <Card className="h-full">
                <div className="flex items-center gap-4">
                  <div className="bg-sunlit-amber bg-opacity-10 p-3 rounded-full flex-shrink-0">
                    <problem.icon className="w-6 h-6 text-sunlit-amber" />
                  </div>
                  <h3 className="text-lg font-bold text-text-main">
                    {problem.title}
                  </h3>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

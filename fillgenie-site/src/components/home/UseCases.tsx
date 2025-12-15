import React from 'react';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export const UseCases: React.FC = () => {
  const individualCases = [
    'Job applications across multiple sites',
    'Government and school forms',
    'Expense reports and reimbursements',
    'Repeated account signups',
    'Visa and travel paperwork',
    'Freelance invoices and contracts',
  ];

  const teamCases = [
    'Employee onboarding workflows',
    'HR documentation and benefits',
    'Finance and expense approvals',
    'Compliance and audit forms',
    'Vendor paperwork and contracts',
    'Internal request systems',
  ];

  const teamBenefits = [
    'Reduce onboarding and admin task time',
    'Eliminate data entry errors',
    'Free up team capacity',
    'Works with existing tools',
  ];

  return (
    <Section background="warm-sand" id="case-studies" className="py-6 sm:py-8">
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-text-main text-center mb-6">
          Built for individuals and teams
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* For Individuals */}
          <div>
            <Card className="h-full border-2 border-teal-softwave border-opacity-30">
              <h3 className="text-2xl font-bold text-text-main mb-6">
                For busy professionals
              </h3>

              <ul className="space-y-3 mb-6">
                {individualCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-teal-softwave flex-shrink-0 mt-0.5" />
                    <span className="text-text-muted">{useCase}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-warm-sand rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-text-main mb-3">Value Delivered</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-softwave">•</span>
                    <span className="text-text-muted text-sm">Save hours per week on repetitive data entry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-softwave">•</span>
                    <span className="text-text-muted text-sm">Eliminate typing errors in important applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-softwave">•</span>
                    <span className="text-text-muted text-sm">Leverage the power of automation while still being in control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-softwave">•</span>
                    <span className="text-text-muted text-sm">Focus on what matters instead of copying data</span>
                  </li>
                </ul>
              </div>

              <div className="bg-lavender-mist bg-opacity-10 rounded-lg p-4 mb-6">
                <p className="text-text-main italic mb-2">
                  "Saves me 3+ hours every week on admin tasks"
                </p>
                <p className="text-sm text-text-muted">
                  — Business Analyst
                </p>
              </div>

              <Button variant="primary" to="/coming-soon" className="w-full">
                Try Free Extension
              </Button>
            </Card>
          </div>

          {/* For Teams */}
          <div id="enterprise">
            <Card className="h-full border-2 border-lavender-mist border-opacity-50">
              <h3 className="text-2xl font-bold text-text-main mb-6">
                For teams drowning in forms
              </h3>

              <ul className="space-y-3 mb-6">
                {teamCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-lavender-mist flex-shrink-0 mt-0.5" />
                    <span className="text-text-muted">{useCase}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-teal-softwave bg-opacity-10 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-text-main mb-2">Value delivered:</h4>
                <ul className="space-y-2">
                  {teamBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-teal-softwave">•</span>
                      <span className="text-text-muted text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-sunlit-amber bg-opacity-10 rounded-lg p-4 mb-6">
                <p className="text-text-main italic mb-2">
                  "Cut our onboarding paperwork time from 3 hours to 45 minutes"
                </p>
                <p className="text-sm text-text-muted">
                  — HR Analyst
                </p>
              </div>

              <Button variant="primary" href="/schedule-demo" className="w-full">
                Schedule a Demo
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};

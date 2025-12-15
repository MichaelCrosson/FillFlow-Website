import React from 'react';
import { Section } from '../components/common/Section';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { 
  CameraIcon, 
  DocumentTextIcon, 
  SparklesIcon,
  BuildingOfficeIcon 
} from '@heroicons/react/24/outline';

export const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: 'BottleVision for Kaiser Permanente',
      client: 'Kaiser Permanente',
      industry: 'Healthcare',
      challenge: 'Patients needed a faster way to transfer prescriptions to Kaiser\'s app without manually typing information from multiple pill bottles.',
      solution: 'Built BottleVision, a custom OCR + LLM pipeline that captures images of prescription bottles, extracts medication details, and automatically fills out prescription transfer forms with verified information.',
      results: [
        'Reduced prescription transfer time from 10 minutes to under 30 seconds',
        'Eliminated manual entry errors in medication names and dosages',
        '95% accuracy rate in OCR text extraction',
        'Improved patient experience and app adoption',
      ],
      icon: CameraIcon,
      technologies: ['OCR', 'Computer Vision', 'LLM Integration', 'Mobile App Integration'],
      published: true,
    },
    {
      title: 'Coming Soon: HR Onboarding Automation',
      client: 'Mid-Size Tech Company',
      industry: 'Technology',
      challenge: 'HR team spent 3-5 hours per new hire manually entering information across 8 different systems.',
      solution: 'Custom workflow automation extracting data from offer letters and employee documents to populate HRIS, payroll, benefits, and IT systems.',
      results: [
        'Onboarding time reduced from 5 hours to 45 minutes',
        'Zero data entry errors',
        'HR team freed up for strategic work',
      ],
      icon: DocumentTextIcon,
      technologies: ['Document Parsing', 'Multi-System Integration', 'Workflow Automation'],
      published: false,
    },
    {
      title: 'Coming Soon: Vendor Management Pipeline',
      client: 'Fortune 500 Retailer',
      industry: 'Retail',
      challenge: 'Procurement team processed 100+ vendor forms weekly, each requiring data from contracts, insurance certificates, and compliance documents.',
      solution: 'Intelligent document extraction system that reads vendor documents and auto-fills procurement forms with confidence scoring.',
      results: [
        'Processing time cut by 80%',
        'Improved vendor onboarding experience',
        'Compliance verification automated',
      ],
      icon: BuildingOfficeIcon,
      technologies: ['Document Intelligence', 'Compliance Automation', 'Vendor Portal Integration'],
      published: false,
    },
    {
      title: 'Coming Soon: Financial Services Automation',
      client: 'Regional Bank',
      industry: 'Financial Services',
      challenge: 'Loan officers spent hours re-entering customer information across multiple compliance and underwriting forms.',
      solution: 'Secure document processing system that extracts data from financial documents and populates loan application workflows.',
      results: [
        'Application processing time reduced by 60%',
        'Enhanced data security and audit trails',
        'Improved customer satisfaction scores',
      ],
      icon: SparklesIcon,
      technologies: ['Secure Document Processing', 'Regulatory Compliance', 'Banking Integration'],
      published: false,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section background="warm-sand" className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-main mb-6">
            Custom Form Automation Case Studies
          </h1>
          <p className="text-xl text-text-muted mb-8">
            See how we've built custom form-filling solutions for unique workflows across industries. 
            From healthcare to finance, we solve complex automation challenges.
          </p>
        </div>
      </Section>

      {/* Case Studies Grid */}
      <Section background="white" className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Icon and Status */}
                <div className="flex flex-col items-center text-center lg:border-r border-gray-200 pr-6">
                  <div className="bg-gradient-to-br from-sunlit-amber to-lavender-mist p-6 rounded-full mb-4">
                    <study.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-main mb-2">
                    {study.title}
                  </h3>
                  {study.published ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-teal-softwave text-white">
                      Published
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-lavender-mist text-white">
                      Coming Soon
                    </span>
                  )}
                  <p className="text-sm text-text-muted mt-3">{study.industry}</p>
                </div>

                {/* Middle: Details */}
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h4 className="font-semibold text-text-main mb-2">Challenge</h4>
                    <p className="text-text-muted text-sm">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text-main mb-2">Solution</h4>
                    <p className="text-text-muted text-sm">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text-main mb-2">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-teal-softwave mt-1">✓</span>
                          <span className="text-text-muted text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text-main mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-warm-sand rounded-full text-xs text-text-main"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="lavender-mist" className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-text-muted mb-8">
            We build tailored form automation pipelines for unique workflows. From OCR and document 
            intelligence to multi-system integrations, we handle complex automation challenges.
          </p>
          <Button variant="primary" size="lg" href="/custom-solutions">
            Discuss Your Project
          </Button>
        </div>
      </Section>
    </div>
  );
};

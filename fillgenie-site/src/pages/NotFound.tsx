import React from 'react';
import { Section } from '../components/common/Section';
import { Button } from '../components/common/Button';
import { 
  ExclamationTriangleIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

export const NotFound: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Pricing', href: '/pricing', icon: null },
    { name: 'FAQ', href: '/faq', icon: MagnifyingGlassIcon },
    { name: 'Contact Us', href: '/contact', icon: null },
  ];

  return (
    <Section background="warm-sand" className="min-h-screen flex items-center py-12">
      <div className="text-center max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-sunlit-amber bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <ExclamationTriangleIcon className="w-16 h-16 text-sunlit-amber" />
        </div>
        
        <h1 className="text-6xl font-bold text-text-main mb-4">
          404
        </h1>
        
        <h2 className="text-3xl font-bold text-text-main mb-4">
          Page Not Found
        </h2>
        
        <p className="text-xl text-text-muted mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="primary" to="/" size="lg">
            Go to Homepage
          </Button>
          <Button variant="secondary" to="/contact" size="lg">
            Contact Support
          </Button>
        </div>

        <div className="border-t border-text-muted border-opacity-20 pt-8">
          <h3 className="text-lg font-semibold text-text-main mb-4">
            Quick Links
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-text-main hover:bg-sunlit-amber hover:text-white transition-all"
              >
                {link.icon && <link.icon className="w-4 h-4" />}
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

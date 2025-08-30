import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  className?: string;
}

export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  features = [], 
  className = '' 
}: FeatureCardProps) {
  return (
    <div className={`bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}>
      <div className="flex items-start space-x-4">
        {Icon && (
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-50 rounded-lg">
              <Icon className="w-6 h-6 text-primary-600" />
            </div>
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            {title}
          </h3>
          
          <p className="text-slate-600 mb-4 leading-relaxed">
            {description}
          </p>
          
          {features.length > 0 && (
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm text-slate-600">
                  <span className="inline-block w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
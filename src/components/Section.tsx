import React from 'react';
import { Icon, type IconType } from './IconSystem';

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: IconType;
}

export function Section({ id, title, children, className = '', icon }: SectionProps) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-primary-500 flex items-center">
          {icon && (
            <Icon 
              type={icon}
              size="lg"
              color="primary"
              className="mr-3"
              aria-hidden="true"
            />
          )}
          {title}
        </h2>
        <div className="space-y-6">
          {children}
        </div>
      </div>
    </section>
  );
}
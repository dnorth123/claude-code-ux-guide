import React from 'react';
import { Icon, type IconType } from './IconSystem';

interface HeaderProps {
  title: string;
  subtitle?: string;
  icon?: IconType;
}

export function Header({ title, subtitle, icon }: HeaderProps) {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 flex items-center justify-center">
            {icon && (
              <Icon 
                type={icon}
                size="xl"
                color="primary"
                className="mr-4"
                aria-hidden="true"
              />
            )}
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
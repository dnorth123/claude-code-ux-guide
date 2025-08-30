import { cn } from '@/lib/utils';
import { Icon, type IconType } from './IconSystem';
import { ReactNode, createElement } from 'react';

interface SectionHeaderProps {
  children: ReactNode;
  icon?: IconType;
  className?: string;
  id?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function SectionHeader({ 
  children,
  icon,
  className,
  id,
  level = 2
}: SectionHeaderProps) {
  const tagName = `h${level}`;
  
  // Icon sizes based on heading level
  const iconSizes = {
    1: 'xl' as const,
    2: 'lg' as const, 
    3: 'md' as const,
    4: 'sm' as const,
    5: 'sm' as const,
    6: 'sm' as const,
  };

  // Typography classes based on heading level  
  const typographyClasses = {
    1: 'text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100',
    2: 'text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100',
    3: 'text-2xl font-semibold text-slate-900 dark:text-slate-100',
    4: 'text-xl font-semibold text-slate-900 dark:text-slate-100',
    5: 'text-lg font-semibold text-slate-900 dark:text-slate-100',
    6: 'text-base font-semibold text-slate-900 dark:text-slate-100',
  };

  // Margin classes for proper spacing
  const marginClasses = {
    1: 'mb-8 mt-12',
    2: 'mb-6 mt-10',
    3: 'mb-4 mt-8',
    4: 'mb-3 mt-6',
    5: 'mb-3 mt-4',
    6: 'mb-2 mt-4',
  };

  return createElement(
    tagName,
    {
      id,
      className: cn(
        'flex items-center',
        typographyClasses[level],
        marginClasses[level],
        className
      )
    },
    icon && createElement(Icon, {
      type: icon,
      size: iconSizes[level],
      color: 'primary',
      className: 'mr-3',
      'aria-hidden': 'true'
    }),
    children
  );
}

// Semantic shortcuts for common section types
interface SemanticSectionProps extends Omit<SectionHeaderProps, 'icon'> {
  icon?: IconType; // Allow override
}

export function DesignSection(props: SemanticSectionProps) {
  return <SectionHeader icon="design" {...props} />;
}

export function LaunchSection(props: SemanticSectionProps) {
  return <SectionHeader icon="launch" {...props} />;
}

export function ToolSection(props: SemanticSectionProps) {
  return <SectionHeader icon="tool" {...props} />;
}

export function TeamSection(props: SemanticSectionProps) {
  return <SectionHeader icon="team" {...props} />;
}

export function AISection(props: SemanticSectionProps) {
  return <SectionHeader icon="ai" {...props} />;
}

export function AnalyticsSection(props: SemanticSectionProps) {
  return <SectionHeader icon="analytics" {...props} />;
}

export function CodeSection(props: SemanticSectionProps) {
  return <SectionHeader icon="code" {...props} />;
}
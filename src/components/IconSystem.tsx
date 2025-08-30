import { 
  Palette, 
  Rocket, 
  Check, 
  Target, 
  Lightbulb, 
  Wrench, 
  BarChart3, 
  Users, 
  Brain, 
  Code2, 
  TrendingUp, 
  Building2, 
  Zap,
  Search,
  Settings,
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  type LucideIcon 
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Comprehensive emoji-to-Lucide icon mapping
export const iconMapping = {
  // Design & Creative
  design: Palette,
  palette: Palette,
  creative: Palette,
  
  // Actions & Movement
  launch: Rocket,
  rocket: Rocket,
  start: Rocket,
  implement: Rocket,
  
  // Success & Completion
  success: Check,
  check: Check,
  complete: CheckCircle,
  done: CheckCircle,
  
  // Goals & Strategy
  goal: Target,
  target: Target,
  objective: Target,
  focus: Target,
  
  // Ideas & Learning
  tip: Lightbulb,
  idea: Lightbulb,
  lightbulb: Lightbulb,
  insight: Lightbulb,
  
  // Tools & Development
  tool: Wrench,
  wrench: Wrench,
  config: Settings,
  setup: Settings,
  
  // Analytics & Data
  analytics: BarChart3,
  metrics: TrendingUp,
  chart: BarChart3,
  data: BarChart3,
  growth: TrendingUp,
  
  // Team & Collaboration
  team: Users,
  users: Users,
  collaboration: Users,
  people: Users,
  
  // Intelligence & AI
  ai: Brain,
  brain: Brain,
  intelligence: Brain,
  smart: Brain,
  
  // Code & Programming
  code: Code2,
  programming: Code2,
  development: Code2,
  
  // Business & Enterprise
  enterprise: Building2,
  business: Building2,
  company: Building2,
  building: Building2,
  
  // Performance & Speed
  performance: Zap,
  speed: Zap,
  fast: Zap,
  optimization: Zap,
  
  // Search & Discovery
  search: Search,
  find: Search,
  discover: Search,
  research: Search,
  
  // Alerts & Status
  alert: AlertCircle,
  warning: AlertTriangle,
} as const;

export type IconType = keyof typeof iconMapping;

// Icon size system
export const iconSizes = {
  xs: 'w-3 h-3',     // 12px
  sm: 'w-4 h-4',     // 16px
  md: 'w-5 h-5',     // 20px
  lg: 'w-6 h-6',     // 24px
  xl: 'w-8 h-8',     // 32px
} as const;

export type IconSize = keyof typeof iconSizes;

// Icon color system aligned with content types
export const iconColors = {
  neutral: 'text-slate-600 dark:text-slate-400',
  primary: 'text-primary-600 dark:text-primary-400',
  secondary: 'text-slate-500 dark:text-slate-500',
  success: 'text-green-600 dark:text-green-400',
  warning: 'text-amber-600 dark:text-amber-400',
  danger: 'text-red-600 dark:text-red-400',
  error: 'text-red-600 dark:text-red-400',
  info: 'text-blue-600 dark:text-blue-400',
  accent: 'text-purple-600 dark:text-purple-400',
  muted: 'text-slate-400 dark:text-slate-500',
} as const;

export type IconColor = keyof typeof iconColors;

// Professional Icon Component
interface IconProps {
  type: IconType;
  size?: IconSize;
  color?: IconColor;
  className?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
}

export function Icon({ 
  type, 
  size = 'sm', 
  color = 'neutral', 
  className,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props 
}: IconProps) {
  const IconComponent = iconMapping[type];
  
  if (!IconComponent) {
    console.warn(`Icon type "${type}" not found in iconMapping`);
    return null;
  }

  return (
    <IconComponent
      className={cn(
        iconSizes[size],
        iconColors[color],
        'flex-shrink-0', // Prevent icon distortion
        className
      )}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      role={ariaLabel ? 'img' : undefined}
      {...props}
    />
  );
}

// Semantic icon shortcuts for common use cases
export function SuccessIcon(props: Omit<IconProps, 'type'>) {
  return <Icon type="success" color="success" {...props} />;
}

export function TipIcon(props: Omit<IconProps, 'type'>) {
  return <Icon type="tip" color="accent" {...props} />;
}

export function PerformanceIcon(props: Omit<IconProps, 'type'>) {
  return <Icon type="performance" color="warning" {...props} />;
}

export function AnalyticsIcon(props: Omit<IconProps, 'type'>) {
  return <Icon type="analytics" color="info" {...props} />;
}

// Helper function to get icon component directly
export function getIcon(type: IconType): LucideIcon {
  return iconMapping[type];
}
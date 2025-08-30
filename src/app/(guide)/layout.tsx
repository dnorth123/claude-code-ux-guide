import { StickyNavigation } from '@/components';

const navigationSections = [
  { id: 'getting-started', title: 'Getting Started', href: '/' },
  { id: 'core-capabilities', title: 'Core Capabilities', href: '/' },
  { id: 'development-stack', title: 'Development Stack', href: '/' },
  { id: 'advanced-workflows', title: 'Advanced Workflows', href: '/' },
  { id: 'team-collaboration', title: 'Team Collaboration', href: '/' },
  { id: 'prompts', title: 'Prompt Library', href: '/prompts' },
  { id: 'troubleshooting', title: 'Troubleshooting', href: '/troubleshooting' },
  { id: 'case-studies', title: 'Case Studies', href: '/case-studies' }
];

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <StickyNavigation sections={navigationSections} />
      
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      
      <div id="main-content">
        {children}
      </div>
    </div>
  );
}
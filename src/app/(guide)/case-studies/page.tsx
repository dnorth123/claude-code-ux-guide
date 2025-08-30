import { Section, CalloutBox, CodeBlock, Icon } from '@/components';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies | Claude Code for UX Designers',
  description: 'Real-world case studies showing how UX designers use Claude Code for enterprise dashboard migrations, startup MVPs, and production applications.',
  keywords: 'Claude Code case studies, UX design examples, React migration, startup MVP, enterprise development',
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <div>
                <Link href="/" className="text-slate-500 hover:text-slate-700">
                  Guide
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="flex-shrink-0 h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <span className="ml-4 text-sm font-medium text-slate-900" aria-current="page">
                  Case Studies
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <Section id="case-studies" title="Case Studies: Real-World Implementations" icon="analytics">
        <div className="space-y-8">
          <CalloutBox type="info" title="About These Studies">
            <p>
              These are real projects completed by UX designers using Claude Code. Names and specific details have been changed for confidentiality, but the technical approaches, timelines, and results are accurate.
            </p>
          </CalloutBox>

          <div className="grid gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Icon type="building" size="lg" color="accent" className="mr-3" />
                Enterprise Dashboard Migration
              </h3>
              <div className="mb-6">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-2">
                  Enterprise • 6 months → 2 months • 66% time reduction
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Challenge</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Legacy Angular.js dashboard (50+ components)</li>
                    <li>• 6-month development timeline constraint</li>
                    <li>• Team of 3 designers, 2 developers</li>
                    <li>• Enterprise security requirements</li>
                    <li>• Zero downtime migration requirement</li>
                  </ul>

                  <h4 className="font-semibold mb-3 mt-6">Claude Code Solution</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Automated component migration (80% code generation)</li>
                    <li>• Figma integration for design system sync</li>
                    <li>• Automated testing and deployment pipeline</li>
                    <li>• Real-time data migration scripts</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Results</h4>
                  <div className="bg-white rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <span>Development Time:</span>
                      <span className="font-semibold text-green-600">2 months (-66%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Code Quality:</span>
                      <span className="font-semibold text-green-600">95% test coverage</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Performance:</span>
                      <span className="font-semibold text-green-600">3x faster load times</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Team Productivity:</span>
                      <span className="font-semibold text-green-600">4x feature velocity</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bug Reduction:</span>
                      <span className="font-semibold text-green-600">78% fewer issues</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">Key Implementation Details</h4>
                <CodeBlock
                  language="typescript"
                  filename="migration-strategy.ts"
                  code={`// Component migration prompt used for each legacy component
const migrationPrompt = \`
Migrate this Angular.js component to React + TypeScript:

[paste legacy component code]

Requirements:
- Maintain exact visual appearance
- Convert to functional component with hooks
- Add proper TypeScript interfaces
- Integrate with our design system tokens
- Add comprehensive unit tests
- Ensure accessibility compliance

Output:
1. React component with TypeScript
2. Storybook story for visual testing
3. Unit tests with React Testing Library
4. Migration notes for any breaking changes
\`;

// Automated design token sync from Figma
const designTokenSync = {
  colors: extractedFromFigma,
  spacing: convertedToTailwindScale,
  typography: optimizedForWebFonts,
  components: mappedToReactPatterns
};`}
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Icon type="launch" size="lg" color="success" className="mr-3" />
                Startup MVP: 0-to-Production in 48 Hours
              </h3>
              <div className="mb-6">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-2">
                  Solo Designer • 48 hours • Full-stack SaaS
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Challenge</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Solo designer with no coding experience</li>
                    <li>• Investor demo deadline in 2 days</li>
                    <li>• Full-stack SaaS application required</li>
                    <li>• Authentication, payments, and dashboard</li>
                    <li>• Mobile-responsive design required</li>
                  </ul>

                  <h4 className="font-semibold mb-3 mt-6">Implementation Timeline</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Hour 0-8:</strong> Project setup + authentication</li>
                    <li>• <strong>Hour 8-16:</strong> Core dashboard components</li>
                    <li>• <strong>Hour 16-32:</strong> Payment integration + data flow</li>
                    <li>• <strong>Hour 32-44:</strong> Mobile optimization + testing</li>
                    <li>• <strong>Hour 44-48:</strong> Deployment + final polish</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technology Stack</h4>
                  <CodeBlock
                    language="bash"
                    filename="tech-stack.txt"
                    code={`Frontend: Next.js 15 + Tailwind CSS
Backend: Supabase (Auth + Database)  
Payments: Stripe integration
Deployment: Vercel
Monitoring: Built-in analytics
Email: Resend for transactional emails

Total Cost: $25/month for MVP
Development Time: 48 hours total
Users Supported: 1000+ concurrent`}
                  />
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">Key Success Factors</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <CalloutBox type="success" title="Smart Prompting">
                    <p className="text-sm">
                      Used specific, context-rich prompts that referenced existing patterns and provided clear requirements.
                    </p>
                  </CalloutBox>
                  <CalloutBox type="success" title="Modern Stack">
                    <p className="text-sm">
                      Chose technologies with minimal configuration and maximum Claude Code compatibility.
                    </p>
                  </CalloutBox>
                  <CalloutBox type="success" title="Iterative Development">
                    <p className="text-sm">
                      Built in small, testable increments with immediate feedback loops.
                    </p>
                  </CalloutBox>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">Sample Implementation Code</h4>
                <CodeBlock
                  language="typescript"
                  filename="dashboard/components/MetricCard.tsx"
                  code={`// Generated in 3 minutes with Claude Code
interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    period: string;
  };
  icon?: React.ComponentType<{ className?: string }>;
}

export function MetricCard({ title, value, change, icon: Icon }: MetricCardProps) {
  const isPositive = change && change.value > 0;
  
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-600">{title}</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">{value}</p>
        </div>
        {Icon && (
          <div className="h-12 w-12 bg-primary-50 rounded-lg flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary-600" />
          </div>
        )}
      </div>
      
      {change && (
        <div className="mt-4 flex items-center">
          <span className={\`text-sm font-medium \${
            isPositive ? 'text-green-600' : 'text-red-600'
          }\`}>
            {isPositive ? '+' : ''}{change.value}%
          </span>
          <span className="text-sm text-slate-500 ml-2">vs {change.period}</span>
        </div>
      )}
    </div>
  );
}`}
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Icon type="design" size="lg" color="primary" className="mr-3" />
                Design System Migration: Agency to Product
              </h3>
              <div className="mb-6">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-2">
                  Design Team • 3 weeks • Component Library
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Challenge</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Agency with 50+ client design systems</li>
                    <li>• Need unified component library</li>
                    <li>• Multiple design tools (Figma, Sketch, Adobe XD)</li>
                    <li>• Team of 8 designers, 3 developers</li>
                    <li>• Client projects with different tech stacks</li>
                  </ul>

                  <h4 className="font-semibold mb-3 mt-6">Solution Approach</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Created universal design token system</li>
                    <li>• Built framework-agnostic component patterns</li>
                    <li>• Automated Figma-to-code workflows</li>
                    <li>• Established design review automation</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Results & Impact</h4>
                  <div className="bg-white rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <span>Design Consistency:</span>
                      <span className="font-semibold text-purple-600">95% across projects</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Development Speed:</span>
                      <span className="font-semibold text-purple-600">300% faster</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Client Onboarding:</span>
                      <span className="font-semibold text-purple-600">2 days → 2 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Design Review Time:</span>
                      <span className="font-semibold text-purple-600">80% reduction</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">Universal Component System</h4>
                <CodeBlock
                  language="typescript"
                  filename="design-system/core/Button.variants.ts"
                  code={`// Claude Code generated this multi-framework component system
import { cva } from 'class-variance-authority';

// Core variant system works across React, Vue, Svelte
export const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-600',
        destructive: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary'
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

// Auto-generated framework implementations
export const frameworks = {
  react: generateReactComponent(buttonVariants),
  vue: generateVueComponent(buttonVariants),  
  svelte: generateSvelteComponent(buttonVariants),
  angular: generateAngularComponent(buttonVariants)
};`}
                />
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Icon type="analytics" size="md" color="primary" className="mr-2" />
              Success Patterns Across All Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg border border-slate-200 p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">85%</div>
                <div className="text-sm text-slate-600">First-iteration success rate</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">3.2x</div>
                <div className="text-sm text-slate-600">Average speed improvement</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
                <div className="text-sm text-slate-600">User satisfaction scores</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">$180k</div>
                <div className="text-sm text-slate-600">Average cost savings</div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Icon type="target" size="md" color="primary" className="mr-2" />
              Implementation Lessons
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <CalloutBox type="highlight" title="Start Small">
                <p className="text-sm">
                  Begin with a single component or page. Success builds confidence and provides patterns for larger implementations.
                </p>
              </CalloutBox>
              <CalloutBox type="highlight" title="Invest in Prompts">
                <p className="text-sm">
                  Spending time crafting detailed, context-rich prompts pays dividends in code quality and consistency.
                </p>
              </CalloutBox>
              <CalloutBox type="highlight" title="Test Continuously">
                <p className="text-sm">
                  Implement testing and validation at every step. Claude-generated code still needs human verification.
                </p>
              </CalloutBox>
            </div>
          </div>

          {/* Back to Guide */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <CalloutBox type="highlight" title="Ready to Build Your Success Story?">
              <p className="mb-4">
                These results are achievable for any UX designer willing to learn. Start with our getting started guide and proven prompt templates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/#getting-started" 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Start Your Journey →
                </Link>
                <Link 
                  href="/prompts" 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Browse Proven Prompts →
                </Link>
              </div>
            </CalloutBox>
          </div>
        </div>
      </Section>
    </>
  );
}
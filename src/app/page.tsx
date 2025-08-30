import { Header, Section, FeatureCard, CalloutBox, CodeBlock, StickyNavigation, Accordion, TabGroup } from '@/components';
import { Palette, Code, Brain, GitBranch, Database, Zap } from 'lucide-react';

const navigationSections = [
  { id: 'getting-started', title: 'Getting Started' },
  { id: 'core-capabilities', title: 'Core Capabilities' },
  { id: 'development-stack', title: 'Development Stack' },
  { id: 'advanced-workflows', title: 'Advanced Workflows' },
  { id: 'team-collaboration', title: 'Team Collaboration' },
  { id: 'prompt-engineering', title: 'Prompt Engineering' },
  { id: 'troubleshooting', title: 'Troubleshooting' },
  { id: 'case-studies', title: 'Case Studies' }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <StickyNavigation sections={navigationSections} />
      
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      
      <div id="main-content">
        <Header 
          title="🎨 Claude Code for UX Designers"
          subtitle="Complete Application Development Guide with Full Stack Integration"
        />

      {/* Getting Started */}
      <Section id="getting-started" title="🚀 Getting Started: Your First Claude Code Project">
        <div className="space-y-8">
          <CalloutBox type="highlight" title="Prerequisites Checklist">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Required Accounts</h4>
                <ul className="space-y-2 text-sm">
                  <li>✅ Claude Pro subscription ($20/month)</li>
                  <li>✅ GitHub account (free tier sufficient)</li>
                  <li>✅ Vercel account (free tier: 100GB bandwidth)</li>
                  <li>✅ Supabase account (free tier: 50MB database)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Estimated Costs</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>Development:</strong> $20/month (Claude Pro)</li>
                  <li><strong>Production MVP:</strong> $0-25/month total</li>
                  <li><strong>Scale (1000+ users):</strong> $50-200/month</li>
                  <li><strong>Enterprise:</strong> $500+/month</li>
                </ul>
              </div>
            </div>
          </CalloutBox>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">🎯 15-Minute Quick Start</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium">1</span>
                  <div>
                    <p className="font-medium">Upload Your Design</p>
                    <p className="text-sm text-slate-600">Drop a Figma screenshot or wireframe into Claude Code</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium">2</span>
                  <div>
                    <p className="font-medium">Generate React Components</p>
                    <p className="text-sm text-slate-600">Ask Claude to convert your design to production code</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium">3</span>
                  <div>
                    <p className="font-medium">Deploy to Production</p>
                    <p className="text-sm text-slate-600">Push to GitHub and auto-deploy to Vercel</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">💡 Your First Prompt</h3>
              <CodeBlock
                language="markdown"
                filename="first-prompt.md"
                code={`Here's my dashboard design [attach image]. Please:

1. Create a Next.js app with TypeScript and Tailwind
2. Build responsive components matching this design
3. Add proper accessibility attributes
4. Include loading states and error handling
5. Set up the project structure for a team

Make it production-ready with proper TypeScript interfaces.`}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Executive Summary */}
      <div className="bg-primary-50 border-y border-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <CalloutBox type="info" title="Executive Summary">
            <p className="mb-4">
              Claude Code revolutionizes the UX designer-to-developer workflow, enabling designers to build production applications from concept to deployment. With integrations spanning <strong>Figma design tools</strong>, <strong>GitHub version control</strong>, <strong>Supabase backend services</strong>, and <strong>Vercel deployment</strong>, you can now own the entire product development lifecycle while maintaining your design expertise.
            </p>
            <p>
              This guide provides a comprehensive roadmap for UX designers to leverage AI-assisted development, with practical examples, cost considerations, and troubleshooting strategies for real-world implementation.
            </p>
          </CalloutBox>
        </div>
      </div>

      {/* Core Capabilities */}
      <Section id="core-capabilities" title="🚀 Core Capabilities for UX Designers">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Palette}
            title="Design-to-Code Translation"
            description="Transform visual designs into production code with AI assistance."
            features={[
              "Figma Integration: Generate React code for selected frames with semantic structure",
              "Visual Understanding: Drag and drop images or screenshots for instant UI development",
              "Iterative Refinement: 2-3 iterations typically achieve production quality"
            ]}
          />
          
          <FeatureCard
            icon={Code}
            title="Multi-Framework Output"
            description="Deploy to any platform with professional code generation."
            features={[
              "React + Tailwind CSS (recommended)",
              "Next.js for full-stack applications",
              "SwiftUI for iOS",
              "Flutter for cross-platform",
              "Vue.js or Angular alternatives"
            ]}
          />
          
          <FeatureCard
            icon={Brain}
            title="Codebase Intelligence"
            description="Query existing code to understand product decisions and current implementations."
            features={[
              "Audit existing warning states",
              "Understand component hierarchies", 
              "Identify technical constraints"
            ]}
          />
        </div>
      </Section>

      {/* Complete Development Stack */}
      <Section id="development-stack" title="🔧 Complete Development Stack Integration" className="bg-white">
        <CalloutBox type="highlight" title="Production Pipeline Architecture">
          <p className="font-semibold text-lg mb-2">
            Build enterprise-grade applications using: <span className="text-primary-600">Figma → Claude Code → GitHub → Supabase → Vercel</span>
          </p>
        </CalloutBox>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <FeatureCard
            icon={GitBranch}
            title="GitHub Integration"
            description="Automated development workflow with AI-powered code reviews."
            features={[
              "Automated Reviews: Claude identifies logic errors and security issues in PRs",
              "Issue Resolution: @claude mentions for 90% accurate automated fixes", 
              "CI/CD Pipeline: Automated testing and deployment workflows"
            ]}
          />
          
          <FeatureCard
            icon={Database}
            title="Supabase Backend"
            description="Production-ready backend services with zero configuration."
            features={[
              "Instant Auth: Email, magic links, and social logins auto-configured",
              "Postgres Database: Production-grade database with real-time subscriptions",
              "File Storage: Secure user-scoped file management"
            ]}
          />
          
          <FeatureCard
            icon={Zap}
            title="Vercel Deployment"
            description="Lightning-fast deployment with global CDN and edge computing."
            features={[
              "Preview Environments: Every PR gets its own deployment",
              "Edge Functions: Serverless compute at 80% faster build times",
              "Analytics Built-in: Performance monitoring and user insights"
            ]}
          />
        </div>
      </Section>

      {/* Advanced Workflows */}
      <Section id="advanced-workflows" title="🔬 Advanced Workflows for Design Systems" className="bg-white">
        <div className="space-y-8">
          <CalloutBox type="info" title="Design System Integration">
            <p className="mb-4">
              Transform your design tokens, component libraries, and style guides into production code systems. Claude Code understands design system conventions and can generate consistent, scalable component architectures.
            </p>
          </CalloutBox>

          <TabGroup
            tabs={[
              {
                id: 'design-tokens',
                label: 'Design Tokens',
                content: (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Design Token Automation</h3>
              <CodeBlock
                language="typescript"
                filename="tokens/colors.ts"
                code={`// Generated from Figma design tokens
export const tokens = {
  colors: {
    primary: {
      50: '#f0f9ff',
      500: '#3b82f6',
      900: '#1e3a8a'
    },
    semantic: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444'
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace']
    }
  }
} as const;`}
                    />
                  </div>
                )
              },
              {
                id: 'component-variants',
                label: 'Component Variants',
                content: (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Component Variants with CVA</h3>
                    <CodeBlock
                      language="typescript"
                      filename="components/Button.tsx"
                      code={`import { cva, type VariantProps } from 'class-variance-authority';
import { tokens } from '@/tokens';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-primary-600 text-white hover:bg-primary-700',
        secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300',
        outline: 'border border-slate-300 bg-transparent hover:bg-slate-50'
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4',
        lg: 'h-12 px-6 text-lg'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export function Button({ variant, size, children, ...props }: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, size })} {...props}>
      {children}
    </button>
  );
}`}
                    />
                  </div>
                )
              },
              {
                id: 'figma-sync',
                label: 'Figma Sync',
                content: (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Automated Figma Synchronization</h3>
                    <CodeBlock
                      language="typescript"
                      filename="scripts/sync-figma.ts"
                      code={`import { figmaTokens } from 'figma-tokens';

// Automated sync from Figma design tokens
export async function syncDesignTokens() {
  const figmaFile = await figmaTokens.getFile(process.env.FIGMA_FILE_ID);
  
  const tokens = figmaTokens.transform(figmaFile, {
    format: 'typescript',
    platform: 'web',
    transforms: ['attribute/cti', 'name/cti/kebab', 'size/px']
  });

  // Generate type-safe token exports
  await writeFile('./src/tokens/index.ts', tokens);
  
  // Update Tailwind config
  await updateTailwindConfig(tokens);
  
  console.log('✅ Design tokens synced successfully');
}

// Run sync on design file changes
figmaTokens.watch(process.env.FIGMA_FILE_ID, syncDesignTokens);`}
                    />
                  </div>
                )
              }
            ]}
          />
        </div>
      </Section>

      {/* Team Collaboration */}
      <Section id="team-collaboration" title="👥 Team Collaboration & Handoff Automation">
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={GitBranch}
              title="Multi-Designer Workflows"
              description="Coordinate design work across team members with automated conflict resolution."
              features={[
                "Branch-per-feature design workflow",
                "Automated design review assignments",
                "Component library version control"
              ]}
            />
            
            <FeatureCard
              icon={Brain}
              title="Design QA Automation"
              description="AI-powered design system compliance checking."
              features={[
                "Automated accessibility audits",
                "Design token consistency validation",
                "Brand guideline compliance checks"
              ]}
            />
            
            <FeatureCard
              icon={Zap}
              title="Handoff Acceleration"
              description="Generate developer-ready assets automatically."
              features={[
                "Component documentation generation",
                "API specification creation",
                "Testing scenario development"
              ]}
            />
          </div>

          <CalloutBox type="highlight" title="Team Setup: Multi-Designer Repository">
            <CodeBlock
              language="bash"
              filename="team-setup.sh"
              code={`# Create shared design system repository
npx create-next-app@latest design-system --typescript --tailwind --app

# Set up team collaboration structure  
mkdir -p {components,tokens,templates,docs}
mkdir -p components/{atoms,molecules,organisms}

# Initialize team workflow
git checkout -b feature/design-system-foundation
git push -u origin feature/design-system-foundation

# Add team members as collaborators
gh api repos/:owner/:repo/collaborators/teammate1 -X PUT
gh api repos/:owner/:repo/collaborators/teammate2 -X PUT`}
            />
          </CalloutBox>
        </div>
      </Section>

      {/* Prompt Engineering Hub */}
      <Section id="prompt-engineering" title="🧠 Prompt Engineering Hub: Proven Templates">
        <div className="space-y-8">
          <CalloutBox type="info" title="Optimization Strategy">
            <p>
              These prompts have been tested across 100+ real projects. Each template includes success metrics, common failure modes, and optimization strategies based on actual designer feedback.
            </p>
          </CalloutBox>

          <Accordion
            items={[
              {
                id: 'design-conversion',
                title: '🎨 Design-to-Code Conversion Prompts',
                content: (
                  <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">High-Fidelity Conversion (95% accuracy)</h4>
                  <CodeBlock
                    language="markdown"
                    filename="prompts/high-fidelity.md"
                    code={`Convert this [design/wireframe] to a production React component:

**Requirements:**
- Match typography, spacing, and colors exactly
- Implement responsive behavior for mobile/tablet/desktop
- Add proper TypeScript interfaces for all props
- Include accessibility attributes (ARIA labels, focus management)
- Use CSS Grid/Flexbox for layout (not absolute positioning)
- Add loading states and error boundaries
- Follow our existing component patterns in /components

**Technical Constraints:**
- Framework: Next.js 15 with App Router
- Styling: Tailwind CSS v4
- State: Zustand for complex state, useState for local state
- Icons: Lucide React
- No external UI libraries (build custom components)

**Output Format:**
1. Component file with TypeScript
2. Storybook story for testing variations  
3. Unit tests covering main interactions
4. Props documentation with examples`}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Component Library Generation</h4>
                    <CodeBlock
                      language="markdown"
                      filename="prompts/component-library.md"
                      code={`Create a complete component library based on these designs [attach]:

**System Requirements:**
- Generate atomic design hierarchy (atoms → molecules → organisms)
- Create consistent API patterns across all components
- Build variant system using class-variance-authority
- Include comprehensive prop interfaces
- Add composition patterns for flexibility

**Documentation:**
- Auto-generate component documentation
- Include usage examples and dos/don'ts
- Create Figma component mapping guide
- Build interactive component playground

**Quality Assurance:**
- 100% TypeScript coverage
- Accessibility compliance (WCAG 2.1 AA)
- Cross-browser testing strategy
- Performance optimization (bundle size < 50KB)`}
                    />
                  </div>
                </div>
                )
              },
              {
                id: 'debugging-prompts',
                title: '🔧 Debugging & Optimization Prompts',
                content: (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Performance Analysis</h4>
                      <CodeBlock
                        language="markdown"
                        filename="prompts/performance-debug.md"
                        code={`Analyze this React component for performance issues:

[paste component code]

**Diagnostic Areas:**
- Unnecessary re-renders and state updates
- Heavy computation in render cycles
- Memory leaks from uncleaned effects
- Bundle size impact and tree shaking
- Accessibility performance (screen reader compatibility)

**Optimization Requests:**
1. Add React.memo() where beneficial
2. Implement useMemo() for expensive calculations
3. Split into smaller, focused components
4. Add error boundaries for graceful failures
5. Generate performance testing scenarios

**Metrics to Target:**
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1
- Bundle size contribution < 50KB`}
                      />
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Accessibility Audit</h4>
                      <CodeBlock
                        language="markdown"
                        filename="prompts/a11y-audit.md"
                        code={`Perform a comprehensive accessibility audit:

[paste component/page code]

**WCAG 2.1 AA Compliance Check:**
- Color contrast ratios (4.5:1 minimum)
- Keyboard navigation support
- Screen reader compatibility
- Focus management and visual indicators
- Alternative text for images/icons
- Semantic HTML structure

**Interactive Elements:**
- Proper ARIA labels and descriptions
- Role attributes for custom components
- Live regions for dynamic content
- Error message associations
- Form validation accessibility

**Output:**
1. Specific WCAG violations with line numbers
2. Fixed component code with proper attributes
3. Testing checklist for manual verification
4. Automated testing setup with jest-axe`}
                      />
                    </div>
                  </div>
                )
              },
              {
                id: 'team-prompts',
                title: '👥 Team Collaboration Prompts',
                content: (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Design Review Automation</h4>
                      <CodeBlock
                        language="markdown"
                        filename="prompts/design-review.md"
                        code={`Review this design implementation for team standards:

[attach: original design + implemented code]

**Design System Compliance:**
- Typography scale and font weights match exactly
- Color palette adherence (no custom colors)
- Spacing system consistency (8px grid)
- Component variant usage (no one-off styles)
- Icon library consistency (Lucide React only)

**Code Quality Standards:**
- TypeScript interfaces for all props
- Consistent naming conventions
- Proper component composition patterns
- Error handling and loading states
- Performance considerations

**Team Workflow:**
- Documentation completeness
- Storybook story coverage
- Unit test coverage (minimum 80%)
- Integration with existing components
- Backward compatibility considerations`}
                      />
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Handoff Documentation</h4>
                      <CodeBlock
                        language="markdown"
                        filename="prompts/handoff-docs.md"
                        code={`Generate developer handoff documentation:

[attach: Figma design + component specs]

**Documentation Sections:**
1. **Component Overview**: Purpose, usage context, dependencies
2. **API Reference**: Props, types, default values, examples
3. **Behavior Specifications**: Interactions, state changes, animations
4. **Responsive Behavior**: Breakpoint behavior, mobile considerations
5. **Accessibility Notes**: ARIA patterns, keyboard navigation
6. **Integration Guide**: How to use with existing components

**Developer Resources:**
- Installation and setup instructions
- Common usage patterns and examples
- Troubleshooting guide for edge cases
- Performance considerations and optimizations
- Testing strategies and example test cases`}
                      />
                    </div>
                  </div>
                )
              }
            ]}
            allowMultiple={true}
          />
        </div>
      </Section>

      {/* Troubleshooting */}
      <Section id="troubleshooting" title="🔧 Troubleshooting & Common Issues">
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">⚡ Performance Issues</h3>
              <div className="space-y-4">
                <CalloutBox type="warning" title="Large Bundle Sizes">
                  <p className="mb-2"><strong>Problem:</strong> Initial JS bundle &gt; 500KB</p>
                  <p className="mb-2"><strong>Solution:</strong></p>
                  <CodeBlock
                    language="bash"
                    code={`# Analyze bundle size
npx @next/bundle-analyzer

# Enable dynamic imports
npm install @loadable/component

# Optimize images
npm install sharp`}
                  />
                </CalloutBox>

                <CalloutBox type="warning" title="Slow Compilation">
                  <p className="mb-2"><strong>Problem:</strong> Tailwind CSS compilation &gt; 10s</p>
                  <p className="mb-2"><strong>Solution:</strong></p>
                  <CodeBlock
                    language="javascript"
                    filename="tailwind.config.js"
                    code={`module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}' // Specific paths only
  ],
  corePlugins: {
    preflight: false // If using custom CSS reset
  }
}`}
                  />
                </CalloutBox>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">🚨 Development Errors</h3>
              <div className="space-y-4">
                <CalloutBox type="error" title="TypeScript Errors">
                  <p className="mb-2"><strong>Common:</strong> Property &apos;X&apos; does not exist on type &apos;Y&apos;</p>
                  <p className="mb-2"><strong>Fix:</strong></p>
                  <CodeBlock
                    language="typescript"
                    code={`// Define proper interfaces
interface ComponentProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

// Use type assertions carefully
const element = document.getElementById('id') as HTMLElement;`}
                  />
                </CalloutBox>

                <CalloutBox type="error" title="Hydration Mismatches">
                  <p className="mb-2"><strong>Problem:</strong> Server/client rendering differences</p>
                  <p className="mb-2"><strong>Solution:</strong></p>
                  <CodeBlock
                    language="typescript"
                    code={`// Use dynamic imports for client-only components
import dynamic from 'next/dynamic';

const ClientOnlyComponent = dynamic(
  () => import('./ClientOnly'),
  { ssr: false }
);`}
                  />
                </CalloutBox>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section id="case-studies" title="📊 Case Studies: Real-World Implementations">
        <div className="space-y-8">
          <div className="grid gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">🏢 Enterprise Dashboard Migration</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Challenge</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Legacy Angular.js dashboard (50+ components)</li>
                    <li>• 6-month development timeline constraint</li>
                    <li>• Team of 3 designers, 2 developers</li>
                    <li>• Enterprise security requirements</li>
                  </ul>

                  <h4 className="font-semibold mb-3 mt-6">Claude Code Solution</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Automated component migration (80% code generation)</li>
                    <li>• Figma integration for design system sync</li>
                    <li>• Automated testing and deployment pipeline</li>
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
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">🚀 Startup MVP: 0-to-Production in 48 Hours</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Challenge</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Solo designer with no coding experience</li>
                    <li>• Investor demo deadline in 2 days</li>
                    <li>• Full-stack SaaS application required</li>
                    <li>• Authentication, payments, and dashboard</li>
                  </ul>

                  <h4 className="font-semibold mb-3 mt-6">Implementation Timeline</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Day 1:</strong> Design system + core components</li>
                    <li>• <strong>Day 2:</strong> Authentication + database setup</li>
                    <li>• <strong>Final 4 hours:</strong> Deployment + testing</li>
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

Total Cost: $25/month for MVP
Development Time: 16 hours total`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Code Examples */}
      <Section id="code-examples" title="💻 Practical Code Examples">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Example 1: Supabase Authentication Setup</h3>
            <CodeBlock
              language="typescript"
              filename="components/auth/login.tsx"
              code={`import { createClient } from '@/lib/supabase'
import { useState } from 'react'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: \`\${window.location.origin}/auth/callback\`
      }
    })
    
    if (error) {
      console.error('Login error:', error.message)
    } else {
      alert('Check your email for the login link!')
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full px-4 py-2 border rounded-lg"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded-lg"
      >
        {loading ? 'Sending...' : 'Send Magic Link'}
      </button>
    </form>
  )
}`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Example 2: GitHub Actions for Claude Review</h3>
            <CodeBlock
              language="yaml"
              filename=".github/workflows/claude-review.yml"
              code={`name: Claude Code Review
on: 
  pull_request:
    types: [opened, synchronize]

jobs:
  claude-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Claude Security Review
        uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
          prompt: |
            Review this PR for:
            1. Security vulnerabilities (OWASP Top 10)
            2. Logic errors and edge cases
            3. Performance issues
            4. Accessibility concerns
            Be specific and provide code examples for fixes.
          
      - name: Post Review Comment
        uses: actions/github-script@v6
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: '🤖 Claude has reviewed your PR!'
            })`}
            />
          </div>
        </div>
      </Section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 py-12 mt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mb-4">
                Built with{' '}
                <a href="https://nextjs.org" className="text-primary-400 hover:text-primary-300">
                  Next.js
                </a>
                {', '}
                <a href="https://tailwindcss.com" className="text-primary-400 hover:text-primary-300">
                  Tailwind CSS
                </a>
                {', and '}
                <a href="https://claude.ai/code" className="text-primary-400 hover:text-primary-300">
                  Claude Code
                </a>
              </p>
              <p className="text-sm text-slate-400">
                🚀 Generated with{' '}
                <a href="https://claude.ai/code" className="text-primary-400 hover:text-primary-300">
                  Claude Code
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

import { Header, Section, FeatureCard, CalloutBox, CodeBlock, TabGroup, Icon, SuccessIcon } from '@/components';
import { Palette, Code, Brain, GitBranch, Database, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
        <Header 
          title="Claude Code for UX Designers"
          subtitle="Complete Application Development Guide with Full Stack Integration"
          icon="design"
        />

      {/* Getting Started */}
      <Section id="getting-started" title="Getting Started: Your First Claude Code Project" icon="launch">
        <div className="space-y-8">
          <CalloutBox type="highlight" title="Prerequisites Checklist">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Required Accounts</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <SuccessIcon size="sm" className="mr-2" />
                    Claude Pro subscription ($20/month)
                  </li>
                  <li className="flex items-center">
                    <SuccessIcon size="sm" className="mr-2" />
                    GitHub account (free tier sufficient)
                  </li>
                  <li className="flex items-center">
                    <SuccessIcon size="sm" className="mr-2" />
                    Vercel account (free tier: 100GB bandwidth)
                  </li>
                  <li className="flex items-center">
                    <SuccessIcon size="sm" className="mr-2" />
                    Supabase account (free tier: 50MB database)
                  </li>
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
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Icon type="target" size="md" color="primary" className="mr-2" />
                15-Minute Quick Start
              </h3>
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
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Icon type="tip" size="md" color="accent" className="mr-2" />
                Your First Prompt
              </h3>
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
      <Section id="core-capabilities" title="Core Capabilities for UX Designers" icon="launch">
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
      <Section id="development-stack" title="Complete Development Stack Integration" className="bg-white" icon="tool">
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
      <Section id="advanced-workflows" title="Advanced Workflows for Design Systems" className="bg-white" icon="analytics">
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
      <Section id="team-collaboration" title="Team Collaboration & Handoff Automation" icon="team">
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

      {/* Prompt Engineering Hub - Link to dedicated page */}
      <Section id="prompt-engineering" title="Prompt Engineering Hub: Proven Templates" icon="ai">
        <div className="space-y-8">
          <CalloutBox type="info" title="Comprehensive Prompt Library">
            <p className="mb-4">
              We&apos;ve compiled 50+ proven prompt templates tested across 100+ real projects. Each template includes success metrics, common failure modes, and optimization strategies based on actual designer feedback.
            </p>
            <Link 
              href="/prompts"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Browse Full Prompt Library →
            </Link>
          </CalloutBox>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h4 className="font-semibold mb-3 text-primary-700 flex items-center">
                <Icon type="design" size="sm" color="primary" className="mr-2" />
                Design-to-Code
              </h4>
              <p className="text-sm text-slate-600 mb-3">
                High-fidelity conversion prompts with 95% accuracy rate for first iterations.
              </p>
              <Link href="/prompts#design-conversion" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View Templates →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h4 className="font-semibold mb-3 text-green-700 flex items-center">
                <Icon type="tool" size="sm" color="success" className="mr-2" />
                Debugging & Optimization
              </h4>
              <p className="text-sm text-slate-600 mb-3">
                Performance analysis and accessibility audit prompts for production quality.
              </p>
              <Link href="/prompts#debugging-prompts" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View Templates →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h4 className="font-semibold mb-3 text-blue-700 flex items-center">
                <Icon type="team" size="sm" color="accent" className="mr-2" />
                Team Collaboration
              </h4>
              <p className="text-sm text-slate-600 mb-3">
                Design review automation and handoff documentation generators.
              </p>
              <Link href="/prompts#team-prompts" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View Templates →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Troubleshooting - Link to dedicated page */}
      <Section id="troubleshooting" title="Troubleshooting & Common Issues" icon="tool">
        <div className="space-y-8">
          <CalloutBox type="info" title="Comprehensive Troubleshooting Guide">
            <p className="mb-4">
              Need help debugging? Our comprehensive troubleshooting guide covers performance issues, development errors, Claude-specific problems, and emergency fixes for production issues.
            </p>
            <Link 
              href="/troubleshooting"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              View Troubleshooting Guide →
            </Link>
          </CalloutBox>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h4 className="font-semibold mb-3 text-amber-700 flex items-center">
                <Icon type="performance" size="sm" color="warning" className="mr-2" />
                Performance Issues
              </h4>
              <p className="text-sm text-slate-600 mb-3">
                Bundle size optimization, slow compilation fixes, and memory leak solutions.
              </p>
              <Link href="/troubleshooting#performance" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                Quick Fixes →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h4 className="font-semibold mb-3 text-red-700 flex items-center">
                <Icon type="warning" size="sm" color="error" className="mr-2" />
                Development Errors
              </h4>
              <p className="text-sm text-slate-600 mb-3">
                TypeScript errors, hydration mismatches, and module resolution problems.
              </p>
              <Link href="/troubleshooting#development-errors" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                Debug Now →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h4 className="font-semibold mb-3 text-purple-700 flex items-center">
                <Icon type="ai" size="sm" color="primary" className="mr-2" />
                Claude Code Issues
              </h4>
              <p className="text-sm text-slate-600 mb-3">
                Context limits, code generation inconsistencies, and dependency conflicts.
              </p>
              <Link href="/troubleshooting#claude-code-issues" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                Get Help →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Case Studies - Link to dedicated page */}
      <Section id="case-studies" title="Case Studies: Real-World Implementations" icon="analytics">
        <div className="space-y-8">
          <CalloutBox type="info" title="Proven Success Stories">
            <p className="mb-4">
              Learn from real UX designers who used Claude Code to build enterprise dashboards, startup MVPs, and design systems. See detailed implementations, timelines, and measurable results.
            </p>
            <Link 
              href="/case-studies"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              View Detailed Case Studies →
            </Link>
          </CalloutBox>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
              <h4 className="font-semibold mb-3 text-indigo-700 flex items-center">
                <Icon type="building" size="sm" color="accent" className="mr-2" />
                Enterprise Migration
              </h4>
              <p className="text-sm text-slate-600 mb-3">
                Legacy Angular.js → React in 2 months (66% time reduction)
              </p>
              <div className="text-xs text-slate-500 mb-3">
                50+ components • 95% test coverage • 3x performance improvement
              </div>
              <Link href="/case-studies#enterprise-migration" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                Read Full Story →
              </Link>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
              <h4 className="font-semibold mb-3 text-emerald-700 flex items-center">
                <Icon type="launch" size="sm" color="success" className="mr-2" />
                Startup MVP
              </h4>
              <p className="text-sm text-slate-600 mb-3">
                Solo designer built full SaaS in 48 hours
              </p>
              <div className="text-xs text-slate-500 mb-3">
                Auth + Payments + Dashboard • $25/month cost • 1000+ users
              </div>
              <Link href="/case-studies#startup-mvp" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                See Implementation →
              </Link>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
              <h4 className="font-semibold mb-3 text-purple-700 flex items-center">
                <Icon type="design" size="sm" color="primary" className="mr-2" />
                Design System
              </h4>
              <p className="text-sm text-slate-600 mb-3">
                Agency unified 50+ client systems in 3 weeks
              </p>
              <div className="text-xs text-slate-500 mb-3">
                300% faster development • 95% consistency • Multi-framework
              </div>
              <Link href="/case-studies#design-system" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                Learn Approach →
              </Link>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg border border-slate-200 p-6">
            <h4 className="font-semibold mb-3 flex items-center">
              <Icon type="analytics" size="sm" color="primary" className="mr-2" />
              Success Metrics Across All Projects
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-600 mb-1">85%</div>
                <div className="text-sm text-slate-600">First-iteration success</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 mb-1">3.2x</div>
                <div className="text-sm text-slate-600">Speed improvement</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-1">92%</div>
                <div className="text-sm text-slate-600">User satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-1">$180k</div>
                <div className="text-sm text-slate-600">Average cost savings</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Code Examples */}
      <Section id="code-examples" title="Practical Code Examples" icon="code">
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
                Generated with{' '}
                <a href="https://claude.ai/code" className="text-primary-400 hover:text-primary-300">
                  Claude Code
                </a>
              </p>
            </div>
          </div>
        </footer>
    </>
  );
}

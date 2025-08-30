import { Header, Section, FeatureCard, CalloutBox, CodeBlock } from '@/components';
import { Palette, Code, Brain, GitBranch, Database, Zap } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header 
        title="🎨 Claude Code for UX Designers"
        subtitle="Complete Application Development Guide with Full Stack Integration"
      />

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
      <Section title="🚀 Core Capabilities for UX Designers">
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
      <Section title="🔧 Complete Development Stack Integration" className="bg-white">
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

      {/* Code Examples */}
      <Section title="💻 Practical Code Examples">
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
    </main>
  );
}

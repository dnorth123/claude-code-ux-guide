import { Section, CalloutBox, CodeBlock } from '@/components';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Troubleshooting Guide | Claude Code for UX Designers',
  description: 'Comprehensive troubleshooting guide for UX designers using Claude Code. Solutions for performance issues, development errors, and common problems.',
  keywords: 'Claude Code troubleshooting, UX design debugging, React performance, TypeScript errors, Next.js issues',
};

export default function TroubleshootingPage() {
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
                  Troubleshooting
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <Section id="troubleshooting" title="🔧 Troubleshooting & Common Issues">
        <div className="space-y-8">
          <CalloutBox type="info" title="Quick Help">
            <p>
              Found a specific issue? Use Cmd+F (Ctrl+F) to search this page, or check our <strong>Common Solutions</strong> section below for the fastest fixes.
            </p>
          </CalloutBox>

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

                <CalloutBox type="warning" title="Memory Leaks in Components">
                  <p className="mb-2"><strong>Problem:</strong> Browser memory usage increases over time</p>
                  <p className="mb-2"><strong>Solution:</strong></p>
                  <CodeBlock
                    language="typescript"
                    code={`useEffect(() => {
  const subscription = someDataStream.subscribe(data => {
    setData(data);
  });

  // Always cleanup subscriptions
  return () => {
    subscription.unsubscribe();
  };
}, []);

// Cleanup intervals and timeouts
useEffect(() => {
  const interval = setInterval(() => {
    // Do something
  }, 1000);

  return () => clearInterval(interval);
}, []);`}
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
const element = document.getElementById('id') as HTMLElement;

// Or use type guards
const element = document.getElementById('id');
if (element) {
  // TypeScript knows element is not null here
  element.focus();
}`}
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
);

// Or use useEffect for client-only code
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) {
  return null; // or loading spinner
}

return <ClientOnlyContent />;`}
                  />
                </CalloutBox>

                <CalloutBox type="error" title="Module Resolution Errors">
                  <p className="mb-2"><strong>Problem:</strong> Cannot find module &apos;@/components&apos;</p>
                  <p className="mb-2"><strong>Fix:</strong></p>
                  <CodeBlock
                    language="json"
                    filename="tsconfig.json"
                    code={`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"]
    }
  }
}`}
                  />
                </CalloutBox>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6">🔍 Claude Code Specific Issues</h3>
            <div className="space-y-6">
              <CalloutBox type="warning" title="Claude Context Limits">
                <p className="mb-2"><strong>Problem:</strong> Claude stops responding or loses context</p>
                <p className="mb-4"><strong>Solutions:</strong></p>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Break down large requests:</strong> Split complex tasks into smaller, focused prompts</li>
                  <li>• <strong>Use the /save-state command:</strong> Preserve context before hitting limits</li>
                  <li>• <strong>Reference previous work:</strong> Start new conversations with &ldquo;continuing from...&rdquo; context</li>
                  <li>• <strong>Focus prompts:</strong> Be specific about what files/sections you want Claude to focus on</li>
                </ul>
              </CalloutBox>

              <CalloutBox type="error" title="Code Generation Inconsistencies">
                <p className="mb-2"><strong>Problem:</strong> Generated code doesn&apos;t match existing patterns</p>
                <p className="mb-4"><strong>Solutions:</strong></p>
                <CodeBlock
                  language="markdown"
                  code={`# Always provide context in your prompts:

"Following the existing patterns in /components/Button.tsx, 
create a similar component for [specific use case]. 

Maintain the same:
- TypeScript interface structure  
- Variant system approach
- Tailwind CSS patterns
- Accessibility attributes

Here's the existing Button component for reference:
[paste relevant code]"`}
                />
              </CalloutBox>

              <CalloutBox type="warning" title="Dependency Conflicts">
                <p className="mb-2"><strong>Problem:</strong> Package versions conflict or features don&apos;t work</p>
                <p className="mb-2"><strong>Solution:</strong></p>
                <CodeBlock
                  language="bash"
                  code={`# Always check compatibility first
npm ls # View current package tree

# Clean install if conflicts exist
rm -rf node_modules package-lock.json
npm install

# Check for peer dependency warnings
npm install --legacy-peer-deps # If needed

# Use specific versions that work together
npm install react@18.2.0 @types/react@18.2.0`}
                />
              </CalloutBox>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6">📊 Debugging Strategies</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h4 className="font-semibold mb-3 text-blue-700">🔍 Step-by-Step Debug</h4>
                <ol className="text-sm text-slate-600 space-y-1">
                  <li>1. Reproduce the issue consistently</li>
                  <li>2. Check browser console for errors</li>
                  <li>3. Verify component props and state</li>
                  <li>4. Test with simplified version</li>
                  <li>5. Ask Claude for specific analysis</li>
                </ol>
              </div>
              
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h4 className="font-semibold mb-3 text-green-700">⚡ Performance Debug</h4>
                <ol className="text-sm text-slate-600 space-y-1">
                  <li>1. Use React DevTools Profiler</li>
                  <li>2. Check Network tab for slow requests</li>
                  <li>3. Analyze bundle size with analyzer</li>
                  <li>4. Test on slower devices/connections</li>
                  <li>5. Implement performance monitoring</li>
                </ol>
              </div>
              
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h4 className="font-semibold mb-3 text-purple-700">🎯 Claude Debug</h4>
                <ol className="text-sm text-slate-600 space-y-1">
                  <li>1. Provide specific error messages</li>
                  <li>2. Include relevant code context</li>
                  <li>3. Describe expected vs actual behavior</li>
                  <li>4. Mention your environment/setup</li>
                  <li>5. Ask for step-by-step solutions</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6">🆘 Emergency Fixes</h3>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-semibold mb-3 text-red-800">Production Down? Quick Fixes:</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-red-700 mb-1">Build failing:</p>
                  <code className="text-sm bg-red-100 px-2 py-1 rounded">npm run build --verbose</code>
                  <span className="text-sm text-red-600 ml-2">Check the full error output</span>
                </div>
                <div>
                  <p className="font-medium text-red-700 mb-1">Vercel deployment stuck:</p>
                  <code className="text-sm bg-red-100 px-2 py-1 rounded">git revert HEAD~1</code>
                  <span className="text-sm text-red-600 ml-2">Roll back to last working version</span>
                </div>
                <div>
                  <p className="font-medium text-red-700 mb-1">TypeScript blocking deployment:</p>
                  <code className="text-sm bg-red-100 px-2 py-1 rounded">{"// @ts-ignore"}</code>
                  <span className="text-sm text-red-600 ml-2">Temporary fix above problematic lines</span>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Guide */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <CalloutBox type="highlight" title="Still Need Help?">
              <p className="mb-4">
                Can&apos;t find your specific issue? Try our comprehensive prompt templates for debugging assistance, or return to the main guide for more context.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/prompts#debugging-prompts" 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Browse Debugging Prompts →
                </Link>
                <Link 
                  href="/#case-studies" 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  View Case Studies →
                </Link>
              </div>
            </CalloutBox>
          </div>
        </div>
      </Section>
    </>
  );
}
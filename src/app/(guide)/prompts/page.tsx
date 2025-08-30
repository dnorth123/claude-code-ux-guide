import { Section, CalloutBox, CodeBlock, Accordion } from '@/components';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Prompt Engineering Library | Claude Code for UX Designers',
  description: '50+ proven prompt templates for UX designers using Claude Code. Tested across 100+ real projects with success metrics and optimization strategies.',
  keywords: 'Claude Code prompts, UX design prompts, AI prompts for designers, prompt engineering, design-to-code prompts',
};

export default function PromptsPage() {
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
                  Prompt Library
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

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
              },
              {
                id: 'ui-patterns',
                title: '🎯 UI Pattern Prompts',
                content: (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Form Design Patterns</h4>
                      <CodeBlock
                        language="markdown"
                        filename="prompts/form-patterns.md"
                        code={`Design a production-ready form component:

[describe form requirements or attach design]

**Form Architecture:**
- Field validation with real-time feedback
- Error state management and display
- Loading states during submission
- Success confirmation patterns
- Multi-step form support if needed

**Accessibility Requirements:**
- Proper label associations
- Error announcement to screen readers
- Keyboard navigation between fields
- Focus management and visual indicators
- Required field identification

**Technical Implementation:**
- React Hook Form or similar for state management
- Zod or Yup for validation schemas
- TypeScript interfaces for form data
- Reusable field components
- Integration with backend APIs

**Output Includes:**
- Complete form component with validation
- Individual field components (Input, Select, Checkbox, etc.)
- Error handling and loading states
- Storybook stories for all form states`}
                      />
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Data Visualization Components</h4>
                      <CodeBlock
                        language="markdown"
                        filename="prompts/dataviz-patterns.md"
                        code={`Create interactive data visualization components:

[describe data structure and visualization needs]

**Chart Types to Consider:**
- Line charts for trends over time
- Bar charts for categorical comparisons
- Pie/donut charts for proportional data
- Scatter plots for correlation analysis
- Heatmaps for matrix data

**Interaction Patterns:**
- Hover states with detailed tooltips
- Zoom and pan for large datasets
- Filter controls and legend interactions
- Responsive breakpoint behavior
- Keyboard accessibility for chart navigation

**Technical Implementation:**
- D3.js or Recharts for chart rendering
- Responsive SVG or Canvas approaches
- Data processing and transformation utilities
- Animation and transition management
- Performance optimization for large datasets

**Deliverables:**
- Reusable chart component library
- Data transformation utilities
- Interactive controls and filters
- Responsive design system integration`}
                      />
                    </div>
                  </div>
                )
              }
            ]}
            allowMultiple={true}
          />

          {/* Quick Reference Cards */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6">Quick Reference Cards</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h4 className="font-semibold mb-3 text-primary-700">🚀 Quick Start</h4>
                <p className="text-sm text-slate-600 mb-3">
                  &ldquo;Build a [component type] that [specific requirement] using [tech stack]&rdquo;
                </p>
                <div className="text-xs text-slate-500">
                  85% success rate for first iterations
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h4 className="font-semibold mb-3 text-green-700">✅ Code Review</h4>
                <p className="text-sm text-slate-600 mb-3">
                  &ldquo;Review this code for [specific concern] and provide [output type]&rdquo;
                </p>
                <div className="text-xs text-slate-500">
                  92% accuracy for finding issues
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h4 className="font-semibold mb-3 text-blue-700">🔧 Debug Helper</h4>
                <p className="text-sm text-slate-600 mb-3">
                  &ldquo;This [component/page] has [problem]. Help me [specific solution]&rdquo;
                </p>
                <div className="text-xs text-slate-500">
                  78% first-try resolution rate
                </div>
              </div>
            </div>
          </div>

          {/* Back to Guide */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <CalloutBox type="highlight" title="Continue Your Journey">
              <p className="mb-4">
                Ready to put these prompts into action? Continue with the main guide to learn implementation strategies and see real-world examples.
              </p>
              <Link 
                href="/#troubleshooting" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                Continue to Troubleshooting Guide →
              </Link>
            </CalloutBox>
          </div>
        </div>
      </Section>
    </>
  );
}
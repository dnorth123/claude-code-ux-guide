'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Menu, X } from 'lucide-react';

interface NavigationSection {
  id: string;
  title: string;
  href?: string;
  subsections?: { id: string; title: string }[];
}

interface StickyNavigationProps {
  sections: NavigationSection[];
  className?: string;
}

export function StickyNavigation({ sections, className = '' }: StickyNavigationProps) {
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setIsScrolled(scrollTop > 100);

      // Update active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      })).filter(item => item.element);

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string, href?: string) => {
    // If it's an external link, navigate to it
    if (href && href !== '/') {
      setIsMobileMenuOpen(false);
      return; // Let the Link component handle navigation
    }
    
    // Otherwise, scroll to section on current page
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-200">
        <div 
          className="h-full bg-primary-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky navigation */}
      <nav className={`
        fixed top-1 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200 transition-all duration-200
        ${isScrolled ? 'shadow-sm' : 'border-transparent'}
        ${className}
      `}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => {
                const isActive = (section.href && pathname === section.href) || activeSection === section.id;
                
                if (section.href && section.href !== '/') {
                  return (
                    <Link
                      key={section.id}
                      href={section.href}
                      className={`
                        text-sm font-medium transition-colors duration-200 hover:text-primary-600 relative
                        ${isActive ? 'text-primary-600' : 'text-slate-600'}
                      `}
                    >
                      {section.title}
                      {isActive && (
                        <div className="absolute -bottom-3 left-0 right-0 h-0.5 bg-primary-600 rounded-full" />
                      )}
                    </Link>
                  );
                }
                
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id, section.href)}
                    className={`
                      text-sm font-medium transition-colors duration-200 hover:text-primary-600 relative
                      ${isActive ? 'text-primary-600' : 'text-slate-600'}
                    `}
                  >
                    {section.title}
                    {isActive && (
                      <div className="absolute -bottom-3 left-0 right-0 h-0.5 bg-primary-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center justify-between w-full">
              <span className="text-sm font-medium text-slate-900">
                {sections.find(s => s.id === activeSection)?.title || 'Navigate'}
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-primary-600 transition-colors"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
                aria-controls="mobile-navigation-menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Progress indicator (desktop) */}
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-xs text-slate-500">
                {Math.round(scrollProgress)}%
              </span>
              <div className="w-20 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary-600 transition-all duration-150 ease-out rounded-full"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMobileMenuOpen && (
          <div id="mobile-navigation-menu" className="md:hidden border-t border-slate-200 bg-white">
            <div className="max-w-4xl mx-auto px-4 py-3">
              <div className="space-y-2">
                {sections.map((section) => {
                  const isActive = (section.href && pathname === section.href) || activeSection === section.id;
                  
                  if (section.href && section.href !== '/') {
                    return (
                      <Link
                        key={section.id}
                        href={section.href}
                        className={`
                          w-full block px-3 py-2 rounded-md text-sm font-medium transition-colors
                          ${isActive
                            ? 'bg-primary-50 text-primary-700'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                          }
                        `}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="flex items-center justify-between">
                          <span>{section.title}</span>
                          {isActive && (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </div>
                      </Link>
                    );
                  }
                  
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id, section.href)}
                      className={`
                        w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors
                        ${isActive
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <span>{section.title}</span>
                        {isActive && (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding under sticky nav */}
      <div className="h-16" />
    </>
  );
}
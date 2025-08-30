'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, allowMultiple = false, className = '' }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    if (allowMultiple) {
      setOpenItems(prev => 
        prev.includes(itemId) 
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId]
      );
    } else {
      setOpenItems(prev => 
        prev.includes(itemId) ? [] : [itemId]
      );
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        
        return (
          <div key={item.id} className="border border-slate-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-4 py-3 text-left flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors"
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <span className="font-medium text-slate-900">{item.title}</span>
              <ChevronDown 
                className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
                  isOpen ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            
            {isOpen && (
              <div 
                id={`accordion-content-${item.id}`}
                className="px-4 py-4 bg-white border-t border-slate-200"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
'use client';

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showCopy?: boolean;
  className?: string;
}

export function CodeBlock({ 
  code, 
  language = 'typescript', 
  filename,
  showCopy = true,
  className = '' 
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };

  return (
    <div className={`bg-slate-900 rounded-lg overflow-hidden shadow-lg ${className}`}>
      {/* Header */}
      {(filename || showCopy) && (
        <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
          {filename && (
            <span className="text-sm font-mono text-slate-300">{filename}</span>
          )}
          
          {showCopy && (
            <button
              onClick={handleCopy}
              className="flex items-center space-x-2 px-3 py-1.5 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
              title="Copy to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          )}
        </div>
      )}

      {/* Code */}
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            margin: 0,
            padding: '1.5rem',
            background: 'transparent',
            fontSize: '0.875rem',
            lineHeight: '1.6',
          }}
          showLineNumbers={false}
          wrapLines={false}
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
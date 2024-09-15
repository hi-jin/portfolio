'use client'

import { useEffect, useRef } from 'react';

function processMarkdownContent(content: string) {
  const sections = content.split('<hr>');
  return sections.map((section, index) => (
    `<div class="section section-${index % 2 === 0 ? 'even' : 'odd'}">
      <div class="max-w-4xl mx-auto px-4 py-8">
        ${section}
      </div>
    </div>`
  )).join('');
}

export default function PostContent({ contentHtml }: { contentHtml: string }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const processedContent = processMarkdownContent(contentHtml);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = processedContent;
    }
  }, [processedContent]);

  return (
    <div 
      ref={contentRef}
      className="markdown-content prose dark:prose-invert w-full"
    />
  );
}
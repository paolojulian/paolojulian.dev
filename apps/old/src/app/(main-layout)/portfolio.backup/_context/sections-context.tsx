'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

type Sections = 'hero' | 'about' | 'services' | 'portfolio' | 'contact';

export const SECTIONS: Sections[] = [
  'hero',
  'about',
  'services',
  'portfolio',
  'contact',
];

interface ISectionsContext {
  activeSection: Sections;
}

const SectionsContext = createContext<ISectionsContext>({
  activeSection: 'hero',
});

export function SectionsProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<Sections>('hero');

  useEffect(() => {
    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as Sections);
        }
      });
    };

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
    });
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <SectionsContext.Provider
      value={{
        activeSection,
      }}
    >
      {children}
    </SectionsContext.Provider>
  );
}

export const useSections = () => useContext(SectionsContext);

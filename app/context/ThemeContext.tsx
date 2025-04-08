'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Use state but don't set initial value - we'll do that in useEffect
  const [theme, setTheme] = useState<Theme | null>(null);
  const [mounted, setMounted] = useState(false);

  // Initialize theme
  useEffect(() => {
    // Get stored theme from localStorage if available
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    // Otherwise check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Set the active theme
    const activeTheme = storedTheme || (prefersDark ? 'dark' : 'light');
    
    console.log('Initial theme setup:', { storedTheme, prefersDark, activeTheme });
    
    setTheme(activeTheme);
    
    // Apply the theme to the document
    if (activeTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    console.log('Toggle theme called, current theme:', theme);
    
    if (theme === null) return;
    
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log('Setting new theme:', newTheme);
    
    // Update state
    setTheme(newTheme);
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update DOM
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    console.log('After toggle, dark class present:', document.documentElement.classList.contains('dark'));
  };

  // Use null as children during SSR to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ 
      theme: theme || 'light', // Provide a fallback for type safety
      toggleTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 
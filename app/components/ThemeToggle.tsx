'use client'

import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
      aria-label="테마 전환"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
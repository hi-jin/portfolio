'use client'

import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="z-50 p-6 rounded-full dark:bg-gray-700 shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 fixed bottom-6 right-6"
      aria-label="테마 전환"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
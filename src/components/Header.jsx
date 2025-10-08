import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Hello World
          </span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <a href="#home" className="hover:text-neutral-900 dark:hover:text-white transition">Home</a>
          <a href="#features" className="hover:text-neutral-900 dark:hover:text-white transition">Features</a>
          <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}

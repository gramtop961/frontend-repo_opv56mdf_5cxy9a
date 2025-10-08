export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 bg-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-28 text-center relative">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-600 dark:from-white dark:via-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent">
          Hello, World!
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          A minimal starter page built with Vite, React, and Tailwind CSS. Clean, fast, and delightful.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <a
            href="#features"
            className="inline-flex items-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 text-sm font-medium shadow hover:opacity-90 transition"
          >
            Explore Features
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

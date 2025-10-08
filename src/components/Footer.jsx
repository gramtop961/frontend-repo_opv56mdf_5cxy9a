export default function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Built with ❤️ using React + Vite + Tailwind
          </p>
          <a
            href="mailto:hello@example.com"
            className="text-sm text-neutral-700 dark:text-neutral-200 hover:underline"
          >
            hello@example.com
          </a>
        </div>
      </div>
    </footer>
  );
}

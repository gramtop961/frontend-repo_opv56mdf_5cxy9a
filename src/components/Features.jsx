import { Star, Zap, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Beautiful by default',
    description:
      'Crafted with Tailwind CSS and modern typography for an elegant, readable UI out of the box.',
  },
  {
    icon: Zap,
    title: 'Fast and responsive',
    description:
      'Powered by Vite and React for instant reloads and smooth interactions across devices.',
  },
  {
    icon: ShieldCheck,
    title: 'Production-ready',
    description:
      'A clean structure with reusable components you can extend into your next project.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white text-center">
          Why you’ll love this starter
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/70 dark:bg-neutral-900/70 backdrop-blur"
            >
              <div className="h-10 w-10 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

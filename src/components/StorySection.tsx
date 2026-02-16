interface StorySectionProps {
  step: string;
  title: string;
  children: React.ReactNode;
  isHighlight?: boolean;
}

export const StorySection = ({ step, title, children, isHighlight }: StorySectionProps) => (
  <div className={`py-12 border-l-4 pl-6 md:pl-10 mb-8 ${isHighlight ? 'border-(--color-mortadela)' : 'border-zinc-700'}`}>
    <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">{step}</span>
    <h2 className="text-3xl font-black mb-4 uppercase italic">{title}</h2>
    <div className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
      {children}
    </div>
  </div>
);
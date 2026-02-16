import { motion } from 'framer-motion';

interface Props {
  step: string;
  title: string;
  children: React.ReactNode;
  emoji: string;
}

export const DynamicSection = ({ step, title, children, emoji }: Props) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="mb-24 relative"
  >
    <div className="absolute -left-12 top-0 text-4xl opacity-20">{emoji}</div>
    <span className="text-(--color-mortadela) font-mono text-sm tracking-widest uppercase">{step}</span>
    <h2 className="text-4xl font-black mt-2 mb-6 uppercase italic leading-none">{title}</h2>
    <div className="text-zinc-400 text-xl leading-relaxed border-l-2 border-zinc-800 pl-6">
      {children}
    </div>
  </motion.div>
);
interface SupportMessageProps {
  name: string;
  message: string;
  screenshotUrl?: string; // Link para o print que você salvou
}

export const SupportMessage = ({ name, message, screenshotUrl }: SupportMessageProps) => (
  <div className="group bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-10 rounded-full bg-(--color-gold) flex items-center justify-center text-black font-black">
        {name[0]}
      </div>
      <div>
        <h4 className="font-bold text-sm uppercase tracking-tighter">{name}</h4>
        <span className="text-[10px] text-zinc-500 uppercase">Apoiador Oficial</span>
      </div>
    </div>
    
    <p className="text-zinc-300 italic mb-4 leading-relaxed">"{message}"</p>

    {screenshotUrl && (
      <div className="overflow-hidden rounded-lg border border-white/5">
        <img 
          src={screenshotUrl} 
          alt="Comprovante de Apoio" 
          className="w-full grayscale hover:grayscale-0 transition-all duration-700 opacity-50 hover:opacity-100"
        />
      </div>
    )}
  </div>
);
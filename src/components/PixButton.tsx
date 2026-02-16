import { useState } from 'react';

export const PixButton = ({ pixKey }: { pixKey: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-sm mx-auto p-6 bg-white rounded-xl shadow-2xl">
      <p className="text-black text-xs font-black uppercase mb-4 tracking-widest text-center">
        {copied ? "✅ Chave Copiada!" : "Toque abaixo para copiar a chave PIX"}
      </p>
      
      <button 
        onClick={handleCopy}
        className={`w-full py-4 rounded-lg font-black text-xl transition-all duration-300 ${
          copied 
          ? 'bg-green-500 text-white scale-95' 
          : 'bg-black text-white hover:bg-(--color-rage) active:scale-95'
        }`}
      >
        {pixKey}
      </button>

      <div className="mt-4 flex items-center justify-center gap-2 text-zinc-500 text-xs font-medium">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h8m0 0v8m0-8l-8 8-4-4" />
        </svg>
        <span>Clique para copiar e colar no seu banco</span>
      </div>
    </div>
  );
};
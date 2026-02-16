import { motion } from 'framer-motion';
import { PixButton } from './components/PixButton';
import { DynamicSection } from './components/DynamicSection';

export default function App() {
  return (
    <div className="min-h-screen bg-(--color-carnival-black) text-white overflow-x-hidden selection:bg-(--color-mortadela)">

      {/* Background Decorativo - A "Zica" em código */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none font-mono text-[10px] overflow-hidden leading-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i}>CADE MEU CAPACETE? • CADE MEU X-TUDO? • MORTADELA DE 25 REAIS • </p>
        ))}
      </div>

      <header className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-9xl font-black mb-4 tracking-tighter uppercase italic">
            Manual de como <br />
            <span className="text-(--color-mortadela)">Ser Otário</span> no Carnaval
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto uppercase tracking-widest">
            Um relato real sobre dois San Marinos velhos e uma mortadela superfaturada.
          </p>
        </motion.div>
      </header>

      <main className="max-w-3xl mx-auto px-6">

        <DynamicSection step="Passo 01" title="A Inocência">
          Tudo começou com um pensamento genial: "Minha moto é tão veinha que nem tem trava, mas quem em sã consciência roubaria dois <strong>San Marinos</strong> com 4 anos de uso?".
          Aparentemente, eu superestimei o padrão de qualidade dos ladrões da minha cidade.
        </DynamicSection>

        <DynamicSection step="Passo 02" title="O Sumiço">
          Saí da festa feliz, pronto para ir embora. Cheguei na moto e... cadê?
          Os capacetes tinham ganhado pernas. Alguém olhou para aqueles dois itens surrados e pensou: "É hoje que eu mudo de vida!". Fiquei ali, olhando para o guidão vazio com cara de quem perdeu o ônibus.
        </DynamicSection>

        <DynamicSection step="Passo 03" title="O Role da Vergonha">
          Voltei para casa sem capacete, rezando para não ser parado. Passei pelos policiais com aquela cara de "não fala comigo que eu tô no meu limite".
          Se o azar desse prêmio, eu já estaria aposentado em Ibiza agora.
        </DynamicSection>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="my-32 p-12 bg-zinc-900 border-2 border-(--color-mortadela) rounded-3xl relative"
        >
          <h3 className="text-3xl font-black mb-4 uppercase text-(--color-mortadela)">O Golpe Final</h3>
          <p className="text-xl italic text-zinc-300">
            Eu já estava puto, mas pelo menos tinha um "X-Tudo" de <strong>R$ 25,00</strong> na mão.
            Perdi a fome na hora, mas guardei pro dia seguinte. Quando abri... <strong>era só pão e mortadela.</strong>
            O ladrão me levou os capacetes, mas o chapeiro levou minha dignidade.
          </p>
        </motion.div>

        {/* Call to Action */}
        <section className="bg-white text-black p-12 rounded-[2rem] text-center my-32">
          <h2 className="text-4xl font-black mb-4 uppercase italic">Campanha: Mortadela Nunca Mais</h2>
          <p className="text-zinc-600 mb-8 text-lg">
            Contribua com esse fundo de recuperação pós-trauma.
            O dinheiro vai para um capacete novo e, se sobrar, para um hambúrguer que tenha carne de verdade.
          </p>
          <PixButton pixKey="prfvhlc@gmail.com" />
        </section>

        {/* Mural de Prints */}
        <section className="pb-32">
          <h2 className="text-2xl font-black uppercase mb-4 italic border-b-2 border-zinc-800 pb-2">
            Pessoas que apoiam a causa:
          </h2>

          <div className="mb-8 bg-rose-600/10 border-l-4 border-rose-600 p-4">
            <h4 className="text-lg font-bold uppercase mb-1 text-rose-500">
              Sua mensagem aqui no Mural! ✍️
            </h4>
            <p className="text-zinc-400 text-sm">
              Ao fazer o PIX, escreva uma <strong>descrição engraçada</strong> ou uma mensagem de apoio.
              Eu tiro o print e coloco sua participação aqui para eternizar sua bondade (e rirmos juntos da minha desgraça).
            </p>
          </div>

          <div className="grid gap-6">
            {/* Print do Banco */}
            <div className="bg-zinc-900 p-6 rounded-2xl border-2 border-zinc-800 hover:border-rose-500 transition-colors shadow-2xl">
              <p className="text-zinc-500 text-xs font-mono mb-4 uppercase tracking-widest">Evidência #01 // Mensagem Recebida</p>
              <img
                src="/prints/image.png"
                alt="Print do Banco com mensagem de apoio"
                className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="bg-zinc-900 p-6 rounded-2xl border-2 border-zinc-800 hover:border-rose-500 transition-colors shadow-2xl">
              <p className="text-zinc-500 text-xs font-mono mb-4 uppercase tracking-widest">Evidência #02 // Mensagem Recebida</p>
              <img
                src="/prints/pix2.png"
                alt="Print do Banco com mensagem de apoio"
                className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="bg-zinc-900 p-6 rounded-2xl border-2 border-zinc-800 hover:border-rose-500 transition-colors shadow-2xl">
              <p className="text-zinc-500 text-xs font-mono mb-4 uppercase tracking-widest">Evidência #03 // Mensagem Recebida</p>
              <img
                src="/prints/pix3.png"
                alt="Print do Banco com mensagem de apoio"
                className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
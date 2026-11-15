import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  Gift,
  Eye,
  X,
} from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
}

const galleryPhotos: GalleryItem[] = [
  {
    src: "https://i.ibb.co/wZjL0f6Z/Imagem-do-Chat-GPT-14-de-nov-de-2026-15-49-36.png",
    alt: "Prévia dos materiais de Natal Criativo para Imprimir 1",
  },
  {
    src: "https://i.ibb.co/0v7TJdD/Imagem-do-Chat-GPT-14-de-nov-de-2026-15-50-05.png",
    alt: "Prévia dos materiais de Natal Criativo para Imprimir 2",
  },
  {
    src: "https://i.ibb.co/c56C7bY/Captura-de-Tela-58.png",
    alt: "Prévia dos materiais de Natal Criativo para Imprimir 3",
  },
  {
    src: "https://i.ibb.co/RkSqK9bQ/Captura-de-Tela-57.png",
    alt: "Prévia dos materiais de Natal Criativo para Imprimir 4",
  },
  {
    src: "https://i.ibb.co/0RwHn4WG/Captura-de-Tela-56.png",
    alt: "Prévia dos materiais de Natal Criativo para Imprimir 5",
  },
  {
    src: "https://i.ibb.co/fYy6nmSD/Captura-de-Tela-55.png",
    alt: "Prévia dos materiais de Natal Criativo para Imprimir 6",
  },
  {
    src: "https://i.ibb.co/4wp1YxkG/Imagem-do-Chat-GPT-14-de-nov-de-2026-17-37-35.png",
    alt: "Prévia dos materiais de Natal Criativo para Imprimir 7",
  },
  {
    src: "https://i.ibb.co/WWjCz6xJ/Imagem-do-Chat-GPT-14-de-nov-de-2026-17-37-27.png",
    alt: "Prévia dos materiais de Natal Criativo para Imprimir 8",
  },
];

const highlights = [
  {
    icon: "🎄",
    title: "Caixinhas Natalinas:",
    desc: "modelos decorativos para pequenos presentes, doces e lembrancinhas.",
  },
  {
    icon: "🍫",
    title: "Embalagens para Chocolates e Doces:",
    desc: "embalagens natalinas para personalizar chocolates, bombons e guloseimas.",
  },
  {
    icon: "🎁",
    title: "Sacolinhas e Lembrancinhas:",
    desc: "modelos para preparar lembranças para diferentes ocasiões.",
  },
  {
    icon: "🏷️",
    title: "Tags e Etiquetas:",
    desc: "detalhes decorativos para acompanhar e identificar presentes.",
  },
  {
    icon: "💌",
    title: "Cartões de Natal:",
    desc: "cartões ilustrados com mensagens natalinas.",
  },
];

const modules = [
  {
    badge: "MÓDULO 01",
    title: "Caixinhas Natalinas",
    desc: "Modelos de caixinhas decorativas para pequenos presentes e lembrancinhas.",
  },
  {
    badge: "MÓDULO 02",
    title: "Embalagens para Chocolates e Doces",
    desc: "Embalagens para personalizar chocolates, bombons e pequenas guloseimas.",
  },
  {
    badge: "MÓDULO 03",
    title: "Sacolinhas e Lembrancinhas",
    desc: "Sacolinhas e modelos para preparar lembranças natalinas.",
  },
  {
    badge: "MÓDULO 04",
    title: "Tags e Etiquetas",
    desc: "Etiquetas e tags decorativas para presentes e embalagens.",
  },
  {
    badge: "MÓDULO 05",
    title: "Cartões de Natal",
    desc: "Cartões ilustrados com mensagens especiais para acompanhar seus presentes.",
  },
];

const bonuses = [
  {
    badge: "BÔNUS 01",
    title: "Coleção de Natal Cristão",
    desc: "Modelos natalinos com elementos e mensagens que celebram o nascimento de Jesus.",
  },
  {
    badge: "BÔNUS 02",
    title: "Guia de Impressão, Corte e Montagem",
    desc: "Orientações para imprimir os materiais, identificar os recortes, realizar as dobras e montar suas lembrancinhas.",
  },
];

const steps = [
  {
    num: "1.",
    action: "Escolha",
    desc: "o modelo desejado.",
  },
  {
    num: "2.",
    action: "Imprima",
    desc: "o arquivo no papel indicado.",
  },
  {
    num: "3.",
    action: "Recorte e dobre",
    desc: "seguindo as marcações do molde.",
  },
  {
    num: "4.",
    action: "Monte",
    desc: "a lembrancinha utilizando as abas e orientações.",
  },
];

export default function DownsellPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Back-redirect behavior: Push state to retain visitor on exit intent
  useEffect(() => {
    window.history.pushState({ page: "special-offer" }, "", window.location.href);

    const handlePopState = () => {
      window.history.pushState({ page: "special-offer" }, "", window.location.href);
      const alertElem = document.getElementById("top-alert");
      if (alertElem) {
        alertElem.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const checkoutUrl = "https://pay.wiapy.com/ikcAphyUvVMh";

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* --- TOP ALERT BANNER --- */}
      <div
        id="top-alert"
        className="bg-red-700 text-white py-3 px-4 text-center font-black text-xs md:text-sm uppercase tracking-wider sticky top-0 z-50 shadow-xl flex items-center justify-center gap-2 border-b border-red-800"
      >
        <AlertTriangle className="w-4 h-4 animate-bounce shrink-0 text-amber-300" />
        <span>🛑 ATENÇÃO! Não saia desta página ainda...</span>
        <AlertTriangle className="w-4 h-4 animate-bounce shrink-0 text-amber-300" />
      </div>

      <main className="flex-grow container max-w-3xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center space-y-12">
        {/* --- HERO / HEADERS --- */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-5 max-w-2xl"
        >
          {/* Badge */}
          <div className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 text-neutral-950 font-black text-xs md:text-sm px-5 py-2 rounded-full inline-flex items-center gap-2 uppercase tracking-wider shadow-lg shadow-amber-500/20 border border-yellow-200">
            <Sparkles className="w-4 h-4 fill-current text-red-700" />
            🎄 UMA CONDIÇÃO ESPECIAL PARA VOCÊ!
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight uppercase text-neutral-50 drop-shadow-md">
            ESPERE! Leve a Coleção Completa de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-emerald-400">
              Lembrancinhas de Natal
            </span>{" "}
            por um Preço Especial!
          </h1>

          {/* Intro Paragraphs */}
          <div className="space-y-3.5 text-neutral-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            <p className="font-semibold text-neutral-100">
              Prepare lindas lembrancinhas neste Natal com modelos prontos para imprimir, recortar e montar!
            </p>
            <p>
              Com o{" "}
              <strong className="text-amber-300 underline decoration-red-500 decoration-2 underline-offset-4">
                Natal Criativo para Imprimir
              </strong>
              , você encontra caixinhas, embalagens para doces, sacolinhas, tags e cartões para preparar presentes com carinho, sem precisar criar as artes do zero.
            </p>
            <p className="font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-xl px-4 py-3 text-sm md:text-base">
              E antes de você sair, temos uma oferta especial para o Plano Completo!
            </p>
          </div>
        </motion.div>

        {/* --- PRICING CARD 1 --- */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="w-full max-w-md bg-gradient-to-b from-neutral-900 via-neutral-900 to-red-950/30 rounded-2xl border-2 border-amber-400/50 p-6 md:p-8 space-y-5 shadow-2xl shadow-red-950/40 relative overflow-hidden"
        >
          {/* Discount Ribbon */}
          <div className="bg-red-600 text-white font-black px-4 py-1 text-xs rounded-full inline-block uppercase tracking-widest shadow-md">
            50% DE DESCONTO
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-black text-amber-300 uppercase tracking-widest flex items-center justify-center gap-1.5">
              🎁 OFERTA ESPECIAL DE SAÍDA
            </h2>

            <p className="text-neutral-400 text-lg font-semibold">
              De <span className="line-through decoration-red-500 decoration-2">R$ 29,90</span>
            </p>

            <div className="flex flex-col items-center justify-center">
              <span className="text-neutral-300 text-sm font-bold uppercase tracking-wider">
                Por apenas
              </span>
              <span className="text-5xl md:text-6xl font-black text-emerald-400 tracking-tighter">
                R$ 7,30
              </span>
            </div>

            <p className="text-xs font-bold text-neutral-300 tracking-wide pt-1">
              Pagamento único • Produto digital • Entrega por e-mail
            </p>
          </div>

          {/* Checkout Button */}
          <div className="pt-2">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(16, 185, 129, 0.45)",
                  "0 0 0 12px rgba(16, 185, 129, 0)",
                ],
              }}
              transition={{
                boxShadow: {
                  repeat: Infinity,
                  duration: 1.6,
                },
              }}
              href={checkoutUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full h-14 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-neutral-950 font-black text-base md:text-lg rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/60 transition-all uppercase cursor-pointer tracking-wider"
            >
              <span>QUERO APROVEITAR O DESCONTO!</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5] shrink-0" />
            </motion.a>
          </div>
        </motion.div>

        {/* --- SECTION: GALERIA & O QUE PODERÁ PREPARAR --- */}
        <section className="w-full space-y-6 pt-8 border-t border-neutral-900">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-neutral-100">
              🎁 Veja o que você poderá preparar neste Natal!
            </h2>
            <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
              Modelos natalinos para imprimir e montar, com diferentes opções de lembrancinhas e embalagens.
            </p>
          </div>

          {/* Photo Carousel (Clean photos without text overlay) */}
          <div className="relative w-full overflow-hidden py-3 bg-neutral-950/60 rounded-2xl border border-neutral-900">
            <div className="absolute left-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-4 w-max cursor-grab active:cursor-grabbing px-2"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 28,
                repeat: Infinity,
              }}
            >
              {[...galleryPhotos, ...galleryPhotos].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(item)}
                  className="w-64 sm:w-72 md:w-80 h-[340px] md:h-[380px] shrink-0 overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800/80 shadow-2xl relative group cursor-pointer flex items-center justify-center p-2"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-neutral-950/80 p-1.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4 text-amber-300" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Highlights List */}
          <div className="w-full max-w-2xl mx-auto bg-neutral-900/70 rounded-2xl border border-neutral-800 p-5 md:p-6 text-left space-y-4">
            <ul className="space-y-3.5">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-neutral-200 leading-relaxed">
                  <span className="text-lg shrink-0 leading-none mt-0.5">{item.icon}</span>
                  <span>
                    <strong className="text-white">{item.title}</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-neutral-800 text-center">
              <p className="text-sm md:text-base font-black text-amber-300">
                Escolha o modelo, imprima, recorte e monte!
              </p>
            </div>
          </div>
        </section>

        {/* --- SECTION: O QUE VOCÊ VAI RECEBER (5 MÓDULOS + 2 BÔNUS) --- */}
        <section className="w-full max-w-2xl space-y-6 pt-8 border-t border-neutral-900">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-neutral-100">
              📦 O que você vai receber nesta oferta?
            </h2>
            <p className="text-sm md:text-base text-neutral-300">
              A coleção completa do Natal Criativo para Imprimir, organizada em{" "}
              <strong className="text-amber-300">5 módulos + 2 bônus especiais</strong>.
            </p>
          </div>

          {/* 5 Modules */}
          <div className="grid grid-cols-1 gap-3 text-left">
            {modules.map((mod, idx) => (
              <div
                key={idx}
                className="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center gap-3 shadow-lg"
              >
                <span className="bg-red-600/20 text-red-400 border border-red-500/30 text-[11px] font-black uppercase px-3 py-1 rounded-lg w-fit shrink-0 tracking-wider">
                  {mod.badge}
                </span>
                <div className="space-y-0.5">
                  <h3 className="text-sm md:text-base font-black text-white">
                    {mod.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-400">
                    {mod.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 2 Bonuses */}
          <div className="pt-4 space-y-4">
            <h3 className="text-lg md:text-xl font-black text-amber-300 uppercase tracking-wide flex items-center justify-center gap-2">
              <Gift className="w-5 h-5 text-amber-300" />
              🎁 E você também recebe 2 bônus!
            </h3>

            <div className="grid grid-cols-1 gap-3 text-left">
              {bonuses.map((bonus, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-neutral-900 to-amber-950/20 border border-amber-500/40 rounded-xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center gap-3 shadow-lg"
                >
                  <span className="bg-amber-400 text-neutral-950 text-[11px] font-black uppercase px-3 py-1 rounded-lg w-fit shrink-0 tracking-wider">
                    {bonus.badge}
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="text-sm md:text-base font-black text-amber-200">
                      {bonus.title}
                    </h4>
                    <p className="text-xs md:text-sm text-neutral-300">
                      {bonus.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION: VEJA COMO É SIMPLES --- */}
        <section className="w-full max-w-2xl space-y-6 pt-8 border-t border-neutral-900">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-neutral-100">
            🖨️ Veja como é simples!
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-4 flex items-start gap-3"
              >
                <span className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-black text-sm w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                  {step.num}
                </span>
                <p className="text-sm text-neutral-200 leading-snug pt-0.5">
                  <strong className="text-white">{step.action}</strong> {step.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs md:text-sm text-neutral-400 bg-neutral-900/60 border border-neutral-800/80 rounded-xl p-4">
            Você não precisa desenvolver as artes do zero. Os modelos já vêm preparados para impressão.
          </p>
        </section>

        {/* --- SECTION: GARANTIA & FINAL OFFER CARD --- */}
        <section className="w-full max-w-xl space-y-8 pt-8 border-t border-neutral-900">
          {/* 7 Days Guarantee */}
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 space-y-2.5 text-center">
            <div className="mx-auto bg-emerald-500/15 text-emerald-400 w-12 h-12 rounded-full flex items-center justify-center border border-emerald-500/30 mb-2">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              🔒 Sua compra conta com 7 dias de garantia!
            </h2>
            <p className="text-xs md:text-sm text-neutral-300 leading-relaxed max-w-md mx-auto">
              Você tem 7 dias de garantia para solicitar o reembolso, conforme as condições informadas na compra.
            </p>
          </div>
        </section>
      </main>

      {/* --- MODAL FOR ENLARGING GALLERY PHOTO --- */}
      <AnimatePresence>
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-900 border border-neutral-700 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between p-3.5 px-4 border-b border-neutral-800">
                <span className="text-xs font-bold text-neutral-300">
                  Prévia dos Materiais
                </span>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-3 bg-neutral-950 flex items-center justify-center max-h-[82vh] overflow-y-auto">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[78vh] w-auto object-contain rounded-lg shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-neutral-900 flex items-center justify-between gap-4">
                <span className="text-xs text-neutral-400">
                  🖨️ Arquivos digitais prontos para imprimir, recortar e montar.
                </span>
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs uppercase rounded-lg transition-colors shrink-0"
                >
                  Garantir Coleção
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- FOOTER --- */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-8 text-center text-xs text-neutral-500 space-y-2 mt-auto px-4">
        <p className="font-bold text-neutral-400">
          &copy; 2026 Natal Criativo para Imprimir. Todos os direitos reservados.
        </p>
        <p className="text-xs text-neutral-500">
          Material digital de lembrancinhas natalinas para impressão e montagem.
        </p>
        <div className="flex justify-center gap-3 text-neutral-500 text-xs pt-1">
          <a href="#" className="hover:underline">Termos de Uso</a>
          <span>•</span>
          <a href="#" className="hover:underline">Política de Privacidade</a>
          <span>•</span>
          <a href="#" className="hover:underline">Suporte</a>
        </div>
      </footer>
    </div>
  );
}

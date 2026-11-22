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
  title: string;
  alt: string;
}

const galleryPhotos: GalleryItem[] = [
  {
    src: "https://i.ibb.co/mF5XNV9g/Imagem-do-Chat-GPT-22-de-nov-de-2026-17-30-38-1.png",
    title: "Prévia 01 — Kit Pequenos Criativos",
    alt: "Prévia 1 das atividades do Kit Pequenos Criativos",
  },
  {
    src: "https://i.ibb.co/hR84x0Mn/Imagem-do-Chat-GPT-22-de-nov-de-2026-17-30-39-2.png",
    title: "Prévia 02 — Kit Pequenos Criativos",
    alt: "Prévia 2 das atividades do Kit Pequenos Criativos",
  },
  {
    src: "https://i.ibb.co/NgKxv4k8/Imagem-do-Chat-GPT-22-de-nov-de-2026-17-30-40-3.png",
    title: "Prévia 03 — Kit Pequenos Criativos",
    alt: "Prévia 3 das atividades do Kit Pequenos Criativos",
  },
  {
    src: "https://i.ibb.co/Gf3PG0Ns/Imagem-do-Chat-GPT-22-de-nov-de-2026-17-30-41-4.png",
    title: "Prévia 04 — Kit Pequenos Criativos",
    alt: "Prévia 4 das atividades do Kit Pequenos Criativos",
  },
  {
    src: "https://i.ibb.co/1Jvv0sQY/Imagem-do-Chat-GPT-22-de-nov-de-2026-17-30-42-5.png",
    title: "Prévia 05 — Kit Pequenos Criativos",
    alt: "Prévia 5 das atividades do Kit Pequenos Criativos",
  },
  {
    src: "https://i.ibb.co/gFWL2JgR/Imagem-do-Chat-GPT-22-de-nov-de-2026-17-30-43-6.png",
    title: "Prévia 06 — Kit Pequenos Criativos",
    alt: "Prévia 6 das atividades do Kit Pequenos Criativos",
  },
  {
    src: "https://i.ibb.co/GQpc9JRS/Imagem-do-Chat-GPT-22-de-nov-de-2026-17-30-44-7.png",
    title: "Prévia 07 — Kit Pequenos Criativos",
    alt: "Prévia 7 das atividades do Kit Pequenos Criativos",
  },
  {
    src: "https://i.ibb.co/kgS5Q4Ww/Imagem-do-Chat-GPT-22-de-nov-de-2026-17-30-45-8.png",
    title: "Prévia 08 — Kit Pequenos Criativos",
    alt: "Prévia 8 das atividades do Kit Pequenos Criativos",
  },
  {
    src: "https://i.ibb.co/TM5xwRm5/Imagem-do-Chat-GPT-22-de-nov-de-2026-17-30-46-9.png",
    title: "Prévia 09 — Kit Pequenos Criativos",
    alt: "Prévia 9 das atividades do Kit Pequenos Criativos",
  },
  {
    src: "https://i.ibb.co/tTN6mFgK/Imagem-do-Chat-GPT-22-de-nov-de-2026-17-30-46-10.png",
    title: "Prévia 10 — Kit Pequenos Criativos",
    alt: "Prévia 10 das atividades do Kit Pequenos Criativos",
  },
];

const activityHighlights = [
  {
    icon: "🧩",
    title: "Jogos de Associação:",
    desc: "encontre figuras iguais e desenvolva a atenção visual.",
  },
  {
    icon: "🎨",
    title: "Desenhos para Colorir:",
    desc: "atividades para explorar cores e criatividade.",
  },
  {
    icon: "✂️",
    title: "Recorte e Cole:",
    desc: "brincadeiras manuais com figuras e diferentes cenários.",
  },
  {
    icon: "🧠",
    title: "Desafios de Raciocínio:",
    desc: "sequências, padrões e jogos de observação.",
  },
  {
    icon: "🐰",
    title: "Labirintos Divertidos:",
    desc: "ajude personagens a encontrar o caminho correto.",
  },
  {
    icon: "🔤",
    title: "Atividades com Letras:",
    desc: "exercícios simples de reconhecimento de letras e formação de palavras.",
  },
  {
    icon: "😊",
    title: "Emoções e Expressões:",
    desc: "atividades para conversar sobre sentimentos.",
  },
  {
    icon: "✏️",
    title: "Coordenação Motora:",
    desc: "exercícios com pontilhados, linhas e formas.",
  },
];

const modules = [
  {
    badge: "MÓDULO 01",
    icon: "🧩",
    title: "Jogos de Atenção e Observação",
    desc: "Atividades de associação, identificação de figuras, diferenças e desafios de observação.",
  },
  {
    badge: "MÓDULO 02",
    icon: "🧠",
    title: "Desafios de Lógica e Raciocínio",
    desc: "Sequências, padrões, labirintos e brincadeiras que estimulam a resolução de pequenos desafios.",
  },
  {
    badge: "MÓDULO 03",
    icon: "✂️",
    title: "Atividades de Recorte e Colagem",
    desc: "Figuras para recortar, combinar e montar, criando oportunidades de brincadeiras manuais.",
  },
  {
    badge: "MÓDULO 04",
    icon: "🎨",
    title: "Pintura e Coordenação Motora",
    desc: "Desenhos para colorir, exercícios de traçado, formas geométricas e atividades com pontilhados.",
  },
  {
    badge: "MÓDULO 05",
    icon: "🔤",
    title: "Letras, Palavras e Emoções",
    desc: "Atividades com letras, formação de palavras simples e reconhecimento de diferentes expressões.",
  },
];

const bonuses = [
  {
    badge: "BÔNUS 01",
    title: "Desafios Rápidos em Família",
    desc: "Sugestões de pequenas brincadeiras para compartilhar momentos de diversão com as crianças.",
  },
  {
    badge: "BÔNUS 02",
    title: "Calendário de 30 Dias de Atividades",
    desc: "Um calendário para ajudar a organizar brincadeiras e ter ideias prontas ao longo do mês.",
  },
  {
    badge: "BÔNUS 03",
    title: "Moldes Extras para Recortar",
    desc: "Figuras e moldes complementares para ampliar as possibilidades de atividades manuais.",
  },
  {
    badge: "BÔNUS 04",
    title: "Guia de Materiais e Preparação",
    desc: "Orientações para organizar as atividades e aproveitar materiais simples encontrados em casa.",
  },
];

const steps = [
  {
    num: "1.",
    action: "ESCOLHA",
    desc: "Selecione uma das atividades disponíveis no kit.",
  },
  {
    num: "2.",
    action: "IMPRIMA",
    desc: "Abra o arquivo digital e imprima as páginas desejadas.",
  },
  {
    num: "3.",
    action: "PREPARE",
    desc: "Separe lápis de cor, tesoura sem ponta, cola ou os materiais indicados.",
  },
  {
    num: "4.",
    action: "DIVIRTA-SE!",
    desc: "Convide seu filho para brincar, criar e descobrir novas atividades.",
  },
];

type LegalTopic = "termos" | "privacidade" | "suporte" | null;

const legalContent: Record<
  Exclude<LegalTopic, null>,
  { title: string; body: string }
> = {
  termos: {
    title: "Termos de Uso",
    body: "O Kit Pequenos Criativos é um material digital em formato PDF destinado ao uso pessoal e familiar. É permitida a impressão ilimitada das páginas para uso com seus filhos ou em ambiente doméstico, sendo vedada a revenda ou distribuição comercial dos arquivos.",
  },
  privacidade: {
    title: "Política de Privacidade",
    body: "Seus dados de compra e e-mail são utilizados exclusivamente para processar seu pedido, liberar o acesso ao material digital em PDF e prestar suporte quando necessário. Não compartilhamos seus dados com terceiros.",
  },
  suporte: {
    title: "Suporte ao Cliente",
    body: "Após a confirmação do pagamento, você receberá as instruções de acesso ao material digital no e-mail informado na compra. Caso precise de ajuda para baixar ou imprimir seus arquivos, utilize o canal de atendimento indicado no e-mail de confirmação.",
  },
};

export default function DownsellPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  const [legalModal, setLegalModal] = useState<LegalTopic>(null);

  const checkoutUrl = "https://checkout.educaemcasa.shop/VCCL1O8SDCCK";
  const originalPrice = "R$ 29,90";
  const specialPrice = "R$ 7,30";

  // Back-redirect behavior: Push state to retain visitor on exit intent
  useEffect(() => {
    window.history.pushState(
      { page: "special-offer" },
      "",
      window.location.href
    );

    const handlePopState = () => {
      window.history.pushState(
        { page: "special-offer" },
        "",
        window.location.href
      );
      const alertElem = document.getElementById("top-alert");
      if (alertElem) {
        alertElem.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col selection:bg-red-600 selection:text-white">
      {/* --- TOP ALERT BANNER --- */}
      <div
        id="top-alert"
        className="bg-red-700 text-white py-2.5 px-4 text-center font-black text-xs md:text-sm uppercase tracking-wider sticky top-0 z-40 shadow-xl flex items-center justify-center gap-2 border-b border-red-800"
      >
        <AlertTriangle className="w-4 h-4 shrink-0 text-amber-300" />
        <span>🛑 ATENÇÃO! Não saia desta página ainda...</span>
        <AlertTriangle className="w-4 h-4 shrink-0 text-amber-300" />
      </div>

      <main className="flex-grow container max-w-4xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center space-y-12">
        {/* --- HERO / HEADERS --- */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="space-y-5 max-w-2xl"
        >
          <p className="text-xs md:text-sm font-black uppercase tracking-wider text-amber-300 inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>🎁 PREPARAMOS UMA CONDIÇÃO ESPECIAL PARA VOCÊ!</span>
          </p>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight uppercase text-neutral-50 drop-shadow-md [text-wrap:balance]">
            ESPERE! Garanta o Kit Completo com{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-emerald-400">
              +200 Atividades Criativas
            </span>{" "}
            para Seu Filho por um Preço Especial!
          </h1>

          <div className="space-y-3.5 text-neutral-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            <p className="font-bold text-neutral-100 text-base md:text-lg">
              Menos telas, mais brincadeiras e momentos especiais em família!
            </p>
            <p>
              Transforme aqueles momentos em que seu filho diz{" "}
              <strong className="text-white">
                "Não tenho nada para fazer!"
              </strong>{" "}
              em oportunidades de diversão e descobertas.
            </p>
            <p>
              Com o{" "}
              <strong className="text-amber-300 underline decoration-red-500 decoration-2 underline-offset-4">
                Kit Pequenos Criativos
              </strong>
              , você encontra mais de 200 atividades para imprimir e fazer em
              casa, sem precisar ficar procurando ideias de brincadeiras na
              internet.
            </p>
            <p>
              São atividades de pintura, recorte, jogos, desafios, labirintos e
              muito mais!
            </p>
            <p className="font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-xl px-4 py-3 text-sm md:text-base">
              E antes de você sair, preparamos uma condição especial para
              garantir o Kit Completo!
            </p>
          </div>
        </motion.div>

        {/* --- PRICING CARD 1 --- */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.05 }}
          className="w-full max-w-md bg-gradient-to-b from-neutral-900 via-neutral-900 to-red-950/30 rounded-2xl border-2 border-amber-400/50 p-6 md:p-8 space-y-5 shadow-2xl shadow-red-950/40 relative overflow-hidden"
        >
          <p className="text-xs font-black uppercase tracking-widest text-red-400">
            DESCONTO EXCLUSIVO NESTA OFERTA
          </p>

          <div className="space-y-2">
            <h2 className="text-sm font-black text-amber-300 uppercase tracking-widest flex items-center justify-center gap-1.5">
              🎁 OFERTA ESPECIAL DE SAÍDA
            </h2>

            <p className="text-neutral-400 text-lg font-semibold tabular-nums">
              De{" "}
              <span className="line-through decoration-red-500 decoration-2">
                {originalPrice}
              </span>
            </p>

            <div className="flex flex-col items-center justify-center tabular-nums">
              <span className="text-neutral-300 text-sm font-bold uppercase tracking-wider">
                Por apenas
              </span>
              <span className="text-5xl md:text-6xl font-black text-emerald-400 tracking-tighter">
                {specialPrice}
              </span>
            </div>

            <p className="text-xs font-bold text-neutral-300 tracking-wide pt-1">
              Pagamento único · Material digital em PDF · Acesso após a
              confirmação do pagamento
            </p>
          </div>

          <div className="pt-2">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={checkoutUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full min-h-[56px] px-4 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-neutral-950 font-black text-sm sm:text-base md:text-lg rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/60 transition-all uppercase cursor-pointer tracking-wider whitespace-nowrap"
            >
              <span>🎁 QUERO GARANTIR MEU DESCONTO!</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5] shrink-0" />
            </motion.a>
          </div>
        </motion.div>

        {/* --- SECTION: 10 DEMO IMAGES & ATIVIDADES --- */}
        <section className="w-full space-y-6 pt-8 border-t border-neutral-900">
          <div className="space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-neutral-100 [text-wrap:balance]">
              🎨 Veja algumas atividades que seu filho poderá fazer!
            </h2>
            <p className="text-amber-300 font-bold text-base md:text-lg">
              Diversão, criatividade e aprendizado em um só lugar!
            </p>
            <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
              Com atividades variadas, você terá opções para diferentes momentos
              do dia, usando materiais simples que normalmente já existem em
              casa.
            </p>
            <p className="text-neutral-200 font-bold text-sm md:text-base pt-2">
              Confira algumas páginas do Kit Pequenos Criativos:
            </p>
          </div>

          {/* Photo Carousel */}
          <div className="relative w-full overflow-hidden py-3 bg-neutral-950/60 rounded-2xl border border-neutral-900">
            <div className="absolute left-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-4 w-max cursor-grab active:cursor-grabbing px-2"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 32,
                repeat: Infinity,
              }}
            >
              {[...galleryPhotos, ...galleryPhotos].map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  className="w-64 sm:w-72 md:w-80 h-[340px] md:h-[380px] shrink-0 overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800/80 shadow-2xl relative group cursor-pointer flex items-center justify-center p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  aria-label={`Ampliar ${item.title}`}
                >
                  {!failedImages[idx % galleryPhotos.length] ? (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setFailedImages((prev) => ({
                          ...prev,
                          [idx % galleryPhotos.length]: true,
                        }))
                      }
                    />
                  ) : (
                    <div className="w-full h-full bg-neutral-900 flex flex-col items-center justify-center p-4 text-center gap-2">
                      <Sparkles className="w-6 h-6 text-amber-300" />
                      <span className="text-xs font-bold text-neutral-200">
                        {item.title}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-2.5 right-2.5 bg-neutral-950/80 p-1.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4 text-amber-300" />
                  </div>
                </button>
              ))}
            </motion.div>
          </div>

          {/* 8 Activity Highlights List */}
          <div className="w-full max-w-3xl mx-auto bg-neutral-900/70 rounded-2xl border border-neutral-800 p-5 md:p-7 text-left space-y-5">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3.5">
              {activityHighlights.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-neutral-200 leading-relaxed"
                >
                  <span className="text-lg shrink-0 leading-none mt-0.5">
                    {item.icon}
                  </span>
                  <span>
                    <strong className="text-white">{item.title}</strong>{" "}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-neutral-800 text-center">
              <p className="text-sm md:text-base font-black text-amber-300">
                É só escolher uma atividade, imprimir e começar a diversão!
              </p>
            </div>
          </div>
        </section>

        {/* --- SECTION: 5 MÓDULOS + 4 BÔNUS --- */}
        <section className="w-full max-w-3xl space-y-6 pt-8 border-t border-neutral-900">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-neutral-100 [text-wrap:balance]">
              📦 O que você vai receber nesta oferta?
            </h2>
            <p className="text-sm md:text-base text-neutral-300 max-w-2xl mx-auto">
              O <strong className="text-amber-300">Kit Pequenos Criativos</strong>,
              com mais de 200 atividades infantis organizadas por categorias para
              facilitar o uso no dia a dia.
            </p>
          </div>

          {/* 5 Modules */}
          <div className="grid grid-cols-1 gap-3 text-left">
            {modules.map((mod, idx) => (
              <div
                key={idx}
                className="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 md:p-5 flex flex-col gap-1.5 shadow-lg"
              >
                <span className="text-red-400 text-[11px] font-black uppercase tracking-wider tabular-nums">
                  {mod.badge}
                </span>
                <h3 className="text-sm md:text-base font-black text-white">
                  {mod.icon} {mod.title}
                </h3>
                <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 4 Bonuses */}
          <div className="pt-6 space-y-4">
            <h3 className="text-lg md:text-xl font-black text-amber-300 uppercase tracking-wide flex items-center justify-center gap-2 [text-wrap:balance]">
              <Gift className="w-5 h-5 text-amber-300 shrink-0" />
              <span>
                🎁 E no Kit Completo você também recebe 4 bônus especiais!
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              {bonuses.map((bonus, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-neutral-900 to-amber-950/20 border border-amber-500/40 rounded-xl p-4 md:p-5 space-y-1.5 shadow-lg"
                >
                  <span className="text-amber-300 text-[11px] font-black uppercase tracking-wider block tabular-nums">
                    {bonus.badge}
                  </span>
                  <h4 className="text-sm md:text-base font-black text-white">
                    {bonus.title}
                  </h4>
                  <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">
                    {bonus.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm font-bold text-amber-300 pt-1">
              Tudo pensado para facilitar a rotina e tornar as brincadeiras mais
              práticas!
            </p>
          </div>
        </section>

        {/* --- SECTION: VEJA COMO É SIMPLES COMEÇAR --- */}
        <section className="w-full max-w-3xl space-y-6 pt-8 border-t border-neutral-900">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-neutral-100">
            🖨️ Veja como é simples começar!
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-4 flex items-start gap-3"
              >
                <span className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-black text-sm w-8 h-8 rounded-lg flex items-center justify-center shrink-0 tabular-nums">
                  {step.num}
                </span>
                <div className="space-y-0.5 pt-0.5">
                  <p className="text-sm font-black text-white">{step.action}</p>
                  <p className="text-xs md:text-sm text-neutral-300 leading-snug">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs md:text-sm text-neutral-300 bg-neutral-900/60 border border-neutral-800/80 rounded-xl p-4 font-medium">
            Você não precisa inventar uma brincadeira diferente todos os dias. As
            ideias já estão organizadas para você!
          </p>
        </section>

        {/* --- SECTION: POR QUE APROVEITAR ESSA OPORTUNIDADE --- */}
        <section className="w-full max-w-2xl space-y-4 pt-8 border-t border-neutral-900">
          <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 md:p-8 space-y-3 text-center">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-neutral-100 [text-wrap:balance]">
              💛 Por que aproveitar essa oportunidade?
            </h2>
            <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
              Imagine ter diversas opções de brincadeiras ao alcance das mãos
              para aqueles momentos em que seu filho pede o celular porque está
              entediado.
            </p>
            <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
              Com o{" "}
              <strong className="text-amber-300">Kit Pequenos Criativos</strong>,
              você pode oferecer alternativas divertidas para preencher esses
              momentos, sem depender de telas.
            </p>
            <p className="text-sm md:text-base font-black text-emerald-400 pt-1">
              Mais ideias para brincar, mais criatividade e mais momentos em
              família!
            </p>
          </div>
        </section>

        {/* --- SECTION: FINAL OFFER CARD --- */}
        <section className="w-full max-w-md bg-gradient-to-b from-neutral-900 via-neutral-900 to-red-950/30 rounded-2xl border-2 border-amber-400/50 p-6 md:p-8 space-y-5 shadow-2xl shadow-red-950/40">
          <div className="space-y-2">
            <p className="text-xs font-black text-amber-300 uppercase tracking-widest">
              🎁 SUA CONDIÇÃO ESPECIAL ESTÁ DISPONÍVEL!
            </p>
            <h2 className="text-lg md:text-xl font-black text-white leading-snug [text-wrap:balance]">
              Leve o Kit Completo com +200 Atividades Criativas!
            </h2>
          </div>

          <div className="space-y-1 tabular-nums">
            <p className="text-neutral-400 text-lg font-semibold">
              De{" "}
              <span className="line-through decoration-red-500 decoration-2">
                {originalPrice}
              </span>
            </p>
            <p className="text-neutral-300 text-sm font-bold uppercase tracking-wider">
              Por apenas
            </p>
            <p className="text-5xl md:text-6xl font-black text-emerald-400 tracking-tighter">
              {specialPrice}
            </p>
          </div>

          <p className="text-xs font-bold text-neutral-300 tracking-wide">
            Pagamento único · PDF para imprimir · Compra segura
          </p>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={checkoutUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full min-h-[56px] px-4 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-neutral-950 font-black text-sm md:text-base rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/60 transition-all uppercase cursor-pointer tracking-wider"
          >
            <span>🟢 SIM! QUERO APROVEITAR O PREÇO ESPECIAL!</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5] shrink-0" />
          </motion.a>
        </section>

        {/* --- SECTION: 7 DAYS GUARANTEE --- */}
        <section className="w-full max-w-xl pt-4">
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 space-y-2.5 text-center">
            <div className="mx-auto bg-emerald-500/15 text-emerald-400 w-12 h-12 rounded-full flex items-center justify-center border border-emerald-500/30 mb-2">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              🔒 Sua compra conta com 7 dias de garantia!
            </h2>
            <p className="text-xs md:text-sm text-neutral-300 leading-relaxed max-w-md mx-auto">
              Você tem 7 dias para solicitar o reembolso, conforme as condições
              da compra e a legislação aplicável.
            </p>
            <p className="text-xs md:text-sm text-neutral-300 leading-relaxed max-w-md mx-auto">
              Assim, você pode conhecer o material com mais tranquilidade.
            </p>
            <p className="text-xs md:text-sm font-bold text-amber-300 pt-1">
              Garanta seu Kit Pequenos Criativos e tenha novas ideias de
              brincadeiras sempre à mão!
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
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-900 border border-neutral-700 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between p-3.5 px-4 border-b border-neutral-800">
                <span className="text-xs font-bold text-neutral-200">
                  {selectedImage.title}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
                  aria-label="Fechar prévia"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-3 bg-neutral-950 flex items-center justify-center max-h-[78vh] overflow-y-auto">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  referrerPolicy="no-referrer"
                  className="max-h-[72vh] w-auto object-contain rounded-lg shadow-2xl"
                />
              </div>
              <div className="p-4 bg-neutral-900 flex items-center justify-between gap-4 border-t border-neutral-800">
                <span className="text-xs text-neutral-300">
                  🖨️ Material digital em PDF pronto para imprimir em casa.
                </span>
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-black text-xs uppercase rounded-lg transition-colors shrink-0"
                >
                  Garantir Kit
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- FOOTER LEGAL INFO MODAL --- */}
      <AnimatePresence>
        {legalModal && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLegalModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-900 border border-neutral-700 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-black text-white">
                  {legalContent[legalModal].title}
                </h3>
                <button
                  type="button"
                  onClick={() => setLegalModal(null)}
                  className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
                  aria-label="Fechar janela"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {legalContent[legalModal].body}
              </p>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-sm font-black rounded-lg transition-colors"
              >
                Entendi
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- FOOTER --- */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-8 text-center text-xs text-neutral-500 space-y-2 mt-auto px-4">
        <p className="font-bold text-neutral-400">
          © 2026 Kit Pequenos Criativos. Todos os direitos reservados.
        </p>
        <p className="text-xs text-neutral-500">
          Material digital de atividades infantis em PDF para impressão.
        </p>
        <div className="flex justify-center items-center gap-3 text-neutral-500 text-xs pt-1">
          <button
            type="button"
            onClick={() => setLegalModal("termos")}
            className="hover:text-neutral-300 hover:underline transition-colors"
          >
            Termos de Uso
          </button>
          <span aria-hidden="true">·</span>
          <button
            type="button"
            onClick={() => setLegalModal("privacidade")}
            className="hover:text-neutral-300 hover:underline transition-colors"
          >
            Política de Privacidade
          </button>
          <span aria-hidden="true">·</span>
          <button
            type="button"
            onClick={() => setLegalModal("suporte")}
            className="hover:text-neutral-300 hover:underline transition-colors"
          >
            Suporte
          </button>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Check,
  Copy,
  Menu,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const platformCards = [
  {
    eyebrow: "[1/3]",
    title: "Mensagens com contexto",
    description:
      "Crie links prontos para vendas, suporte e campanhas com abertura instantanea no WhatsApp.",
  },
  {
    eyebrow: "[2/3]",
    title: "Operacao omnichannel",
    description:
      "Organize pontos de contato da marca e distribua acessos por equipe, produto ou campanha.",
  },
  {
    eyebrow: "[3/3]",
    title: "Ativacao com performance",
    description:
      "Padronize CTAs, acompanhe origem do clique e reduza o atrito antes da conversa.",
  },
];

const highlights = [
  {
    icon: Zap,
    title: "Ativacao instantanea",
    description:
      "Geracao em segundos para transformar trafego em atendimento real sem etapas extras.",
  },
  {
    icon: Briefcase,
    title: "Pronto para negocio",
    description:
      "Ideal para vendas, suporte, creators e operacoes que dependem de resposta rapida.",
  },
  {
    icon: ShieldCheck,
    title: "Experiencia confiavel",
    description:
      "Interface clara, estrutura robusta e identidade premium para marcas que levam conversao a serio.",
  },
];

const useCases = [
  "Campanhas pagas",
  "Links na bio",
  "Suporte prioritario",
  "Equipe comercial",
];

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [link, setLink] = useState("wa.me/conduit-api-1234567890");
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    const clean = phone.replace(/\D/g, "");
    setLink(clean ? `wa.me/55${clean}` : "wa.me/conduit-api-1234567890");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenLink = () => {
    window.open(`https://${link}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#b9b4c5] px-3 py-3 text-on-surface sm:px-5 sm:py-5">
      <div className="mx-auto max-w-[1240px] overflow-hidden rounded-[2rem] border border-white/15 bg-background shadow-[0_30px_120px_rgba(8,8,12,0.45)]">
        <nav className="relative z-50 border-b border-white/6 bg-black/35 backdrop-blur-xl">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary">
                <MessageCircle size={18} />
              </div>
              <div>
                <div className="text-lg font-semibold tracking-tight text-white">
                  Conduit API
                </div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                  WhatsApp Flow
                </div>
              </div>
            </div>

            <div className="hidden items-center gap-8 text-sm text-white/65 md:flex">
              <a href="#plataforma" className="transition-colors hover:text-white">
                Plataforma
              </a>
              <a href="#recursos" className="transition-colors hover:text-white">
                Recursos
              </a>
              <a href="#impacto" className="transition-colors hover:text-white">
                Impacto
              </a>
              <a href="#integracoes" className="transition-colors hover:text-white">
                Integracoes
              </a>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <button className="rounded-full border border-white/10 px-5 py-2 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white">
                Entrar
              </button>
              <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-transform hover:scale-[1.02]">
                Testar agora
              </button>
            </div>

            <button
              className="text-white md:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              className="border-t border-white/8 bg-black/80 px-6 py-5 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-4 text-sm text-white/75">
                <a href="#plataforma">Plataforma</a>
                <a href="#recursos">Recursos</a>
                <a href="#impacto">Impacto</a>
                <a href="#integracoes">Integracoes</a>
                <button className="mt-2 rounded-full border border-white/10 px-5 py-3 text-left">
                  Entrar
                </button>
                <button className="rounded-full bg-white px-5 py-3 text-left font-medium text-black">
                  Testar agora
                </button>
              </div>
            </motion.div>
          )}
        </nav>

        <main>
          <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(119,96,191,0.22),transparent_30%),linear-gradient(180deg,#121214_0%,#111111_55%,#f5f1ea_100%)] px-6 pb-16 pt-16 md:px-8 md:pb-24 md:pt-20">
            <div className="hero-grid absolute inset-x-0 bottom-0 h-[36%] opacity-95" />
            <div className="hero-glow absolute inset-x-0 bottom-[18%] h-40" />
            <div className="pointer-events-none absolute left-1/2 top-[53%] h-72 w-72 -translate-x-1/2 rounded-full bg-black/75 blur-[8px]" />

            <div className="relative mx-auto max-w-5xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/65"
              >
                <Sparkles size={14} className="text-primary" />
                Conduit API para conversao em WhatsApp
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mx-auto max-w-4xl font-display text-5xl leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl"
              >
                Crie entradas de conversa mais elegantes para sua operacao no
                WhatsApp.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65 md:text-lg"
              >
                Uma landing mais editorial, com atmosfera premium, sem perder a
                assinatura da Conduit API: rapidez, foco em clique e conversa
                imediata.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
              >
                <button className="rounded-full bg-[#efe6d8] px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]">
                  Agendar demo
                </button>
                <button className="rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10">
                  Ver produto
                </button>
              </motion.div>
            </div>

            <div className="relative mx-auto mt-20 flex max-w-6xl flex-col items-center justify-center gap-6 lg:min-h-[480px]">
              <div className="relative flex h-[250px] w-[170px] items-center justify-center rounded-[90px] bg-black shadow-[0_30px_80px_rgba(0,0,0,0.65)] sm:h-[320px] sm:w-[220px]">
                <div className="absolute inset-0 rounded-[90px] bg-[radial-gradient(circle_at_50%_35%,rgba(37,211,102,0.2),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-[#25D366] text-[#0d2f21] shadow-[0_20px_50px_rgba(37,211,102,0.32)] sm:h-36 sm:w-36">
                  <MessageCircle size={62} strokeWidth={1.8} className="sm:size-[78px]" />
                  <Phone
                    size={24}
                    strokeWidth={2.4}
                    className="absolute"
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 }}
                className="glass-panel absolute left-0 top-[8%] w-[240px] rounded-[1.25rem] p-4 sm:left-[7%] md:w-[260px]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <Phone size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white">
                      Link pronto
                    </div>
                    <div className="text-xs text-white/50">Campanha de trafego</div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3 rounded-2xl border border-white/8 bg-white/5 px-3 py-2 text-xs text-white/70">
                  <span className="min-w-0 flex-1 truncate">wa.me/5511999999999</span>
                  <span className="rounded-full bg-primary/15 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
                    ativo
                  </span>
                </div>
              </motion.div>

              <motion.div
                id="hidden-mobile"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="glass-panel absolute right-0 top-[32%] w-[250px] rounded-[1.25rem] p-4 sm:right-[6%]"
              >
                <div className="space-y-2">
                  <div className="rounded-2xl border border-white/8 bg-white/5 px-3 py-2 text-xs text-white/70">
                    Mensagem inicial automatizada para WhatsApp
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-primary/10 px-3 py-2 text-xs text-primary">
                    Qual campanha gerou este lead?
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] text-white/40">
                  <span>Conduit routing</span>
                  <ArrowRight size={14} />
                </div>
              </motion.div>
            </div>
          </section>

          <section
            id="plataforma"
            className="bg-[#111113] px-6 py-16 text-white md:px-8 md:py-20"
          >
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <div className="mb-5 text-[11px] uppercase tracking-[0.35em] text-white/45">
                    Plataforma Conduit
                  </div>
                  <h2 className="max-w-2xl font-display text-4xl leading-tight md:text-5xl">
                    Uma solucao pensada para acelerar contato, resposta e
                    conversao.
                  </h2>
                </div>
                <div className="max-w-md text-sm leading-7 text-white/60">
                  Inspirada por uma composicao mais sofisticada, mas preservando
                  os sinais da sua marca: base escura, contraste premium e verde
                  como ponto de decisao.
                </div>
              </div>

              <div className="mt-12 grid gap-5 md:grid-cols-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="feature-card rounded-[1.8rem] p-7"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[1.25rem] border border-white/10 bg-white/5 text-primary">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/58">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="recursos" className="bg-[#f5f1ea] px-6 py-16 text-black md:px-8 md:py-24">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div className="max-w-xl">
                  <div className="mb-5 text-[11px] uppercase tracking-[0.35em] text-black/40">
                    Recursos centrais
                  </div>
                  <h2 className="font-display text-4xl leading-tight md:text-5xl">
                    Voz visual mais refinada, mesma ideia central: gerar conversa
                    com menos friccao.
                  </h2>
                  <p className="mt-6 max-w-md text-sm leading-7 text-black/65">
                    O gerador continua no centro da experiencia, agora apoiado
                    por blocos com mais respiro, textura e hierarquia visual.
                  </p>
                  <button className="mt-8 rounded-full bg-[#272134] px-5 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02]">
                    Explorar produto
                  </button>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  {platformCards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="light-card min-h-[280px] rounded-[1.8rem] p-6"
                    >
                      <div className="text-xs tracking-[0.25em] text-black/40">
                        {card.eyebrow}
                      </div>
                      <div className="signal-bars mt-10 h-20 opacity-75" />
                      <h3 className="mt-8 text-2xl font-semibold leading-tight">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-black/60">
                        {card.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="impacto" className="bg-[#f5f1ea] px-6 pb-16 md:px-8 md:pb-24">
            <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#121214] px-6 py-10 text-white shadow-[0_24px_80px_rgba(12,12,14,0.2)] md:px-10 md:py-12">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <div className="mb-5 text-[11px] uppercase tracking-[0.35em] text-white/40">
                    Impacto real
                  </div>
                  <h2 className="max-w-md font-display text-4xl leading-tight md:text-5xl">
                    Design mais forte, resultados mais claros.
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="metric-card rounded-[1.4rem] bg-[#8fa4d1] p-6 text-black">
                    <div className="text-5xl font-semibold tracking-tight">13.9%</div>
                    <p className="mt-4 text-sm leading-6 text-black/70">
                      Reducao do atrito entre clique e primeiro contato.
                    </p>
                  </div>
                  <div className="metric-card rounded-[1.4rem] bg-[#9ec58e] p-6 text-black">
                    <div className="text-5xl font-semibold tracking-tight">17.5%</div>
                    <p className="mt-4 text-sm leading-6 text-black/70">
                      Mais usuarios iniciando conversa a partir de campanhas.
                    </p>
                  </div>
                  <div className="metric-card rounded-[1.4rem] bg-[#c79bcf] p-6 text-black">
                    <div className="text-5xl font-semibold tracking-tight">4.8</div>
                    <p className="mt-4 text-sm leading-6 text-black/70">
                      Percepcao premium da experiencia de entrada no funil.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/8 pt-8 text-sm text-white/45 sm:grid-cols-5">
                <span>Meta Ads</span>
                <span>Google Ads</span>
                <span>CRM</span>
                <span>Suporte</span>
                <span>Creators</span>
              </div>
            </div>
          </section>

          <section
            id="integracoes"
            className="bg-[#f5f1ea] px-6 pb-16 text-black md:px-8 md:pb-24"
          >
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <div className="mb-5 text-[11px] uppercase tracking-[0.35em] text-black/40">
                  Integracoes
                </div>
                <h2 className="max-w-md font-display text-4xl leading-tight md:text-5xl">
                  Seus canais, sua equipe e seu fluxo em um caminho mais simples.
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-7 text-black/65">
                  A pagina agora comunica melhor organizacao operacional sem
                  abandonar o foco original em links rapidos para WhatsApp.
                </p>
              </div>

              <div className="rounded-[2rem] border border-black/8 bg-white/65 p-6 shadow-[0_20px_60px_rgba(28,28,32,0.08)] backdrop-blur-sm md:p-8">
                <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
                  <div className="relative min-h-[250px]">
                    <div className="absolute left-6 top-8 h-40 w-32 rounded-[1.5rem] border-2 border-black/85 bg-[#fffdf8] shadow-[0_18px_30px_rgba(0,0,0,0.08)]" />
                    <div className="absolute left-[4.5rem] top-16 h-40 w-32 rounded-[1.5rem] border-2 border-black/85 bg-[#fffdf8] shadow-[0_18px_30px_rgba(0,0,0,0.08)]" />
                    <div className="absolute left-[7.5rem] top-24 h-40 w-32 rounded-[1.5rem] border-2 border-black/85 bg-[#fffdf8] shadow-[0_18px_30px_rgba(0,0,0,0.08)]" />
                    <div className="absolute left-14 top-16 flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]/20 text-primary">
                      <MessageCircle size={15} />
                    </div>
                    <div className="absolute left-[6.5rem] top-24 flex h-8 w-8 items-center justify-center rounded-full bg-[#8fa4d1]/30 text-[#344870]">
                      <TrendingUp size={15} />
                    </div>
                    <div className="absolute left-[9.5rem] top-32 flex h-8 w-8 items-center justify-center rounded-full bg-[#c79bcf]/30 text-[#6b396e]">
                      <Sparkles size={15} />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      "WhatsApp",
                      "CRM",
                      "Automacao",
                      "Campanhas",
                      "Atendimento",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-[1rem] border border-black/8 bg-white/70 px-4 py-3"
                      >
                        <span className="font-medium text-black/80">{item}</span>
                        <Check size={16} className="text-primary" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(119,96,191,0.22),transparent_26%),linear-gradient(180deg,#18171d_0%,#121214_72%,#f4f0e8_100%)] px-6 pb-20 pt-16 text-center md:px-8">
            <div className="hero-grid absolute inset-x-0 bottom-0 h-[34%] opacity-90" />
            <div className="hero-glow absolute inset-x-0 bottom-[16%] h-32" />

            <div className="relative mx-auto max-w-4xl">
              <h2 className="font-display text-4xl leading-tight text-white md:text-6xl">
                Sua proxima conversa pode comecar com uma pagina mais memoravel.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
                O visual foi aproximado da referencia, mas a assinatura da
                Conduit API continua intacta: WhatsApp, performance e
                conversao.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button className="rounded-full bg-[#efe6d8] px-6 py-3 text-sm font-semibold text-black">
                  Agendar demo
                </button>
                <button className="rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm text-white">
                  Testar agora
                </button>
              </div>
            </div>
          </section>

          <section className="bg-[#f4f0e8] px-6 py-16 text-black md:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#272134] text-white">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">Conduit API</div>
                    <div className="text-xs uppercase tracking-[0.3em] text-black/35">
                      WhatsApp conversion stack
                    </div>
                  </div>
                </div>
                <p className="mt-5 max-w-sm text-sm leading-7 text-black/65">
                  Visual mais refinado para uma plataforma feita para transformar
                  cliques em conversas com velocidade.
                </p>
              </div>

              <div className="grid gap-10 sm:grid-cols-3">
                <div>
                  <div className="mb-3 text-sm font-semibold">Produto</div>
                  <div className="space-y-2 text-sm text-black/60">
                    <div>Gerador de links</div>
                    <div>Roteamento</div>
                    <div>Ativacao</div>
                  </div>
                </div>
                <div>
                  <div className="mb-3 text-sm font-semibold">Uso</div>
                  <div className="space-y-2 text-sm text-black/60">
                    {useCases.map((item) => (
                      <div key={item}>{item}</div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mb-3 text-sm font-semibold">Contato rapido</div>
                  <div className="space-y-3">
                    <div className="rounded-full border border-black/10 bg-white/70 px-4 py-3 text-sm text-black/65">
                      contato@conduit.cc
                    </div>
                    <button className="rounded-full bg-[#272134] px-5 py-3 text-sm font-medium text-white">
                      Falar com time
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <div className="border-t border-black/6 bg-[#f4f0e8] px-6 py-5 text-center text-xs tracking-[0.2em] text-black/35 md:px-8">
          (c) 2026 Conduit API
        </div>
      </div>

      <div className="pointer-events-none fixed bottom-5 left-3 z-40 w-[min(92vw,480px)] px-2 sm:left-5">
        <div className="glass-panel rounded-[1.75rem] border border-white/10 p-4 shadow-[0_15px_50px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex-1">
              <div className="mb-2 text-[10px] uppercase tracking-[0.32em] text-white/45">
                Gerador de link
              </div>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pointer-events-auto w-full rounded-full border border-white/10 bg-white/6 px-5 py-3 pr-11 text-sm text-white outline-none transition focus:border-primary/40"
                  placeholder="(11) 99999-9999"
                />
                <Phone
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/35"
                />
              </div>
            </div>

            <button
              onClick={handleGenerate}
              className="pointer-events-auto rounded-full bg-primary px-5 py-3 text-sm font-semibold text-[#103322] transition-transform hover:scale-[1.02]"
            >
              Gerar
            </button>
          </div>

          <div className="mt-4 flex items-center gap-3 rounded-[1.2rem] border border-white/8 bg-black/25 px-4 py-3">
            <div className="min-w-0 flex-1">
              <div className="text-[10px] uppercase tracking-[0.28em] text-primary/70">
                Link gerado
              </div>
              <code className="mt-1 block truncate text-sm text-white/80">
                {link}
              </code>
            </div>
            <button
              onClick={handleCopy}
              className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/70 transition-colors hover:text-white"
              title="Copiar link"
            >
              {copied ? <Check size={16} className="text-primary" /> : <Copy size={16} />}
            </button>
            <button
              onClick={handleOpenLink}
              className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"
              title="Abrir link"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

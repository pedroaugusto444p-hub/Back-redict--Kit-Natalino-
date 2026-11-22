import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  CheckCircle,
  Copy,
  Clock,
  ShieldCheck,
  ArrowLeft,
  Loader2,
} from "lucide-react";
import { toast } from "../hooks/use-toast";

export default function CheckoutPage() {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600);
  const [paymentStatus, setPaymentStatus] = useState<
    "pending" | "confirming" | "success"
  >("pending");

  const pixKey =
    "00020101021126580014br.gov.bcb.pix0136kitpequenoscriativos-pix-990520400005303986540514.905802BR5922Kit Pequenos Criativos6009SAO PAULO62070503***6304A1B2";

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const confirmTimer = setTimeout(() => {
      setPaymentStatus("confirming");
      const successTimer = setTimeout(() => {
        setPaymentStatus("success");
        toast({
          title: "Pagamento Confirmado!",
          description:
            "Seu acesso ao Kit Pequenos Criativos foi liberado com sucesso.",
          className: "bg-emerald-600 text-white border-none",
        });
      }, 3000);
      return () => clearTimeout(successTimer);
    }, 8000);

    return () => clearTimeout(confirmTimer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    toast({
      title: "Copiado!",
      description: "Código Copia e Cola copiado para a área de transferência.",
    });
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <header className="bg-white border-b border-slate-200 py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <a
            href="/"
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm font-bold whitespace-nowrap shrink-0"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar
          </a>
          <span className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight whitespace-nowrap shrink-0">
            Kit Pequenos Criativos
          </span>
          <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold whitespace-nowrap shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Compra Segura</span>
          </div>
        </div>
      </header>

      <main className="flex-grow container max-w-xl mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-8 space-y-6"
        >
          {paymentStatus !== "success" ? (
            <>
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-extrabold text-slate-950 tracking-tight">
                  Finalize seu Pagamento
                </h1>
                <p className="text-sm text-slate-600">
                  Escaneie o QR Code ou copie o código Pix abaixo para liberar
                  seu acesso.
                </p>
              </div>

              <div className="bg-emerald-50 rounded-xl p-4 flex justify-between items-center border border-emerald-200">
                <div>
                  <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    Oferta Especial de Saída
                  </p>
                  <p className="text-xs text-emerald-700">
                    Kit Pequenos Criativos (+200 Atividades + 4 Bônus)
                  </p>
                </div>
                <div className="text-right tabular-nums">
                  <p className="text-2xl font-extrabold text-emerald-700">
                    R$ 14,90
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center py-5 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                  <svg
                    className="w-44 h-44 text-slate-900"
                    viewBox="0 0 100 100"
                  >
                    <rect width="100" height="100" fill="white" />
                    <rect x="5" y="5" width="25" height="25" fill="currentColor" />
                    <rect x="8" y="8" width="19" height="19" fill="white" />
                    <rect x="11" y="11" width="13" height="13" fill="currentColor" />

                    <rect x="70" y="5" width="25" height="25" fill="currentColor" />
                    <rect x="73" y="8" width="19" height="19" fill="white" />
                    <rect x="76" y="11" width="13" height="13" fill="currentColor" />

                    <rect x="5" y="70" width="25" height="25" fill="currentColor" />
                    <rect x="8" y="73" width="19" height="19" fill="white" />
                    <rect x="11" y="76" width="13" height="13" fill="currentColor" />

                    <rect x="35" y="5" width="5" height="10" fill="currentColor" />
                    <rect x="45" y="15" width="15" height="5" fill="currentColor" />
                    <rect x="35" y="25" width="10" height="5" fill="currentColor" />
                    <rect x="5" y="35" width="10" height="5" fill="currentColor" />
                    <rect x="20" y="45" width="5" height="15" fill="currentColor" />
                    <rect x="35" y="40" width="20" height="10" fill="currentColor" />
                    <rect x="65" y="35" width="5" height="5" fill="currentColor" />
                    <rect x="80" y="35" width="10" height="15" fill="currentColor" />
                    <rect x="75" y="55" width="5" height="10" fill="currentColor" />
                    <rect x="5" y="60" width="15" height="5" fill="currentColor" />
                    <rect x="45" y="65" width="5" height="15" fill="currentColor" />
                    <rect x="35" y="75" width="15" height="5" fill="currentColor" />
                    <rect x="55" y="80" width="10" height="10" fill="currentColor" />
                    <rect x="75" y="75" width="20" height="5" fill="currentColor" />
                    <rect x="85" y="85" width="10" height="10" fill="currentColor" />
                  </svg>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600">
                  {paymentStatus === "pending" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                      Aguardando pagamento...
                    </>
                  ) : (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-emerald-600" />
                      Confirmando transação...
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                  Pix Copia e Cola
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value={pixKey}
                    className="flex-grow h-11 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-700 focus:outline-none select-all"
                  />
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="h-11 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg flex items-center justify-center gap-2 font-bold text-sm transition-colors shrink-0"
                  >
                    {copied ? (
                      "Copiado!"
                    ) : (
                      <>
                        <Copy className="w-4 h-4" /> Copiar
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500 tabular-nums">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-red-600" />
                  Expira em:{" "}
                  <span className="text-red-600 font-bold">
                    {formatTime(timeLeft)}
                  </span>
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Ambiente Criptografado
                </span>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6 space-y-6"
            >
              <div className="mx-auto bg-emerald-100 p-4 rounded-full w-fit text-emerald-600">
                <CheckCircle className="w-16 h-16" />
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
                  Acesso Liberado!
                </h2>
                <p className="text-emerald-700 font-bold text-sm">
                  Pagamento via Pix confirmado instantaneamente
                </p>
              </div>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-sm mx-auto">
                Parabéns! Seu acesso ao material{" "}
                <span className="font-bold text-slate-900">
                  Kit Pequenos Criativos
                </span>{" "}
                (5 módulos + 4 bônus especiais) já está liberado.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left space-y-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Seus dados de acesso:
                </p>
                <div className="space-y-1 text-sm text-slate-700 font-medium">
                  <p>
                    <span className="text-slate-500">Conteúdo:</span> Kit
                    Pequenos Criativos - Kit Completo em PDF
                  </p>
                  <p>
                    <span className="text-slate-500">Garantia:</span> 7 dias
                    para reembolso
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    toast({
                      title: "Acesso liberado!",
                      description:
                        "Os arquivos digitais em PDF foram enviados para seu e-mail cadastrado.",
                    });
                  }}
                  className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                >
                  BAIXAR MEU KIT COMPLETO AGORA
                </button>
                <p className="text-xs text-slate-500 mt-3">
                  Você também receberá uma cópia do link de download em seu
                  e-mail.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-6 mt-8">
        <div className="container mx-auto px-4 text-center text-xs text-slate-500 space-y-2">
          <p>© 2026 Kit Pequenos Criativos. Todos os direitos reservados.</p>
          <p>Material digital de atividades infantis em PDF para impressão.</p>
        </div>
      </footer>
    </div>
  );
}

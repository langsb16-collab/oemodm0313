import React from 'react';
import { Bot, X, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function FAQBot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const { t } = useTranslation();

  // Get translated FAQ items
  const faqs = t('faq.items', { returnObjects: true }) as Array<{ q: string, a: string }>;

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] bg-white rounded-[32px] shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
          >
            <div className="p-6 bg-orange-500 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bot size={24} />
                <h4 className="font-bold">{t('faq.bot')}</h4>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full">
                <X size={20} />
              </button>
            </div>

            <div className="p-6 max-h-[400px] overflow-y-auto space-y-3">
              <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 flex gap-3 mb-4">
                <Sparkles className="text-orange-500 shrink-0" size={18} />
                <p className="text-xs text-orange-900 font-medium">
                  {t('faq.welcome')}
                </p>
              </div>
              
              {Array.isArray(faqs) && faqs.map((faq, i) => (
                <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm font-bold text-slate-700">{faq.q}</span>
                    {openIndex === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 bg-slate-50 text-sm text-slate-600 border-t border-slate-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-orange-500 text-white rounded-2xl shadow-xl shadow-orange-500/20 flex items-center justify-center hover:scale-110 transition-transform"
      >
        <Bot size={28} />
      </button>
    </div>
  );
}

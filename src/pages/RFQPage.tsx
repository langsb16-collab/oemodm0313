import React from 'react';
import { 
  Send, 
  Upload, 
  Info, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  Target,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function RFQPage() {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = React.useState(1);

  const steps = [
    { id: 1, title: t('rfq.steps.productInfo'), icon: Layers },
    { id: 2, title: t('rfq.steps.specs'), icon: Target },
    { id: 3, title: t('rfq.steps.aiAnalysis'), icon: Sparkles },
  ];

  const [formData, setFormData] = React.useState({
    productName: '',
    category: '',
    quantity: '',
    targetPrice: '',
    description: '',
    material: '',
    certifications: []
  });

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 font-display">{t('rfq.title')}</h2>
        <p className="text-slate-500 mt-2">{t('rfq.subtitle')}</p>
      </div>

      {/* Stepper */}
      <div className="flex items-center justify-between mb-12 relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2 z-0"></div>
        {steps.map((step) => (
          <div key={step.id} className="relative z-10 flex flex-col items-center gap-2">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
              currentStep >= step.id ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20' : 'bg-white text-slate-400 border border-slate-200'
            }`}>
              <step.icon size={24} />
            </div>
            <span className={`text-xs font-bold uppercase tracking-widest ${
              currentStep >= step.id ? 'text-brand-600' : 'text-slate-400'
            }`}>{step.title}</span>
          </div>
        ))}
      </div>

      <motion.div 
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200"
      >
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{t('rfq.form.productName')}</label>
                <input 
                  type="text" 
                  placeholder={t('rfq.form.productNamePlaceholder')}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{t('rfq.form.category')}</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none">
                  <option>{t('rfq.form.categories.electronics')}</option>
                  <option>{t('rfq.form.categories.apparel')}</option>
                  <option>{t('rfq.form.categories.home')}</option>
                  <option>{t('rfq.form.categories.beauty')}</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">{t('rfq.form.description')}</label>
              <textarea 
                rows={4}
                placeholder={t('rfq.form.descriptionPlaceholder')}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none resize-none"
              ></textarea>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{t('rfq.form.quantity')}</label>
                <input 
                  type="number" 
                  placeholder={t('rfq.form.quantityPlaceholder')}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{t('rfq.form.price')}</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                  <input 
                    type="number" 
                    placeholder={t('rfq.form.pricePlaceholder')}
                    className="w-full pl-8 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">{t('rfq.form.files')}</label>
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                <Upload className="text-slate-400 mb-2" size={32} />
                <p className="text-sm font-bold text-slate-600">{t('rfq.form.uploadText')}</p>
                <p className="text-xs text-slate-400 mt-1">{t('rfq.form.uploadLimit')}</p>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="text-center space-y-6 py-8">
            <div className="w-20 h-20 bg-brand-500 rounded-3xl flex items-center justify-center mx-auto shadow-xl shadow-brand-500/20">
              <Sparkles className="text-white" size={40} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">{t('rfq.ai.ready')}</h3>
              <p className="text-slate-500 mt-2">{t('rfq.ai.desc')}</p>
            </div>
            <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100 text-left">
              <div className="flex items-start gap-3">
                <Info className="text-brand-600 mt-1" size={20} />
                <div>
                  <p className="text-sm font-bold text-brand-900">{t('rfq.ai.insight')}</p>
                  <p className="text-sm text-brand-700 mt-1">{t('rfq.ai.recommendation')}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-10 flex items-center justify-between pt-8 border-t border-slate-100">
          <button 
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl transition-all ${
              currentStep === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <ChevronLeft size={20} /> {t('rfq.buttons.back')}
          </button>
          
          {currentStep === steps.length ? (
            <button className="flex items-center gap-2 px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20">
              {t('rfq.buttons.submit')} <Send size={20} />
            </button>
          ) : (
            <button 
              onClick={nextStep}
              className="flex items-center gap-2 px-8 py-3 bg-brand-500 text-white font-bold rounded-xl hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/20"
            >
              {t('rfq.buttons.continue')} <ChevronRight size={20} />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}

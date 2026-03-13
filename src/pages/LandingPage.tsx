import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Search, 
  Globe, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Factory,
  ChevronRight,
  Star,
  Package,
  FileText,
  Truck,
  Activity
} from 'lucide-react';
import { motion } from 'framer-motion';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function LandingPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/marketplace?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/marketplace');
    }
  };

  const categories = [
    { name: t('landing.categories.electronics'), icon: Cpu, count: `1,240 ${t('landing.stats.factories')}` },
    { name: t('landing.categories.apparel'), icon: Zap, count: `850 ${t('landing.stats.factories')}` },
    { name: t('landing.categories.automotive'), icon: Factory, count: `420 ${t('landing.stats.factories')}` },
    { name: t('landing.categories.medical'), icon: ShieldCheck, count: `310 ${t('landing.stats.factories')}` },
  ];

  const features = [
    { title: t('landing.features.matching'), icon: Sparkles, color: 'text-brand-600', bg: 'bg-brand-50' },
    { title: t('landing.features.automation'), icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: t('landing.features.tracking'), icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: t('landing.features.logistics'), icon: Truck, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const stats = [
    { label: t('landing.stats.factories'), value: '12,000+' },
    { label: t('landing.stats.countries'), value: '85' },
    { label: t('landing.stats.rfqs'), value: '120k' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="h-16 border-b border-slate-100 flex items-center justify-between px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
            <Globe className="text-white w-5 h-5" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-slate-900">OEM AI</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/marketplace" className="text-xs font-bold text-slate-600 hover:text-brand-600 transition-colors">{t('header.marketplace')}</Link>
          <Link to="/factories" className="text-xs font-bold text-slate-600 hover:text-brand-600 transition-colors">{t('header.factories')}</Link>
          <Link to="/about" className="text-xs font-bold text-slate-600 hover:text-brand-600 transition-colors">{t('header.howItWorks')}</Link>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link to="/dashboard" className="px-5 py-2.5 bg-brand-600 text-white text-xs font-bold rounded-xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20 flex items-center gap-2">
            {t('header.dashboard')} <ArrowRight size={14} />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[65vh] py-10 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-[10px] font-bold mb-6 border border-brand-100 uppercase tracking-wider"
          >
            <Sparkles size={12} /> {t('hero.badge')}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[48px] font-display font-bold text-slate-900 tracking-tight leading-tight"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-slate-500 max-w-xl mx-auto"
          >
            {t('hero.description')}
          </motion.p>

          <motion.form 
            onSubmit={handleSearch}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-xl mx-auto bg-white p-1.5 rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100 flex gap-2"
          >
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder={t('hero.searchPlaceholder')}
                className="w-full pl-12 pr-4 py-3 text-sm font-medium outline-none rounded-xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button 
              type="submit"
              className="px-6 py-3 bg-brand-600 text-white text-sm font-bold rounded-xl hover:bg-brand-700 transition-all flex items-center justify-center gap-2"
            >
              {t('hero.searchButton')}
            </button>
          </motion.form>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.05) }}
                className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:border-brand-200 transition-all"
              >
                <div className={`w-10 h-10 ${feature.bg} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={feature.color} size={20} />
                </div>
                <h3 className="text-xs font-bold text-slate-800">{feature.title}</h3>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 font-display">{t('landing.categories.title')}</h2>
              <p className="text-slate-500 mt-2">{t('landing.categories.subtitle')}</p>
            </div>
            <button className="text-brand-600 font-bold flex items-center gap-1 hover:underline">
              {t('landing.categories.viewAll')} <ChevronRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 card-hover group cursor-pointer"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-50 transition-colors">
                  <cat.icon className="text-slate-400 group-hover:text-brand-600 transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{cat.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{cat.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 font-display leading-tight">
              {t('landing.sourcing.title')} <br />
              <span className="text-brand-600">{t('landing.sourcing.subtitle')}</span>
            </h2>
            <div className="mt-12 space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 shrink-0 bg-brand-50 rounded-xl flex items-center justify-center">
                  <Sparkles className="text-brand-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{t('landing.features.matching')}</h4>
                  <p className="text-slate-500 mt-1">{t('landing.features.matchingDesc')}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 shrink-0 bg-blue-50 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{t('landing.features.quality')}</h4>
                  <p className="text-slate-500 mt-1">{t('landing.features.qualityDesc')}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 shrink-0 bg-purple-50 rounded-xl flex items-center justify-center">
                  <Zap className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{t('landing.features.realtime')}</h4>
                  <p className="text-slate-500 mt-1">{t('landing.features.realtimeDesc')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-500 to-emerald-400 rounded-[40px] blur-2xl opacity-20"></div>
            <img 
              src="https://picsum.photos/seed/factory-hero/800/600" 
              alt="Manufacturing" 
              className="relative rounded-[32px] shadow-2xl border border-slate-200"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center">
                <Globe className="text-white w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">OEM AI</span>
            </div>
            <p className="text-slate-400 max-w-sm">
              {t('landing.footer.desc')}
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6">{t('landing.footer.platform')}</h5>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/marketplace" className="hover:text-white transition-colors">{t('header.marketplace')}</Link></li>
              <li><Link to="/factories" className="hover:text-white transition-colors">{t('landing.footer.network')}</Link></li>
              <li><Link to="/rfqs" className="hover:text-white transition-colors">{t('header.rfq')}</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">{t('landing.footer.pricing')}</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">{t('landing.footer.company')}</h5>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/about" className="hover:text-white transition-colors">{t('landing.footer.about')}</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">{t('landing.footer.careers')}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t('landing.footer.contact')}</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">{t('landing.footer.privacy')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          {t('landing.footer.rights')}
        </div>
      </footer>
    </div>
  );
}

function Sparkles({ size, className }: { size?: number, className?: string }) {
  return (
    <svg 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
    </svg>
  );
}

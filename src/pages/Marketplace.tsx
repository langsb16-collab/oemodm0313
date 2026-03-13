import React from 'react';
import { Search, Filter, Star, MapPin, Package, ChevronRight, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

const factories = [
  {
    id: '1',
    name: 'Shenzhen Precision Electronics',
    country: 'China',
    rating: 4.8,
    reviews: 124,
    categories: ['Electronics', 'PCBs', 'Smart Home'],
    moq: 500,
    capacity: '1M units/mo',
    image: 'https://picsum.photos/seed/factory1/600/400'
  },
  {
    id: '2',
    name: 'Vietnam Textile Hub',
    country: 'Vietnam',
    rating: 4.6,
    reviews: 89,
    categories: ['Apparel', 'Textiles', 'Organic Cotton'],
    moq: 1000,
    capacity: '500k units/mo',
    image: 'https://picsum.photos/seed/factory2/600/400'
  },
  {
    id: '3',
    name: 'Seoul Beauty Labs',
    country: 'South Korea',
    rating: 4.9,
    reviews: 210,
    categories: ['Cosmetics', 'Skincare', 'Packaging'],
    moq: 100,
    capacity: '200k units/mo',
    image: 'https://picsum.photos/seed/factory3/600/400'
  },
  {
    id: '4',
    name: 'Berlin Auto Parts',
    country: 'Germany',
    rating: 4.7,
    reviews: 56,
    categories: ['Automotive', 'Metal Stamping'],
    moq: 50,
    capacity: '50k units/mo',
    image: 'https://picsum.photos/seed/factory4/600/400'
  }
];

const categoryKeys = ['electronics', 'apparel', 'cosmetics', 'automotive', 'furniture', 'packaging'];

export default function Marketplace() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  // Local state for the input field to avoid reactive filtering on every keystroke if a search button is desired
  const [inputValue, setInputValue] = React.useState(query);
  const [searchTerm, setSearchTerm] = React.useState(query);

  React.useEffect(() => {
    if (query !== searchTerm) {
      setInputValue(query);
      setSearchTerm(query);
    }
  }, [query]);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSearchTerm(inputValue);
    // Update URL params as well
    if (inputValue) {
      setSearchParams({ q: inputValue });
    } else {
      setSearchParams({});
    }
  };

  const filteredFactories = factories.filter(factory => 
    factory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    factory.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    factory.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleCategoryClick = (category: string) => {
    const newTerm = t(`marketplace.categories.${category}`);
    setInputValue(newTerm);
    setSearchTerm(newTerm);
    setSearchParams({ q: newTerm });
  };

  const handleClear = () => {
    setInputValue('');
    setSearchTerm('');
    setSearchParams({});
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter Header */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder={t('marketplace.searchPlaceholder')}
              className="w-full pl-12 pr-32 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none transition-all"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-all text-sm"
            >
              {t('hero.searchButton')}
            </button>
          </div>
          <button 
            type="button"
            className="flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all"
            onClick={handleSearch}
          >
            <Filter size={20} />
            {t('marketplace.filters')}
          </button>
        </form>

        <div className="flex flex-wrap gap-2 mt-6">
          {categoryKeys.map((key) => (
            <button 
              key={key} 
              onClick={() => handleCategoryClick(key)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all border ${
                searchTerm === t(`marketplace.categories.${key}`)
                  ? 'bg-brand-600 text-white border-brand-600'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-brand-50 hover:text-brand-600'
              }`}
            >
              {t(`marketplace.categories.${key}`)}
            </button>
          ))}
          {(searchTerm || inputValue) && (
            <button 
              onClick={handleClear}
              className="px-4 py-2 bg-slate-200 text-slate-700 text-sm font-semibold rounded-full hover:bg-slate-300 transition-all border border-slate-300"
            >
              {t('common.clear')}
            </button>
          )}
        </div>
      </div>

      {/* Factory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredFactories.map((factory, i) => (
          <motion.div
            key={factory.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 group card-hover flex flex-col"
          >
            <div className="relative h-52 overflow-hidden">
              <img 
                src={factory.image} 
                alt={factory.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full flex items-center gap-1 shadow-sm">
                <MapPin size={14} className="text-brand-600" />
                <span className="text-xs font-bold text-slate-800">{factory.country}</span>
              </div>
              <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-md rounded-full shadow-sm hover:bg-white transition-colors">
                <Star size={18} className="text-amber-400 fill-amber-400" />
              </button>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">{factory.name}</h3>
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-amber-400 fill-amber-400" />
                  <span className="text-sm font-bold text-slate-800">{factory.rating}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {factory.categories.map((cat) => (
                  <span key={cat} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-1 rounded">
                    {cat}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-auto pt-4 border-t border-slate-100">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('marketplace.minOrder')}</p>
                  <p className="text-sm font-bold text-slate-900">{factory.moq}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('marketplace.capacity')}</p>
                  <p className="text-sm font-bold text-slate-900">{factory.capacity}</p>
                </div>
              </div>

              <button className="w-full mt-6 py-4 bg-brand-50 text-brand-600 font-bold rounded-2xl hover:bg-brand-500 hover:text-white transition-all flex items-center justify-center gap-2">
                {t('marketplace.viewProfile')} <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

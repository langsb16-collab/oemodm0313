import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  MapPin, 
  ShieldCheck, 
  Cpu, 
  Package, 
  Clock, 
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  FileText,
  Globe
} from 'lucide-react';
import { motion } from 'framer-motion';

const factoryData = {
  id: '1',
  name: 'Shenzhen Precision Electronics',
  country: 'China',
  rating: 4.8,
  reviews: 124,
  categories: ['Electronics', 'PCBs', 'Smart Home'],
  moq: 500,
  capacity: '1M units/mo',
  description: 'A leading manufacturer of high-precision electronic components and consumer electronics. Established in 2008, we specialize in PCB assembly, SMT, and final product testing for global brands.',
  images: [
    'https://picsum.photos/seed/factory1/800/600',
    'https://picsum.photos/seed/factory1-2/800/600',
    'https://picsum.photos/seed/factory1-3/800/600'
  ],
  certifications: ['ISO 9001', 'ISO 14001', 'CE', 'RoHS', 'UL'],
  machinery: [
    'High-speed SMT Lines (Panasonic)',
    'Automated Optical Inspection (AOI)',
    'X-Ray Inspection Systems',
    'Laser Engraving Machines'
  ]
};

export default function FactoryDetail() {
  const { id } = useParams();
  const [activeImage, setActiveImage] = React.useState(0);

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Link to="/marketplace" className="p-2 hover:bg-white rounded-xl transition-colors text-slate-500">
          <ChevronLeft size={24} />
        </Link>
        <h2 className="text-2xl font-bold text-slate-900">Factory Profile</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Images & Basic Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-4 rounded-[32px] shadow-sm border border-slate-200">
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
              <img 
                src={factoryData.images[activeImage]} 
                alt={factoryData.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex gap-4">
              {factoryData.images.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === i ? 'border-brand-500' : 'border-transparent opacity-60'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 font-display">{factoryData.name}</h1>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1 text-slate-500">
                    <MapPin size={16} />
                    <span className="text-sm font-medium">{factoryData.country}</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star size={16} className="fill-amber-500" />
                    <span className="text-sm font-bold">{factoryData.rating}</span>
                    <span className="text-slate-400 font-medium">({factoryData.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-slate-100 transition-colors">
                  <Globe size={20} />
                </button>
                <button className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-slate-100 transition-colors">
                  <MessageSquare size={20} />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">About</h3>
                <p className="text-slate-600 leading-relaxed">{factoryData.description}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-slate-100">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">MOQ</p>
                  <p className="text-lg font-bold text-slate-900">{factoryData.moq} units</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Capacity</p>
                  <p className="text-lg font-bold text-slate-900">{factoryData.capacity}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Lead Time</p>
                  <p className="text-lg font-bold text-slate-900">15-30 days</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Response</p>
                  <p className="text-lg font-bold text-slate-900">~2 hours</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <ShieldCheck className="text-brand-600" size={18} /> Certifications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {factoryData.certifications.map(cert => (
                      <span key={cert} className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-lg border border-brand-100">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Cpu className="text-blue-600" size={18} /> Key Machinery
                  </h3>
                  <ul className="space-y-2">
                    {factoryData.machinery.map(machine => (
                      <li key={machine} className="text-sm text-slate-600 flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-slate-300" /> {machine}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Actions & AI Score */}
        <div className="space-y-8">
          <div className="bg-slate-900 text-white p-8 rounded-[32px] shadow-xl shadow-slate-900/20">
            <h3 className="text-xl font-bold mb-6">Start Production</h3>
            <div className="space-y-4">
              <button className="w-full py-4 bg-brand-500 text-white font-bold rounded-2xl hover:bg-brand-600 transition-all flex items-center justify-center gap-2">
                Request Sample <ChevronRight size={18} />
              </button>
              <button className="w-full py-4 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                Send RFQ <FileText size={18} />
              </button>
            </div>
            <p className="text-xs text-slate-400 text-center mt-6">
              Secure payments via Escrow. <br />
              Quality guaranteed by OEM AI.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900">AI Match Score</h3>
              <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
                <Star className="text-brand-600" size={20} />
              </div>
            </div>
            <div className="relative h-4 bg-slate-100 rounded-full overflow-hidden mb-4">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '94%' }}
                className="absolute inset-y-0 left-0 bg-brand-500"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-slate-900">94%</span>
              <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">Excellent Match</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-500 mt-1 shrink-0" size={16} />
                <p className="text-xs text-slate-500">Capabilities perfectly align with your PCB requirements.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-500 mt-1 shrink-0" size={16} />
                <p className="text-xs text-slate-500">Strong history of on-time delivery for similar products.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-500 mt-1 shrink-0" size={16} />
                <p className="text-xs text-slate-500">All required certifications are verified and active.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

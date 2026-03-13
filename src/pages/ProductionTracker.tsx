import React from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  Package, 
  Truck, 
  FileText, 
  CreditCard,
  AlertCircle,
  ChevronRight,
  Download
} from 'lucide-react';
import { motion } from 'framer-motion';

const stages = [
  { id: 'rfq', label: 'RFQ Submitted', icon: FileText, status: 'completed', date: 'Mar 01, 2026' },
  { id: 'quote', label: 'Quote Accepted', icon: CreditCard, status: 'completed', date: 'Mar 05, 2026' },
  { id: 'sample', label: 'Sample Approved', icon: Package, status: 'completed', date: 'Mar 10, 2026' },
  { id: 'production', label: 'Mass Production', icon: Clock, status: 'active', date: 'In Progress' },
  { id: 'shipping', label: 'Global Shipping', icon: Truck, status: 'pending', date: 'Expected Mar 25' },
];

export default function ProductionTracker() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Order Tracking</h2>
          <p className="text-slate-500 mt-1">Order #OEM-88291 • Smart Watch V2 (1,000 units)</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all">
          <Download size={18} /> Download Specs
        </button>
      </div>

      {/* Progress Bar */}
      <div className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-200">
        <div className="relative flex justify-between">
          <div className="absolute top-6 left-0 w-full h-1 bg-slate-100 -z-0">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '75%' }}
              className="absolute inset-y-0 left-0 bg-brand-500"
            />
          </div>
          
          {stages.map((stage, i) => (
            <div key={stage.id} className="relative z-10 flex flex-col items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                stage.status === 'completed' ? 'bg-brand-500 text-white' : 
                stage.status === 'active' ? 'bg-white text-brand-600 border-2 border-brand-500 ring-4 ring-brand-50' : 
                'bg-white text-slate-300 border-2 border-slate-100'
              }`}>
                {stage.status === 'completed' ? <CheckCircle2 size={24} /> : <stage.icon size={24} />}
              </div>
              <div className="text-center">
                <p className={`text-sm font-bold ${stage.status === 'pending' ? 'text-slate-400' : 'text-slate-900'}`}>
                  {stage.label}
                </p>
                <p className="text-xs text-slate-400 mt-1">{stage.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Production Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Production Status</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-500/10 rounded-xl flex items-center justify-center">
                    <Package className="text-brand-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Units Completed</p>
                    <p className="text-xs text-slate-500">450 / 1,000 units</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900">45%</p>
                  <div className="w-32 h-2 bg-slate-200 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-brand-500 w-[45%]"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Quality Check</p>
                    <p className="text-xs text-slate-500">Batch #1 Passed</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-full">Passed</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Production Logs</h3>
            <div className="space-y-4">
              {[
                { time: 'Today, 10:24 AM', event: 'Batch #2 entered assembly line', type: 'info' },
                { time: 'Yesterday, 4:15 PM', event: 'Quality inspection for Batch #1 completed', type: 'success' },
                { time: 'Mar 10, 2026', event: 'Materials received and verified', type: 'success' },
              ].map((log, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-brand-500 mt-2 shrink-0"></div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{log.event}</p>
                    <p className="text-xs text-slate-400 mt-1">{log.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Factory Contact */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-8 rounded-[32px] shadow-xl shadow-slate-900/20">
            <h3 className="text-xl font-bold mb-6">Factory Contact</h3>
            <div className="flex items-center gap-4 mb-8">
              <img 
                src="https://picsum.photos/seed/factory-rep/100/100" 
                alt="Rep" 
                className="w-14 h-14 rounded-2xl object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-bold">Li Wei</p>
                <p className="text-sm text-slate-400">Production Manager</p>
              </div>
            </div>
            <button className="w-full py-4 bg-brand-500 text-white font-bold rounded-2xl hover:bg-brand-600 transition-all flex items-center justify-center gap-2">
              Send Message <ChevronRight size={18} />
            </button>
          </div>

          <div className="bg-amber-50 p-6 rounded-3xl border border-amber-100 flex gap-4">
            <AlertCircle className="text-amber-600 shrink-0" size={24} />
            <div>
              <p className="text-sm font-bold text-amber-900">Action Required</p>
              <p className="text-sm text-amber-700 mt-1">Please approve the final packaging design by Mar 15 to avoid shipping delays.</p>
              <button className="mt-3 text-sm font-bold text-amber-900 underline">Review Design</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

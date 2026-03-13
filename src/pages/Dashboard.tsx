import React from 'react';
import { 
  TrendingUp, 
  Package, 
  Clock, 
  AlertCircle,
  ArrowUpRight,
  ChevronRight,
  Factory,
  FileText
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
];

export default function Dashboard() {
  const { t } = useTranslation();

  const data = [
    { name: t('dashboard.months.jan'), value: 400 },
    { name: t('dashboard.months.feb'), value: 300 },
    { name: t('dashboard.months.mar'), value: 600 },
    { name: t('dashboard.months.apr'), value: 800 },
    { name: t('dashboard.months.may'), value: 500 },
    { name: t('dashboard.months.jun'), value: 900 },
  ];

  const stats = [
    { label: t('dashboard.activeRFQs'), value: '12', change: '+2', icon: FileText, color: 'bg-blue-500' },
    { label: t('dashboard.productionOrders'), value: '8', change: '+1', icon: Package, iconColor: 'text-brand-500', color: 'bg-brand-500' },
    { label: t('dashboard.avgLeadTime'), value: '24d', change: '-2d', icon: Clock, color: 'bg-amber-500' },
    { label: t('dashboard.pendingQuotes'), value: '45', change: '+12', icon: TrendingUp, color: 'bg-purple-500' },
  ];

  const recentActivities = [
    { id: 1, type: 'quote', title: t('dashboard.recentActivity'), desc: t('dashboard.activities.quote'), time: '2h ago' },
    { id: 2, type: 'production', title: t('dashboard.recentActivity'), desc: t('dashboard.activities.production'), time: '5h ago' },
    { id: 3, type: 'rfq', title: t('dashboard.recentActivity'), desc: t('dashboard.activities.rfq'), time: '1d ago' },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 card-hover"
          >
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-xl ${stat.color} bg-opacity-10`}>
                <stat.icon className={`${stat.color.replace('bg-', 'text-')} w-6 h-6`} />
              </div>
              <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded-full flex items-center gap-1">
                {stat.change} <ArrowUpRight size={12} />
              </span>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Section */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900">{t('dashboard.productionVolume')}</h3>
              <p className="text-sm text-slate-500">{t('dashboard.monthlyOutput')}</p>
            </div>
            <select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium outline-none focus:ring-2 focus:ring-brand-500">
              <option>{t('dashboard.last6Months')}</option>
              <option>{t('dashboard.lastYear')}</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#22c55e" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900">{t('dashboard.recentActivity')}</h3>
            <button className="text-brand-600 text-sm font-bold hover:underline">{t('dashboard.viewAll')}</button>
          </div>
          <div className="space-y-6">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex gap-4 group cursor-pointer">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-brand-50 transition-colors">
                    <AlertCircle size={18} className="text-slate-500 group-hover:text-brand-500" />
                  </div>
                  {activity.id !== recentActivities.length && (
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-full bg-slate-100"></div>
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">{activity.title}</h4>
                    <span className="text-xs text-slate-400">{activity.time}</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1 line-clamp-2">{activity.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-4 bg-slate-50 text-slate-600 font-bold rounded-2xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
            {t('dashboard.exploreMarketplace')} <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

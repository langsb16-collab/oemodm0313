import React from 'react';
import { MessageSquare, X, Send, Mic, Video, Image as ImageIcon, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');

  return (
    <div className="fixed left-6 bottom-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 left-0 w-[400px] h-[500px] bg-white rounded-[32px] shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-brand-primary text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Global Chat</h4>
                  <p className="text-xs text-white/60 flex items-center gap-1">
                    <Languages size={10} /> Auto-translate active
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-slate-200 rounded-full shrink-0" />
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm border border-slate-100">
                  Hello! How can I help you with your manufacturing needs?
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-100 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <button className="p-2 text-slate-400 hover:text-brand-primary hover:bg-slate-50 rounded-lg transition-all">
                  <Mic size={18} />
                </button>
                <button className="p-2 text-slate-400 hover:text-brand-primary hover:bg-slate-50 rounded-lg transition-all">
                  <Video size={18} />
                </button>
                <button className="p-2 text-slate-400 hover:text-brand-primary hover:bg-slate-50 rounded-lg transition-all">
                  <ImageIcon size={18} />
                </button>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-primary"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button className="p-2 bg-brand-primary text-white rounded-xl hover:bg-brand-accent transition-all">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-primary text-white rounded-full shadow-xl shadow-brand-primary/20 flex items-center justify-center hover:scale-110 transition-transform"
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
}

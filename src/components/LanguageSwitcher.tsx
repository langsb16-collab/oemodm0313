import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe size={16} className="text-slate-400" />
      <select
        value={i18n.language}
        onChange={(e) => changeLang(e.target.value)}
        className="bg-transparent border-none text-sm font-bold text-slate-600 outline-none cursor-pointer hover:text-brand-primary transition-colors"
      >
        <option value="en">English</option>
        <option value="ko">한국어</option>
        <option value="zh">中文</option>
        <option value="ja">日本語</option>
        <option value="ru">Русский</option>
        <option value="hi">हिन्दी</option>
        <option value="pt-BR">Português</option>
        <option value="id">Indonesia</option>
      </select>
    </div>
  );
}

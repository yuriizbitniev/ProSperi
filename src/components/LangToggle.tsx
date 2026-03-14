"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export function LangToggle() {
  const pathname = usePathname();
  const currentLocale = useLocale();

  const toggleLanguage = () => {
    if (!pathname) return;
    
    const nextLocale = currentLocale === 'en' ? 'ru' : 'en';
    
    // Split the path into segments, remove any empty string from start
    const segments = pathname.split('/').filter(Boolean);
    
    // Check if the first segment is a known locale. If so, remove it.
    if (segments[0] === 'en' || segments[0] === 'ru') {
      segments.shift(); // remove the locale segment
    }
    
    // Default locale (en) is stripped from the URL by default in next-intl
    let switchPath = '';
    if (nextLocale === 'en') {
      switchPath = `/${segments.join('/')}`;
    } else {
      switchPath = `/${nextLocale}${segments.length > 0 ? '/' + segments.join('/') : ''}`;
    }
    
    // Force a full document reload for locale cache bypass
    window.location.href = switchPath;
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm font-medium tracking-wide hover:text-accent transition-colors w-8"
    >
      {currentLocale === 'en' ? 'RU' : 'EN'}
    </button>
  );
}


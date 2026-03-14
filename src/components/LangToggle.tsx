"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export function LangToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const toggleLanguage = () => {
    if (!pathname) return;
    
    // Switch to the opposite locale
    const nextLocale = currentLocale === 'en' ? 'ru' : 'en';
    
    // Set the Next.js locale cookie manually to inform the server of preference
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`;
    
    // Split pathname to swap languages safely
    const segments = pathname.split('/').filter(Boolean);
    
    // Remove current locale from the URL if it's there
    if (segments[0] === 'en' || segments[0] === 'ru') {
      segments.shift(); 
    }
    
    // Generate new path 
    const newPath = nextLocale === 'en' 
      ? `/${segments.join('/')}` 
      : `/${nextLocale}/${segments.join('/')}`;
      
    // Because next-intl intercepts the server routing based on cookies and paths,
    // pushing the router with router.refresh() handles state transitions in 14.x cleanly
    router.push(newPath || '/');
    router.refresh();
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

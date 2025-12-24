import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="CircleDot" className="text-primary" size={28} />
          <span className="text-xl sm:text-2xl font-bold tracking-tight">Яркие Диски</span>
        </div>
        <div className="hidden md:flex gap-4 lg:gap-6 text-sm lg:text-base">
          <button onClick={() => handleScroll('services')} className="hover:text-primary transition">Услуги</button>
          <button onClick={() => handleScroll('portfolio')} className="hover:text-primary transition">Портфолио</button>
          <button onClick={() => handleScroll('about')} className="hover:text-primary transition">О студии</button>
          <button onClick={() => handleScroll('technology')} className="hover:text-primary transition">Технология</button>
          <button onClick={() => handleScroll('prices')} className="hover:text-primary transition">Цены</button>
          <button onClick={() => handleScroll('reviews')} className="hover:text-primary transition">Отзывы</button>
          <button onClick={() => handleScroll('booking')} className="hover:text-primary transition">Контакты</button>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground text-sm lg:text-base px-3 lg:px-4">
            <a href="https://t.me/yarkiediski" target="_blank" rel="noopener noreferrer">
              <Icon name="Send" className="mr-1.5 lg:mr-2" size={16} />
              Записаться
            </a>
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <button onClick={() => handleScroll('services')} className="text-left py-2 hover:text-primary transition text-base">Услуги</button>
            <button onClick={() => handleScroll('portfolio')} className="text-left py-2 hover:text-primary transition text-base">Портфолио</button>
            <button onClick={() => handleScroll('about')} className="text-left py-2 hover:text-primary transition text-base">О студии</button>
            <button onClick={() => handleScroll('technology')} className="text-left py-2 hover:text-primary transition text-base">Технология</button>
            <button onClick={() => handleScroll('prices')} className="text-left py-2 hover:text-primary transition text-base">Цены</button>
            <button onClick={() => handleScroll('reviews')} className="text-left py-2 hover:text-primary transition text-base">Отзывы</button>
            <button onClick={() => handleScroll('booking')} className="text-left py-2 hover:text-primary transition text-base">Контакты</button>
            <Button asChild className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="https://t.me/yarkiediski" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" className="mr-2" size={18} />
                Записаться
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
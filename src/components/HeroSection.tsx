import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4">
      <div className="container mx-auto text-center animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
          Премиальная<br />
          <span className="text-primary">Порошковая Окраска</span><br />
          Автомобильных Дисков
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          м. Домодедовская, АТЦ "Москва"
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center px-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
            <a href="https://t.me/yarkiediski" target="_blank" rel="noopener noreferrer">
              <Icon name="Send" className="mr-2" size={18} />
              Записаться в Telegram
            </a>
          </Button>
          <Button onClick={() => scrollToSection('portfolio')} size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
            Посмотреть работы
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-16 max-w-4xl mx-auto px-4">
          <div className="text-center">
            <Icon name="Award" className="mx-auto mb-3 sm:mb-4 text-primary" size={40} />
            <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">5+ лет</h3>
            <p className="text-sm sm:text-base text-muted-foreground">на рынке</p>
          </div>
          <div className="text-center">
            <Icon name="Users" className="mx-auto mb-3 sm:mb-4 text-primary" size={40} />
            <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">1000+</h3>
            <p className="text-sm sm:text-base text-muted-foreground">довольных клиентов</p>
          </div>
          <div className="text-center">
            <Icon name="ShieldCheck" className="mx-auto mb-3 sm:mb-4 text-primary" size={40} />
            <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">3 года</h3>
            <p className="text-sm sm:text-base text-muted-foreground">гарантия на покрытие</p>
          </div>
        </div>
      </div>
    </section>
  );
}
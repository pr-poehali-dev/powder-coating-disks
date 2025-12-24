import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Премиальная<br />
          <span className="text-primary">Порошковая Окраска</span><br />
          Автомобильных Дисков
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          м. Домодедовская, АТЦ "Москва"
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
            <a href="https://t.me/yarkiediski" target="_blank" rel="noopener noreferrer">
              <Icon name="Send" className="mr-2" size={20} />
              Записаться в Telegram
            </a>
          </Button>
          <Button onClick={() => scrollToSection('portfolio')} size="lg" variant="outline" className="text-lg px-8">
            Посмотреть работы
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <Icon name="Award" className="mx-auto mb-4 text-primary" size={48} />
            <h3 className="text-3xl font-bold mb-2">5+ лет</h3>
            <p className="text-muted-foreground">на рынке</p>
          </div>
          <div className="text-center">
            <Icon name="Users" className="mx-auto mb-4 text-primary" size={48} />
            <h3 className="text-3xl font-bold mb-2">1000+</h3>
            <p className="text-muted-foreground">довольных клиентов</p>
          </div>
          <div className="text-center">
            <Icon name="ShieldCheck" className="mx-auto mb-4 text-primary" size={48} />
            <h3 className="text-3xl font-bold mb-2">3 года</h3>
            <p className="text-muted-foreground">гарантия на покрытие</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="CircleDot" className="text-primary" size={32} />
            <span className="text-2xl font-bold tracking-tight">Яркие Диски</span>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition">Услуги</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition">Портфолио</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition">О студии</button>
            <button onClick={() => scrollToSection('technology')} className="hover:text-primary transition">Технология</button>
            <button onClick={() => scrollToSection('prices')} className="hover:text-primary transition">Цены</button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition">Отзывы</button>
            <button onClick={() => scrollToSection('booking')} className="hover:text-primary transition">Контакты</button>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="https://t.me/yarkiediski" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" className="mr-2" size={18} />
                Записаться
              </a>
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={28} />
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <button onClick={() => scrollToSection('services')} className="text-left py-2 hover:text-primary transition">Услуги</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left py-2 hover:text-primary transition">Портфолио</button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 hover:text-primary transition">О студии</button>
              <button onClick={() => scrollToSection('technology')} className="text-left py-2 hover:text-primary transition">Технология</button>
              <button onClick={() => scrollToSection('prices')} className="text-left py-2 hover:text-primary transition">Цены</button>
              <button onClick={() => scrollToSection('reviews')} className="text-left py-2 hover:text-primary transition">Отзывы</button>
              <button onClick={() => scrollToSection('booking')} className="text-left py-2 hover:text-primary transition">Контакты</button>
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

      {/* Hero Section */}
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

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Полный спектр работ по окраске дисков</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <CardHeader>
                <Icon name="Sparkles" className="mb-4 text-primary" size={40} />
                <CardTitle>Порошковая окраска</CardTitle>
                <CardDescription>Высокопрочное полимерное покрытие с идеальным глянцем</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <CardHeader>
                <Icon name="Wrench" className="mb-4 text-primary" size={40} />
                <CardTitle>Ремонт дисков</CardTitle>
                <CardDescription>Исправление геометрии, сварка трещин, восстановление</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <CardHeader>
                <Icon name="Droplet" className="mb-4 text-primary" size={40} />
                <CardTitle>Пескоструйная обработка</CardTitle>
                <CardDescription>Полная очистка дисков от старого покрытия и коррозии</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <CardHeader>
                <Icon name="Palette" className="mb-4 text-primary" size={40} />
                <CardTitle>Индивидуальный дизайн</CardTitle>
                <CardDescription>Уникальные цвета, градиенты, аэрография</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Покрытия</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Варианты окраски</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/YCAJEA0YCQAASXJMZ2NBMXZZYWRMEMWSMQ/bucket/portfolio-1.jpg"
                  alt="Глянцевое покрытие"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>Глянцевое покрытие</CardTitle>
                <CardDescription>Классический блеск и зеркальная поверхность</CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/YCAJEA0YCQAASXJMZ2NBMXZZYWRMEMWSMQ/bucket/portfolio-2.jpg"
                  alt="Матовое покрытие"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>Матовое покрытие</CardTitle>
                <CardDescription>Стильная бархатистая текстура</CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/YCAJEA0YCQAASXJMZ2NBMXZZYWRMEMWSMQ/bucket/portfolio-3.jpg"
                  alt="Металлик"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>Металлик</CardTitle>
                <CardDescription>Эффектные металлические частицы</CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/YCAJEA0YCQAASXJMZ2NBMXZZYWRMEMWSMQ/bucket/portfolio-4.jpg"
                  alt="Хамелеон"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>Хамелеон</CardTitle>
                <CardDescription>Цвет меняется в зависимости от угла обзора</CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/YCAJEA0YCQAASXJMZ2NBMXZZYWRMEMWSMQ/bucket/portfolio-5.jpg"
                  alt="Candy эффект"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>Candy эффект</CardTitle>
                <CardDescription>Глубокий полупрозрачный цвет</CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/YCAJEA0YCQAASXJMZ2NBMXZZYWRMEMWSMQ/bucket/portfolio-6.jpg"
                  alt="Шагрень"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>Шагрень</CardTitle>
                <CardDescription>Текстурированная структурная поверхность</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">О студии</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
            Яркие Диски — это команда профессионалов с многолетним опытом в порошковой окраске дисков. 
            Мы используем только сертифицированные материалы европейского производства и современное оборудование.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:border-primary transition-all">
              <CardHeader>
                <Icon name="CheckCircle2" className="mx-auto mb-4 text-primary" size={48} />
                <CardTitle className="text-2xl">Качество</CardTitle>
                <CardDescription className="text-base">Европейские порошковые краски премиум-класса</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:border-primary transition-all">
              <CardHeader>
                <Icon name="Zap" className="mx-auto mb-4 text-primary" size={48} />
                <CardTitle className="text-2xl">Скорость</CardTitle>
                <CardDescription className="text-base">Стандартный срок работы — 3-5 дней</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:border-primary transition-all">
              <CardHeader>
                <Icon name="Shield" className="mx-auto mb-4 text-primary" size={48} />
                <CardTitle className="text-2xl">Гарантия</CardTitle>
                <CardDescription className="text-base">3 года на покрытие при соблюдении условий эксплуатации</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:border-primary transition-all">
              <CardHeader>
                <Icon name="ThumbsUp" className="mx-auto mb-4 text-primary" size={48} />
                <CardTitle className="text-2xl">Опыт</CardTitle>
                <CardDescription className="text-base">Более 1000 успешно выполненных проектов</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Технология окраски</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Как мы создаём идеальное покрытие</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:border-primary transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Подготовка</CardTitle>
                <CardDescription>Пескоструйная обработка для полного удаления старого покрытия и коррозии</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:border-primary transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Грунтование</CardTitle>
                <CardDescription>Нанесение специального грунта для максимальной адгезии</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:border-primary transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Окраска</CardTitle>
                <CardDescription>Напыление порошковой краски в специальной камере</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:border-primary transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <CardTitle>Полимеризация</CardTitle>
                <CardDescription>Запекание в печи при температуре 200°C для отверждения покрытия</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Icon name="Info" size={28} />
                  Почему порошковая окраска?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p><span className="font-semibold">Долговечность:</span> Покрытие служит в 3-5 раз дольше обычной краски</p>
                </div>
                <div className="flex gap-3">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p><span className="font-semibold">Стойкость:</span> Устойчивость к сколам, царапинам и химическим реагентам</p>
                </div>
                <div className="flex gap-3">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p><span className="font-semibold">Равномерность:</span> Идеально ровное покрытие без подтёков</p>
                </div>
                <div className="flex gap-3">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p><span className="font-semibold">Экологичность:</span> Без токсичных растворителей и запаха</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Цены</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Прозрачная стоимость без скрытых платежей</p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Порошковая окраска (1 диск)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">R13</span>
                  <span className="font-semibold">1 800 руб.</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">R14</span>
                  <span className="font-semibold">1 900 руб.</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">R15</span>
                  <span className="font-semibold">2 000 руб.</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">R16</span>
                  <span className="font-semibold">2 100 руб.</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">R17</span>
                  <span className="font-semibold">2 200 руб.</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">R18</span>
                  <span className="font-semibold">2 400 руб.</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">R19</span>
                  <span className="font-semibold">2 600 руб.</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">R20</span>
                  <span className="font-semibold">2 800 руб.</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">R21</span>
                  <span className="font-semibold">3 200 руб.</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">R22</span>
                  <span className="font-semibold">3 600 руб.</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Дополнительные работы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Пескоструйная обработка (1 диск)</span>
                  <span className="font-semibold">500 руб.</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Ремонт диска (прокатка)</span>
                  <span className="font-semibold">от 1 500 руб.</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Сварка трещин (1 шт.)</span>
                  <span className="font-semibold">от 2 000 руб.</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Алмазная проточка (1 диск)</span>
                  <span className="font-semibold">3 000 руб.</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Дополнительно:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Цветные лаки алюмахром подбор цвета</span>
                  <span className="font-semibold">+ 3 000 руб.</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Высверливание фальш болтов</span>
                  <span className="font-semibold">+ 1 000 руб.</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Удаление хрома с пластиковых колпачков / шт.</span>
                  <span className="font-semibold">500 руб.</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Снятие / Установка датчиков</span>
                  <span className="font-semibold">1500 руб.</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Удаление хрома / комплект (4 шт.)</span>
                  <span className="font-semibold">12 000 руб.</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Стоимость покраски деталей:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Покраска алюминиевых колпачков 4 шт.</span>
                  <span className="font-semibold">2 500 руб.</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Покраска суппортов (1 ось / 2 суппорта и 2 скобы)</span>
                  <span className="font-semibold">6 000 руб.</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Покраска суппортов полный комплект (2 оси / 4 суппорта и 4 скобы)</span>
                  <span className="font-semibold">12 000 руб.</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Отзывы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Что говорят наши клиенты</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Александр М.</CardTitle>
                    <div className="flex gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon key={star} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Отличная работа! Покрасили диски в матовый черный. Выглядят просто супер. 
                  Сделали быстро, качественно, цена адекватная. Рекомендую!"
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Дмитрий К.</CardTitle>
                    <div className="flex gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon key={star} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Делал у ребят candy эффект. Получилось просто огонь! Диски переливаются на солнце. 
                  Все знакомые спрашивают где делал. Профессионалы своего дела."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Сергей П.</CardTitle>
                    <div className="flex gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon key={star} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Обращался для ремонта и покраски дисков после зимы. Сделали прокатку, заварили трещину, 
                  покрасили. Диски как новые! Спасибо за качественную работу."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Запись и контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Свяжитесь с нами любым удобным способом</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">м. Домодедовская, АТЦ "Москва"</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Сб: 9:00 - 20:00</p>
                    <p className="text-muted-foreground">Вс: 10:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Записаться онлайн</CardTitle>
                <CardDescription>Напишите нам в Telegram для записи</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Самый быстрый способ записаться — написать нам в Telegram. 
                  Мы ответим в течение нескольких минут и подберём удобное время.
                </p>
                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="https://t.me/yarkiediski" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" className="mr-2" size={20} />
                    Написать в Telegram
                  </a>
                </Button>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    Или позвоните нам по телефону +7 (999) 123-45-67
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Яркие Диски. Все права защищены.</p>
          <p className="mt-2 text-sm">Премиальная порошковая окраска автомобильных дисков в Москве</p>
        </div>
      </footer>
    </div>
  );
}

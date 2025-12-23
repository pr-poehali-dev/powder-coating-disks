import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://functions.poehali.dev/a737aba3-9201-4603-bc77-adc268cf2ef0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время.",
        });
        setFormData({ name: '', phone: '', service: '', date: '', comment: '' });
      } else {
        toast({
          title: "Ошибка",
          description: "Не удалось отправить заявку. Попробуйте позже.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <Button onClick={() => scrollToSection('booking')} className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground">
              Записаться
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
              <Button onClick={() => scrollToSection('booking')} className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                Записаться
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
            <Button onClick={() => scrollToSection('booking')} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
              Записаться онлайн
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Примеры наших работ</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="https://cdn.poehali.dev/projects/39e5a194-0688-4d64-83fb-ccd68437310a/files/e650d0ff-4b39-4735-a562-b4d0e1fc61e7.jpg" 
                alt="Золотая порошковая окраска диска"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Золото металлик</h3>
                  <p className="text-muted-foreground">Премиум покрытие</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="https://cdn.poehali.dev/projects/39e5a194-0688-4d64-83fb-ccd68437310a/files/4a428a6f-611d-43e1-b06f-c2139593cdba.jpg" 
                alt="Матовая черная порошковая окраска диска"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Матовый черный</h3>
                  <p className="text-muted-foreground">Спортивный стиль</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="https://cdn.poehali.dev/projects/39e5a194-0688-4d64-83fb-ccd68437310a/files/d27003a7-8f65-4e3e-b759-511d0f503743.jpg" 
                alt="Серебряная хромированная окраска диска"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Серебро хром</h3>
                  <p className="text-muted-foreground">Классика</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">О студии</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Яркие Диски</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Мы специализируемся на премиальной порошковой окраске автомобильных дисков с 2016 года. 
                Наша студия находится в АТЦ "Москва" рядом с м. Домодедовская.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                За годы работы мы обработали более 5000 комплектов дисков для владельцев автомобилей 
                премиум-сегмента: Mercedes, BMW, Audi, Porsche, Bentley и других.
              </p>
              <p className="text-lg text-muted-foreground">
                Используем только сертифицированные материалы европейских производителей 
                и предоставляем гарантию 3 года на все виды покрытий.
              </p>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Trophy" className="text-primary" size={28} />
                    Качество
                  </CardTitle>
                  <CardDescription>Европейские материалы и технологии</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Clock" className="text-primary" size={28} />
                    Скорость
                  </CardTitle>
                  <CardDescription>Окраска за 2-3 дня с момента приёма</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Heart" className="text-primary" size={28} />
                    Сервис
                  </CardTitle>
                  <CardDescription>Индивидуальный подход к каждому клиенту</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Технология окраски</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Процесс работы от приёма до выдачи</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Осмотр и диагностика</CardTitle>
                <CardDescription>Оценка состояния дисков, выявление дефектов</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Подготовка</CardTitle>
                <CardDescription>Пескоструйная обработка, удаление старого покрытия</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Окраска</CardTitle>
                <CardDescription>Нанесение порошкового покрытия в камере</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <CardTitle>Полимеризация</CardTitle>
                <CardDescription>Запекание при 200°C для максимальной прочности</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Цены</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Прозрачное ценообразование</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-4 text-left font-bold border border-border">Вид покраски</th>
                  <th className="p-4 text-center font-bold border border-border" colSpan={9}>Диаметр</th>
                </tr>
                <tr className="bg-primary/90 text-primary-foreground">
                  <th className="p-3 text-left font-semibold border border-border"></th>
                  <th className="p-3 text-center font-semibold border border-border">до 15</th>
                  <th className="p-3 text-center font-semibold border border-border">16</th>
                  <th className="p-3 text-center font-semibold border border-border">17</th>
                  <th className="p-3 text-center font-semibold border border-border">18</th>
                  <th className="p-3 text-center font-semibold border border-border">19</th>
                  <th className="p-3 text-center font-semibold border border-border">20</th>
                  <th className="p-3 text-center font-semibold border border-border">21</th>
                  <th className="p-3 text-center font-semibold border border-border">22</th>
                  <th className="p-3 text-center font-semibold border border-border">23</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-muted/50 transition">
                  <td className="p-3 border border-border font-medium">В один цвет / комплект (4 шт.)</td>
                  <td className="p-3 border border-border text-center">9 000</td>
                  <td className="p-3 border border-border text-center">10 000</td>
                  <td className="p-3 border border-border text-center">11 000</td>
                  <td className="p-3 border border-border text-center">12 000</td>
                  <td className="p-3 border border-border text-center">13 000</td>
                  <td className="p-3 border border-border text-center">14 000</td>
                  <td className="p-3 border border-border text-center">16 000</td>
                  <td className="p-3 border border-border text-center">18 000</td>
                  <td className="p-3 border border-border text-center">20 000</td>
                </tr>
                <tr className="hover:bg-muted/50 transition">
                  <td className="p-3 border border-border font-medium">С цветным кантом / комплект (4 шт.)</td>
                  <td className="p-3 border border-border text-center">13 000</td>
                  <td className="p-3 border border-border text-center">14 000</td>
                  <td className="p-3 border border-border text-center">15 000</td>
                  <td className="p-3 border border-border text-center">16 000</td>
                  <td className="p-3 border border-border text-center">17 000</td>
                  <td className="p-3 border border-border text-center">18 000</td>
                  <td className="p-3 border border-border text-center">20 000</td>
                  <td className="p-3 border border-border text-center">22 000</td>
                  <td className="p-3 border border-border text-center">24 000</td>
                </tr>
                <tr className="hover:bg-muted/50 transition">
                  <td className="p-3 border border-border font-medium">С алмазной шлифовкой / комплект (4 шт.)</td>
                  <td className="p-3 border border-border text-center">19 000</td>
                  <td className="p-3 border border-border text-center">20 000</td>
                  <td className="p-3 border border-border text-center">21 000</td>
                  <td className="p-3 border border-border text-center">22 000</td>
                  <td className="p-3 border border-border text-center">23 000</td>
                  <td className="p-3 border border-border text-center">24 000</td>
                  <td className="p-3 border border-border text-center">25 000</td>
                  <td className="p-3 border border-border text-center">26 000</td>
                  <td className="p-3 border border-border text-center">27 000</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 border border-border font-medium">1 диск</td>
                  <td colSpan={9} className="p-3 border border-border text-right text-muted-foreground">35%</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 border border-border font-medium">2 диска</td>
                  <td colSpan={9} className="p-3 border border-border text-right text-muted-foreground">60%</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 border border-border font-medium">3 диска</td>
                  <td colSpan={9} className="p-3 border border-border text-right text-muted-foreground">80%</td>
                </tr>
              </tbody>
            </table>
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
                  <span className="text-muted-foreground">Нанесение логотипа на суппорта</span>
                  <span className="font-semibold">2 000 руб.</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Покраска дворников 2 шт.</span>
                  <span className="font-semibold">2 500 руб.</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Покраска выхлопных насадок</span>
                  <span className="font-semibold">от 1 500 руб.</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm">* Ранее окрашенные диски порошком смывка от 5 000 руб.</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-primary fill-primary" size={20} />
                  ))}
                </div>
                <CardTitle>Александр</CardTitle>
                <CardDescription>BMW X5</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Отличная работа! Покрасили диски в матовый черный, результат превзошел ожидания. 
                  Качество покрытия на высоте, уже 2 года — ни единой царапины.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-primary fill-primary" size={20} />
                  ))}
                </div>
                <CardTitle>Дмитрий</CardTitle>
                <CardDescription>Mercedes E-Class</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Сделали хромирование дисков — выглядят как новые! Ребята профессионалы своего дела, 
                  всё четко, в срок, цена адекватная.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-primary fill-primary" size={20} />
                  ))}
                </div>
                <CardTitle>Елена</CardTitle>
                <CardDescription>Audi Q7</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Покрасили диски в золотой металлик — смотрятся шикарно! Очень довольна результатом, 
                  всем рекомендую эту студию.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Онлайн-запись</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Оставьте заявку, и мы свяжемся с вами для подтверждения
          </p>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input 
                    id="name" 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Услуга</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="powder">Порошковая окраска</SelectItem>
                      <SelectItem value="rubber">Жидкая резина</SelectItem>
                      <SelectItem value="chrome">Хромирование</SelectItem>
                      <SelectItem value="repair">Ремонт дисков</SelectItem>
                      <SelectItem value="sandblast">Пескоструйная обработка</SelectItem>
                      <SelectItem value="custom">Индивидуальный дизайн</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Предпочтительная дата</Label>
                  <Input 
                    id="date" 
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comment">Комментарий (необязательно)</Label>
                  <Textarea 
                    id="comment" 
                    placeholder="Расскажите о желаемом цвете, особых пожеланиях..."
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    rows={4}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Icon name="MapPin" className="text-primary" size={24} />
                <span className="text-lg">м. Домодедовская, АТЦ "Москва"</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="Phone" className="text-primary" size={24} />
                <span className="text-lg">+7 (958) 559-27-42</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="Clock" className="text-primary" size={24} />
                <span className="text-lg">Пн-Сб: 10:00 - 21:00, Вс: 10:00 - 20:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Яркие Диски. Все права защищены.</p>
          <p className="mt-2">Премиальная порошковая окраска автомобильных дисков в Москве</p>
        </div>
      </footer>
    </div>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ServicesSection() {
  return (
    <>
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
    </>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function PricesReviewsBooking() {
  return (
    <>
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
    </>
  );
}

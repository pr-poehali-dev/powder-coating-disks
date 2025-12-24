import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border py-4 px-4">
        <div className="container mx-auto">
          <Button onClick={() => navigate('/')} variant="ghost">
            <Icon name="ArrowLeft" className="mr-2" size={20} />
            Вернуться на главную
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Политика конфиденциальности</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>1. Общие положения</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Настоящая Политика конфиденциальности персональных данных (далее — Политика) 
              действует в отношении всей информации, которую ИП Ибрагимов Е.М. (далее — Оператор) 
              может получить о Пользователе во время использования сайта yarkiediski.ru.
            </p>
            <p>
              Использование сайта означает безоговорочное согласие Пользователя с настоящей 
              Политикой и указанными в ней условиями обработки его персональной информации.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>2. Персональные данные</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>2.1.</strong> Персональные данные — любая информация, относящаяся к прямо или 
              косвенно определенному или определяемому физическому лицу (субъекту персональных данных).
            </p>
            <p>
              <strong>2.2.</strong> Оператор может обрабатывать следующие персональные данные:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Фамилия, имя, отчество</li>
              <li>Номер телефона</li>
              <li>Адрес электронной почты</li>
              <li>Информация о предпочтениях и интересах пользователя</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>3. Цели обработки персональных данных</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>3.1.</strong> Персональные данные Пользователя обрабатываются в целях:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Предоставления информации об услугах</li>
              <li>Связи с Пользователем для уточнения деталей заказа</li>
              <li>Обработки заявок и заказов Пользователя</li>
              <li>Информирования Пользователя о новых услугах и акциях</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>4. Правовые основания обработки</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>4.1.</strong> Правовыми основаниями обработки персональных данных являются:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Федеральный закон от 27.07.2006 № 152-ФЗ «О персональных данных»</li>
              <li>Согласие Пользователя на обработку персональных данных</li>
              <li>Договоры, заключаемые между Оператором и Пользователем</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>5. Порядок и условия обработки</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>5.1.</strong> Обработка персональных данных осуществляется с соблюдением 
              принципов и правил, установленных Федеральным законом «О персональных данных».
            </p>
            <p>
              <strong>5.2.</strong> Персональные данные обрабатываются в течение срока, 
              необходимого для достижения целей обработки.
            </p>
            <p>
              <strong>5.3.</strong> Оператор обеспечивает защиту персональных данных от 
              неправомерного или случайного доступа, уничтожения, изменения, блокирования.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>6. Права субъекта персональных данных</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>6.1.</strong> Пользователь имеет право:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Получать информацию, касающуюся обработки его персональных данных</li>
              <li>Требовать уточнения, блокирования или уничтожения персональных данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>Обжаловать действия Оператора в уполномоченный орган по защите прав субъектов персональных данных</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>7. Файлы cookie</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>7.1.</strong> Сайт может использовать технологию cookie для улучшения 
              работы сайта и предоставления персонализированного опыта.
            </p>
            <p>
              <strong>7.2.</strong> Пользователь может управлять использованием cookie в 
              настройках своего браузера.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>8. Контактная информация</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>Индивидуальный предприниматель:</strong> Ибрагимов Е.М.
            </p>
            <p>
              <strong>Телефон:</strong> +7 (958) 559-27-42
            </p>
            <p>
              <strong>Telegram:</strong> @yarkiediski
            </p>
            <p>
              <strong>Адрес:</strong> м. Домодедовская, АТЦ "Москва"
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>9. Заключительные положения</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>9.1.</strong> Оператор вправе вносить изменения в настоящую Политику. 
              Новая редакция Политики вступает в силу с момента ее размещения на сайте.
            </p>
            <p>
              <strong>9.2.</strong> Действующая редакция Политики постоянно доступна на странице по адресу: 
              yarkiediski.ru/privacy
            </p>
            <p className="pt-4">
              <strong>Дата последнего обновления:</strong> 24.12.2024
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Terms() {
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
        <h1 className="text-4xl font-bold mb-8">Пользовательское соглашение</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>1. Общие положения</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>1.1.</strong> Настоящее Пользовательское соглашение (далее — Соглашение) 
              регулирует отношения между ИП Ибрагимов Е.М. (далее — Исполнитель) и физическими 
              или юридическими лицами (далее — Заказчик) при оказании услуг по порошковой окраске 
              и ремонту автомобильных дисков.
            </p>
            <p>
              <strong>1.2.</strong> Используя сайт yarkiediski.ru и оставляя заявку на услуги, 
              Заказчик соглашается с условиями настоящего Соглашения.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>2. Предмет соглашения</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>2.1.</strong> Исполнитель обязуется оказать Заказчику услуги по:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Порошковой окраске автомобильных дисков</li>
              <li>Ремонту и реставрации дисков</li>
              <li>Индивидуальному дизайну и кастомизации</li>
              <li>Пескоструйной обработке</li>
              <li>Другим услугам согласно прайс-листу</li>
            </ul>
            <p>
              <strong>2.2.</strong> Заказчик обязуется принять и оплатить оказанные услуги.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>3. Порядок оказания услуг</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>3.1.</strong> Заказчик оставляет заявку через сайт, по телефону или через Telegram.
            </p>
            <p>
              <strong>3.2.</strong> Исполнитель согласовывает с Заказчиком стоимость, сроки и детали заказа.
            </p>
            <p>
              <strong>3.3.</strong> После согласования Заказчик передает диски Исполнителю.
            </p>
            <p>
              <strong>3.4.</strong> Исполнитель выполняет работы в согласованные сроки.
            </p>
            <p>
              <strong>3.5.</strong> По завершении работ Заказчик принимает и оплачивает заказ.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>4. Стоимость и оплата</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>4.1.</strong> Стоимость услуг определяется согласно прайс-листу, 
              размещенному на сайте.
            </p>
            <p>
              <strong>4.2.</strong> Окончательная стоимость согласовывается перед началом работ.
            </p>
            <p>
              <strong>4.3.</strong> Оплата производится наличными или безналичным способом 
              после выполнения работ.
            </p>
            <p>
              <strong>4.4.</strong> При необходимости предварительной оплаты это 
              оговаривается отдельно.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>5. Сроки выполнения работ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>5.1.</strong> Стандартный срок выполнения работ — от 3 до 7 рабочих дней.
            </p>
            <p>
              <strong>5.2.</strong> Точные сроки согласовываются индивидуально и зависят от:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Вида и объема работ</li>
              <li>Текущей загруженности</li>
              <li>Состояния дисков</li>
            </ul>
            <p>
              <strong>5.3.</strong> Исполнитель информирует Заказчика о готовности заказа.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>6. Гарантии</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>6.1.</strong> На порошковое покрытие предоставляется гарантия 3 года 
              при соблюдении условий эксплуатации.
            </p>
            <p>
              <strong>6.2.</strong> Гарантия не распространяется на:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Механические повреждения</li>
              <li>Химические воздействия (кислоты, щелочи)</li>
              <li>Нарушение правил эксплуатации</li>
              <li>Повреждения, полученные при шиномонтаже</li>
            </ul>
            <p>
              <strong>6.3.</strong> При выявлении гарантийного случая Исполнитель 
              устраняет дефекты бесплатно.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>7. Ответственность сторон</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>7.1.</strong> Исполнитель несет ответственность за качество 
              выполненных работ в соответствии с действующим законодательством РФ.
            </p>
            <p>
              <strong>7.2.</strong> Исполнитель не несет ответственности за скрытые 
              дефекты дисков, выявленные в процессе работы.
            </p>
            <p>
              <strong>7.3.</strong> Заказчик несет ответственность за предоставление 
              достоверной информации о состоянии дисков.
            </p>
            <p>
              <strong>7.4.</strong> За неисполнение обязательств стороны несут 
              ответственность в соответствии с законодательством РФ.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>8. Права потребителя</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>8.1.</strong> Заказчик имеет право отказаться от услуг до начала 
              выполнения работ без объяснения причин.
            </p>
            <p>
              <strong>8.2.</strong> Права потребителей защищены Законом РФ «О защите 
              прав потребителей» от 07.02.1992 № 2300-1.
            </p>
            <p>
              <strong>8.3.</strong> При некачественном оказании услуг Заказчик вправе:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Потребовать безвозмездного устранения недостатков</li>
              <li>Потребовать соответствующего уменьшения цены</li>
              <li>Отказаться от оплаты услуг при существенных нарушениях</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>9. Хранение дисков</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>9.1.</strong> Исполнитель обеспечивает сохранность дисков в период 
              выполнения работ.
            </p>
            <p>
              <strong>9.2.</strong> Готовые диски хранятся бесплатно в течение 14 дней 
              с момента уведомления о готовности.
            </p>
            <p>
              <strong>9.3.</strong> При невозможности получения дисков в указанный срок 
              Заказчик обязан уведомить Исполнителя.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>10. Разрешение споров</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>10.1.</strong> Все споры решаются путем переговоров.
            </p>
            <p>
              <strong>10.2.</strong> При невозможности достижения согласия споры 
              рассматриваются в судебном порядке по месту нахождения Исполнителя.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>11. Контактная информация</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>Индивидуальный предприниматель:</strong> Ибрагимов Е.М.
            </p>
            <p>
              <strong>ИНН:</strong> 622002925780
            </p>
            <p>
              <strong>ОГРНИП:</strong> 325774600429786
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
            <p>
              <strong>Режим работы:</strong> Пн-Сб: 10:00 - 21:00, Вс: 10:00 - 20:00
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
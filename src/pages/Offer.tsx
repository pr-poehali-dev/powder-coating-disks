import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Offer() {
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
        <h1 className="text-4xl font-bold mb-8">Публичная оферта</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Договор оказания услуг</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Настоящий документ является официальным предложением (публичной офертой) 
              Индивидуального предпринимателя Ибрагимова Е.М. (далее — Исполнитель) 
              заключить Договор оказания услуг по порошковой окраске и ремонту 
              автомобильных дисков.
            </p>
            <p>
              В соответствии со статьей 437 Гражданского кодекса Российской Федерации 
              данный документ является публичной офертой, и в случае принятия изложенных 
              ниже условий физическое или юридическое лицо, производящее акцепт этой оферты, 
              становится Заказчиком (в соответствии с пунктом 3 статьи 438 ГК РФ акцепт 
              оферты равносилен заключению Договора на условиях, изложенных в оферте).
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>1. Термины и определения</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>Оферта</strong> — публичное предложение Исполнителя, адресованное 
              неопределенному кругу лиц, заключить договор оказания услуг на условиях, 
              содержащихся в настоящей оферте.
            </p>
            <p>
              <strong>Акцепт</strong> — полное и безоговорочное принятие Заказчиком условий 
              настоящей оферты.
            </p>
            <p>
              <strong>Заказчик</strong> — физическое или юридическое лицо, принявшее условия 
              настоящей оферты и передавшее диски Исполнителю для выполнения работ.
            </p>
            <p>
              <strong>Услуги</strong> — порошковая окраска, ремонт, реставрация, хромирование 
              и другие виды работ с автомобильными дисками согласно прайс-листу.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>2. Предмет договора</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>2.1.</strong> Исполнитель обязуется оказать Заказчику услуги по 
              обработке автомобильных дисков, а Заказчик обязуется принять и оплатить 
              эти услуги.
            </p>
            <p>
              <strong>2.2.</strong> Перечень услуг и их стоимость указаны в прайс-листе 
              на сайте yarkiediski.ru.
            </p>
            <p>
              <strong>2.3.</strong> Характер и объем работ определяются индивидуально 
              при приеме заказа на основании осмотра дисков и пожеланий Заказчика.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>3. Акцепт оферты</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>3.1.</strong> Акцептом настоящей оферты является:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Оставление заявки через сайт, телефон или Telegram</li>
              <li>Передача дисков Исполнителю для выполнения работ</li>
              <li>Оплата услуг Исполнителя</li>
            </ul>
            <p>
              <strong>3.2.</strong> Совершая действия, указанные в п. 3.1, Заказчик 
              подтверждает, что ознакомлен и согласен с условиями настоящей оферты.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>4. Стоимость и порядок оплаты</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>4.1.</strong> Стоимость услуг определяется на основании прайс-листа 
              и согласовывается с Заказчиком до начала работ.
            </p>
            <p>
              <strong>4.2.</strong> Цены указаны в рублях РФ и включают все необходимые 
              материалы и работы (если иное не оговорено отдельно).
            </p>
            <p>
              <strong>4.3.</strong> Оплата производится по факту выполнения работ 
              наличным или безналичным способом.
            </p>
            <p>
              <strong>4.4.</strong> Исполнитель вправе изменить стоимость услуг в 
              одностороннем порядке с обязательным уведомлением Заказчика до начала работ.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>5. Права и обязанности Исполнителя</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>5.1.</strong> Исполнитель обязуется:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Качественно выполнить работы в согласованные сроки</li>
              <li>Использовать качественные материалы и оборудование</li>
              <li>Обеспечить сохранность дисков в период выполнения работ</li>
              <li>Уведомить Заказчика о готовности заказа</li>
              <li>Предоставить гарантию на выполненные работы</li>
            </ul>
            <p>
              <strong>5.2.</strong> Исполнитель имеет право:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Отказать в выполнении работ при обнаружении критических дефектов дисков</li>
              <li>Изменить сроки выполнения при наличии объективных причин с уведомлением Заказчика</li>
              <li>Потребовать предоплату при выполнении работ на крупную сумму</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>6. Права и обязанности Заказчика</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>6.1.</strong> Заказчик обязуется:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Предоставить достоверную информацию о состоянии дисков</li>
              <li>Своевременно оплатить оказанные услуги</li>
              <li>Забрать готовые диски в течение 14 дней с момента уведомления</li>
              <li>Соблюдать условия гарантии</li>
            </ul>
            <p>
              <strong>6.2.</strong> Заказчик имеет право:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Получить полную информацию об услугах и их стоимости</li>
              <li>Отказаться от услуг до начала работ</li>
              <li>Требовать качественного выполнения работ</li>
              <li>Получить гарантийное обслуживание при выявлении дефектов</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>7. Гарантии</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>7.1.</strong> На порошковое покрытие предоставляется гарантия 3 года.
            </p>
            <p>
              <strong>7.2.</strong> Гарантия действует при соблюдении условий эксплуатации 
              и не распространяется на механические повреждения.
            </p>
            <p>
              <strong>7.3.</strong> Гарантийное обслуживание осуществляется бесплатно при 
              предъявлении документа, подтверждающего оказание услуг.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>8. Ответственность сторон</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>8.1.</strong> За неисполнение или ненадлежащее исполнение обязательств 
              по настоящему Договору стороны несут ответственность в соответствии с 
              действующим законодательством РФ.
            </p>
            <p>
              <strong>8.2.</strong> Исполнитель не несет ответственности за скрытые дефекты 
              дисков, выявленные в процессе работы.
            </p>
            <p>
              <strong>8.3.</strong> Исполнитель не несет ответственности за невозможность 
              выполнения работ по причинам форс-мажора.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>9. Разрешение споров</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>9.1.</strong> Все споры и разногласия решаются путем переговоров.
            </p>
            <p>
              <strong>9.2.</strong> В случае невозможности урегулирования споры 
              рассматриваются в судебном порядке в соответствии с законодательством РФ.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>10. Срок действия оферты</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>10.1.</strong> Настоящая оферта вступает в силу с момента 
              размещения на сайте и действует до момента отзыва оферты Исполнителем.
            </p>
            <p>
              <strong>10.2.</strong> Исполнитель оставляет за собой право внести 
              изменения в условия оферты или отозвать оферту в любой момент.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>11. Реквизиты Исполнителя</CardTitle>
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
              <strong>Дата публикации:</strong> 24.12.2024
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
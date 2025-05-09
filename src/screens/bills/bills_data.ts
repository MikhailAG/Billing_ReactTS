import type {Bill} from "../../types.ts";

const bills: Bill[] = [
    {
        id: 400,
        subscriber: 'Владимир Дубов',
        services: 'Пакет "Корпоративный"',
        total: 350,
        status: 'Не оплачен',
        date_at: '-'
    },
    {
        id: 399,
        subscriber: 'Максим Губин',
        services: 'Пакет "Корпоративный + и др.',
        total: 890,
        status: 'Оплачен',
        date_at: '05.05.2025'
    },
    {
        id: 398,
        subscriber: 'Ангелина Осипова',
        services: 'Пакет "Корпоративный +',
        total: 550,
        status: 'Не оплачен',
        date_at: '-'
    },
    {
        id: 397,
        subscriber: 'Марина Гончарова',
        services: 'Пакет "Корпоративный +',
        total: 550,
        status: 'Не оплачен',
        date_at: '-'
    },
    {
        id: 396,
        subscriber: 'Иван Абрамов',
        services: 'Пакет "Стажер',
        total: 250,
        status: 'Оплачен',
        date_at: '04.05.2025'
    },
    {
        id: 395,
        subscriber: 'Глеб Голубин',
        services: 'Пакет "Корпоративный" и др.',
        total: 650,
        status: 'Не оплачен',
        date_at: '-'
    },
    {
        id: 394,
        subscriber: 'Степан Горбатенко',
        services: 'Пакет "Роуминг +" и др.',
        total: 1670,
        status: 'Оплачен',
        date_at: '04.05.2025'
    },
    {
        id: 393,
        subscriber: 'Владимир Черных',
        services: 'Пакет "Корпоративный" и др.',
        total: 750,
        status: 'Оплачен',
        date_at: '03.05.2025'
    },
    {
        id: 392,
        subscriber: 'Александра Дориман',
        services: 'Пакет "Роуминг +"',
        total: 1000,
        status: 'Оплачен',
        date_at: '03.05.2025'
    },
    {
        id: 391,
        subscriber: 'Михаил Петросян',
        services: 'Пакет "Стажер +"',
        total: 350,
        status: 'Оплачен',
        date_at: '03.05.2025'
    },
    {
        id: 390,
        subscriber: 'Антон Михайлов',
        services: 'Пакет "Корпоративный"',
        total: 350,
        status: 'Не оплачен',
        date_at: '-'
    },
];
const data = {
    result: bills,
    total: 400,
    page: 40
}

export {data}
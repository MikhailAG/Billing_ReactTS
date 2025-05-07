import type {Bill} from "../../types.ts";

const bills: Bill[] = [
    {
        id: 400,
        subscriber: 'Владимир Дубов',
        services: '15 Гб 100 Мин',
        total: 350,
        status: 'Не оплачен',
        date_at: '-'
    },
    {
        id: 399,
        subscriber: 'Максим Губин',
        services: '20 Гб 500 Мин',
        total: 550,
        status: 'Оплачен',
        date_at: '05.05.2025'
    },
    {
        id: 398,
        subscriber: 'Ангелина Осипова',
        services: '20 Гб 500 Мин',
        total: 550,
        status: 'Не оплачен',
        date_at: '-'
    },
    {
        id: 397,
        subscriber: 'Марина Гончарова',
        services: '20 Гб 500 Мин',
        total: 550,
        status: 'Не оплачен',
        date_at: '-'
    },
    {
        id: 396,
        subscriber: 'Иван Абрамов',
        services: '15 Гб 100 Мин',
        total: 350,
        status: 'Оплачен',
        date_at: '04.05.2025'
    },
    {
        id: 395,
        subscriber: 'Глеб Голубин',
        services: '15 Гб 100 Мин',
        total: 350,
        status: 'Не оплачен',
        date_at: '-'
    },
    {
        id: 394,
        subscriber: 'Степан Горбатенко',
        services: '10 Гб 100 Мин',
        total: 300,
        status: 'Оплачен',
        date_at: '04.05.2025'
    },
    {
        id: 393,
        subscriber: 'Владимир Черных',
        services: '15 Гб 100 Мин',
        total: 350,
        status: 'Оплачен',
        date_at: '03.05.2025'
    },
    {
        id: 392,
        subscriber: 'Александра Дориман',
        services: '20 Гб 500 Мин',
        total: 550,
        status: 'Оплачен',
        date_at: '03.05.2025'
    },
    {
        id: 391,
        subscriber: 'Михаил Петросян',
        services: '20 Гб 500 Мин',
        total: 550,
        status: 'Оплачен',
        date_at: '03.05.2025'
    },
    {
        id: 390,
        subscriber: 'Антон Михайлов',
        services: '20 Гб 500 Мин',
        total: 550,
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
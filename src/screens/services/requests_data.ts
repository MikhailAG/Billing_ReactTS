import type {Service} from "../../types.ts";

const services: Service[] = [
    {
        id: 233,
        minutes: 150,
        gigabytes: 20,
        cost: 550,
        name: 'Пакет "Корпоративный +"',
        status: 'Активная',
        date_at: '01.01.2025'
    },
    {
        id: 215,
        minutes: 250,
        gigabytes: 10,
        cost: 350,
        name: 'Пакет "Корпоративный"',
        status: 'Неактивная',
        date_at: '01.01.2024'
    },
    {
        id: 154,
        minutes: 150,
        gigabytes: 20,
        cost: 350,
        name: 'Пакет "Корпоративный"',
        status: 'Неактивная',
        date_at: '12.05.2023'
    },
]
const data = {
    result: services,
    total: 3,
    page: 1
}

export {data}
import type {Request} from "../../types.ts";

const requests: Request[] = [
    {
        id: 233,
        full_name: 'Михаил Терешин',
        status: 'В обработке',
        date_at: '07.05.2025',
        type: 'Подключение',
        comment: 'Гб побольше, минут поменьше',
    },
    {
        id: 215,
        full_name: 'Михаил Терешин',
        status: 'Закрыта',
        date_at: '02.11.2024',
        type: 'Изменение',
        comment: '+10 Гб',
    },
    {
        id: 154,
        full_name: 'Михаил Терешин',
        status: 'Закрыта',
        date_at: '15.07.2024',
        type: 'Подключение',
        comment: '20 Гб 100 Мин',
    },
]

export {requests}
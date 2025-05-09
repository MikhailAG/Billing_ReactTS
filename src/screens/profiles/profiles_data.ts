import type {Profile} from "../../types.ts";

const profiles: Profile[] = [
    {
        id: 565,
        full_name: 'Антон Михайлов',
        services: 'Пакет "Корпоративный"',
        job_title: 'Грузчик',
        table_number: 'G-565-065',
        status: 'Активный',
        contact_information: '+7 (926) 016-80-10'
    },
    {
        id: 564,
        full_name: 'Елена Васильева',
        services: 'Пакет "Корпоративный"',
        job_title: 'Оператор',
        table_number: 'O-564-011',
        status: 'Активный',
        contact_information: '+7 (916) 543-11-33'
    },
    {
        id: 563,
        full_name: 'Иван Петров',
        services: 'Пакет "Корпоративный +"',
        job_title: 'Курьер',
        table_number: 'K-563-042',
        status: 'Активный',
        contact_information: '+7 (916) 432-34-43'
    },
    {
        id: 562,
        full_name: 'Мария Сидорова',
        services: 'Пакет "Корпоративный +" и др.',
        job_title: 'Менеджер',
        table_number: 'ME-562-021',
        status: 'Активный',
        contact_information: '+7 (966) 011-45-33'
    },
    {
        id: 561,
        full_name: 'Дмитрий Романов',
        services: 'Пакет "Корпоративный +" и др.',
        job_title: 'Программист',
        table_number: 'Dev-561-014',
        status: 'Активный',
        contact_information: '+7 (906) 145-67-84'
    },
    {
        id: 560,
        full_name: 'Анна Иванова',
        services: 'Пакет "Стажер +"',
        job_title: 'Аналитик',
        table_number: 'A-560-002',
        status: 'Активный',
        contact_information: '+7 (916) 556-84-15'
    },
    {
        id: 559,
        full_name: 'Сергей Лебедев',
        services: 'Пакет "Корпоративный" и др.',
        job_title: 'Дизайнер',
        table_number: 'D-559-004',
        status: 'Неактивный',
        contact_information: '+7 (926) 132-65-67'
    },
    {
        id: 558,
        full_name: 'Ольга Кузнецова',
        services: 'Пакет "Стажер" и др.',
        job_title: 'Маркетолог',
        table_number: 'MA-558-054',
        status: 'Активный',
        contact_information: '+7 (916) 907-68-12'
    },
    {
        id: 557,
        full_name: 'Роман Тихонов',
        services: 'Пакет "Стажер"',
        job_title: 'Юрист',
        table_number: 'L-557-007',
        status: 'Активный',
        contact_information: '+7 (904) 324-67-21'
    },
    {
        id: 556,
        full_name: 'Виктория Смирнова',
        services: 'Пакет "Корпоративный"',
        job_title: 'HR-менеджер',
        table_number: 'H-556-001',
        status: 'Неактивный',
        contact_information: '+7 (916) 231-43-78'
    }
];
const data = {
    result: profiles,
    total: 560,
    page: 56
}

export {data}
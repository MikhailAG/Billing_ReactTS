import MyTable from "../../components/table.tsx";
import {profiles} from "./profiles_data.ts";

const headers = [
    "ID профиля",
    "ФИО",
    "Услуги",
    "Должность",
    "Табельный номер",
    "Контактные данные",
    "Статус профиля",
];
const dataKeys = [
    "id",
    "full_name",
    "services",
    "job_title",
    "table_number",
    "contact_information",
    "status",
];

const Profiles = () => {
    return (
        <MyTable name='Профили абонентов' headers={headers} dataKeys={dataKeys} count={565} data={profiles}
                 pages={[56, 55, 54, 53, 52]}/>
    );
};

export default Profiles;

import MyTable from "../../components/table.tsx";
import {bills} from "./bills_data.ts";

const headers = [
    "ID Счета",
    "Абонент",
    "Услуги",
    "Сумма",
    "Статус оплаты",
    "Дата оплаты",
];
const dataKeys = [
    "id",
    "subscriber",
    "services",
    "total",
    "status",
    "date_at",
];

const Index = () => {
    return (
        <MyTable name='Счета' headers={headers} dataKeys={dataKeys} count={401} data={bills}
                 pages={[40, 39, 38, 37, 36]}/>
    );
};

export default Index;

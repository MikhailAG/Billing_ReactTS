import MyTable from "../../components/table.tsx";
import {data} from "./bills_data.ts";

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
        <MyTable name='Счета' headers={headers} dataKeys={dataKeys} data={data}/>
    );
};

export default Index;

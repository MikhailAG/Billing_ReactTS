import MyTable from "../../components/table.tsx";
import {data} from "./bills_data.ts";
import {useDisclosure} from "@mantine/hooks";
import {Container, Modal} from "@mantine/core";
import CreateBill from "./create.tsx";
import ShowBill from "./show.tsx";


const headers = [
    "ID Счета",
    "Абонент",
    "Услуги",
    "Сумма",
    "Статус корп. оплаты",
    "Дата оплаты",
];

const Index = () => {
    const [openedShow, {open: openShow, close: closeShow}] = useDisclosure(false);
    const [openedCreate, {open: openCreate, close: closeCreate}] = useDisclosure(false);

    return (
        <Container>
            <Modal size={'lg'} opened={openedShow} onClose={closeShow} title="Cчет">
                <ShowBill/>
            </Modal>
            <Modal size={'lg'} opened={openedCreate} onClose={closeCreate} title="Создание счета">
                <CreateBill/>
            </Modal>
            <MyTable name='Счета' headers={headers} data={data} onCreate={openCreate} onShow={openShow}/>
        </Container>
    );
};

export default Index;

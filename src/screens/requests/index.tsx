import MyTable from "../../components/table.tsx";
import {data} from "./requests_data";
import {Container, Modal} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import NewRequest from "./create";

const headers = [
    "ID заявки",
    "ФИО",
    "Статус",
    "Дата оформления",
    "Тип",
    "Комментарий",
];
const dataKeys = [
    'id',
    'full_name',
    'status',
    'date_at',
    'type',
    'comment',
];

const Profiles = () => {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <Container>
            <Modal size={'lg'} opened={opened} onClose={close} title="Новая заявка">
                <NewRequest/>
            </Modal>
            <MyTable name='Заявки' headers={headers} dataKeys={dataKeys} data={data} onCreate={open}/>
        </Container>
    );
};

export default Profiles;

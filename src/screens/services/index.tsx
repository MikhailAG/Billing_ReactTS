import MyTable from "../../components/table.tsx";
import {data} from "./requests_data";
import {Container, Modal} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import NewService from "./create";

const headers = [
    "ID услуги",
    "Минуты",
    "Гигабайты",
    "Стоимость",
    "Название",
    "Статус",
    "Дата оформления",
];

const Services = () => {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <Container>
            <Modal size={'lg'} opened={opened} onClose={close} title="Управление услугами">
                <NewService/>
            </Modal>
            <MyTable name='Услуги' headers={headers} data={data} onCreate={open}/>
        </Container>
    );
};

export default Services;

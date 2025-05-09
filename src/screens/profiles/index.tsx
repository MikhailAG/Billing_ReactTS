import MyTable from "../../components/table.tsx";
import {data} from "./profiles_data.ts";
import ProfileEdit from "./show.tsx";
import {Modal} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {Container} from "@mantine/core";

const headers = [
    "ID профиля",
    "ФИО",
    "Услуги",
    "Должность",
    "Табельный номер",
    "Статус профиля",
    "Контактные данные",
];

const Profiles = () => {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <Container>
            <Modal size={'lg'} opened={opened} onClose={close} title="Редактировать профиль">
                <ProfileEdit/>
            </Modal>
            <MyTable name='Профили абонентов' headers={headers} data={data} onShow={open}/>
        </Container>
    );
};

export default Profiles;

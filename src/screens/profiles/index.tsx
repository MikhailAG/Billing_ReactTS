import MyTable from "../../components/table.tsx";
import {data} from "./profiles_data.ts";
import ProfileEdit from "./edit.tsx";
import {Modal} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {Container} from "@mantine/core";

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
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <Container>
            <Modal size={'lg'} opened={opened} onClose={close} title="Редактировать профиль">
                <ProfileEdit/>
            </Modal>
            <MyTable name='Профили абонентов' headers={headers} dataKeys={dataKeys} data={data} onEdit={open}/>
        </Container>
    );
};

export default Profiles;

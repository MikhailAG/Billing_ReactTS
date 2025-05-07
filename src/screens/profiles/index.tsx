import MyTable from "../../components/table.tsx";
import {profiles} from "./profiles_data.ts";
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
            <MyTable name='Профили абонентов' headers={headers} dataKeys={dataKeys} count={565} data={profiles}
                     pages={[56, 55, 54, 53, 52]} onEdit={open}/>
        </Container>
    );
};

export default Profiles;

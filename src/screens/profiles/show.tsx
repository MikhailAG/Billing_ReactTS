import DataCol from "../../components/dataCol.tsx";
import {Button, Flex, Modal, Stack, Text} from "@mantine/core";
import {IconTrash} from "@tabler/icons-react";
import {useDisclosure} from "@mantine/hooks";

const ProfileEdit = () => {
    const [openedDelete, {open: openDelete, close: closeDelete}] = useDisclosure(false);

    return (
        <>
            <Modal size={'lg'} opened={openedDelete} onClose={closeDelete} withCloseButton={false}>
                <Text fz={20}>Вы уверены, что хотите удалить абонента "Антон Михайлов"?</Text>
                <Flex mt={20} gap={20}>
                    <Button w={150} color={'red'}>Удалить</Button>
                    <Button w={150} onClick={closeDelete} color={'gray'}>Назад</Button>
                </Flex>
            </Modal>
            <Stack gap={15}>
                <DataCol name='ФИО' value={'Антон Михайлов'} editable/>
                <DataCol name='Услуги' value={'Пакет "Корпоративный"'} editable/>
                <DataCol name='Должность' value={'Грузчик'} editable/>
                <DataCol name='Табельный номер' value={'G-565-065'}/>
                <DataCol name='Статус профиля' value={'Активный'} editable/>
                <DataCol name='Контактные данные' value={'+7 (926) 016-80-10'} editable/>
                <Button w={130} color={'red'} variant={'outline'} leftSection={<IconTrash/>}
                        onClick={openDelete}>Удалить</Button>
            </Stack>
        </>
    )
}

export default ProfileEdit;

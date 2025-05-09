import DataCol from "../../components/dataCol.tsx";
import {Button, Stack} from "@mantine/core";
import {IconTrash} from "@tabler/icons-react";

const ProfileEdit = () => {
    return (
        <Stack gap={15}>
            <DataCol name='ФИО' value={'Антон Михайлов'} editable/>
            <DataCol name='Услуги' value={'20 Гб 500 Мин'} editable/>
            <DataCol name='Должность' value={'Грузчик'} editable/>
            <DataCol name='Табельный номер' value={'G-565-065'}/>
            <DataCol name='Статус профиля' value={'Активный'} editable/>
            <DataCol name='Контактные данные' value={'+7 (926) 016-80-10'} editable/>
            <Button w={130} color={'red'} variant={'outline'} leftSection={<IconTrash/>}>Удалить</Button>
        </Stack>
    )
}

export default ProfileEdit;

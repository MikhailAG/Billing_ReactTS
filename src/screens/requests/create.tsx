import {Button, Select, Stack, Textarea} from "@mantine/core";
import {IconCirclePlus} from "@tabler/icons-react";

const NewRequest = () => {
    return (
        <Stack gap={20}>
            <Select label={'Тип'} data={[{label: 'Подключение', value: 'new'}, {label: 'Изменение', value: 'edit'}]}/>
            <Select label={'Подключенная услуга'}
                    data={[{label: '10 Гб 150 Мин', value: '534'}, {label: '10 Гб 100 Мин', value: '539'}]}/>
            <Textarea label={'Комментарий'} autosize minRows={5}/>
            <Button w={200} leftSection={<IconCirclePlus size={22}/>} fz={16}>Создать</Button>
        </Stack>
    )
}

export default NewRequest;
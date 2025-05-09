import {Button, Stack, MultiSelect, Select} from "@mantine/core";
import {IconFileDescription} from "@tabler/icons-react";

const CreateBill = () => {
    return (
        <Stack gap={30}>
            <Select label={'Абонент'} data={[{label: 'Елена Васильева', value: '564'}]}/>
            <MultiSelect label={'Подключенные услуги'}
                         data={[
                             {label: 'Пакет "Корпоративный +"', value: '11'},
                             {label: 'Пакет "Роуминг"', value: '123'},
                         ]}/>
            <Button leftSection={<IconFileDescription/>}>Сформировать</Button>
        </Stack>
    )
}

export default CreateBill;
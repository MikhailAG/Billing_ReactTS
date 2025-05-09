import {Button, Container, Select, Slider, Text} from "@mantine/core";
import {IconCheck} from "@tabler/icons-react";
import {useState} from "react";

const NewService = () => {
    const [type, setType] = useState<string | null>(null);

    return (
        <Container>
            <Select onChange={setType} label={'Тип'}
                    data={[{label: 'Подключение', value: 'new'}, {label: 'Изменение', value: 'edit'}]}/>
            {type && (
                <>
                    {type === 'edit' && <Select mt={10} label={'Подключенная услуга'}
                                                data={[{label: '20 Гб 150 Мин', value: '534'}]}/>}
                    <Text fz={16} mt={20}>Гигабайты</Text>
                    <Slider
                        color="violet"
                        max={30}
                        min={1}
                        restrictToMarks
                        defaultValue={20}
                        marks={[
                            {value: 1, label: '1'},
                            {value: 2, label: '2'},
                            {value: 5, label: '5'},
                            {value: 10, label: '10'},
                            {value: 15, label: '15'},
                            {value: 20, label: '20'},
                            {value: 30, label: '30'},
                        ]}
                    />
                    <Text fz={16} mt={40}>Минуты</Text>
                    <Slider
                        color="violet"
                        defaultValue={150}
                        max={500}
                        min={60}
                        restrictToMarks
                        marks={[
                            {value: 60, label: '60'},
                            {value: 150, label: '150'},
                            {value: 210, label: '210'},
                            {value: 300, label: '300'},
                            {value: 500, label: '500'},
                        ]}
                    />
                </>)}
            <Button w={200} mt={50} disabled={!type} leftSection={<IconCheck size={22}/>} fz={16}>Оформить</Button>
        </Container>
    )
}

export default NewService;
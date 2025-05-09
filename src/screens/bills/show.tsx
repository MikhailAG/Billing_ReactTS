import {Button, Container, Table, Text} from "@mantine/core";
import DataCol from "../../components/dataCol.tsx";
import {IconEdit, IconPrinter} from "@tabler/icons-react";

const ShowBill = () => {
    return (
        <Container>
            <DataCol name={'Абонент'} value={'Владимир Дубов'}/>
            <DataCol name={'Статус корп. оплаты'} value={'Оплачен'}/>
            <DataCol name={'Дата оплаты'} value={'05.05.2025'}/>
            <Text mt={20} fz={18} fw={'bold'}>Услуги</Text>
            <Table mt={10}>
                <Table.Thead>
                    <Table.Th>№</Table.Th>
                    <Table.Th>Название</Table.Th>
                    <Table.Th>Гб</Table.Th>
                    <Table.Th>Минуты</Table.Th>
                    <Table.Th>Стоимость</Table.Th>
                    <Table.Th/>
                </Table.Thead>
                <Table.Tbody>
                    <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td>Пакет "Корпоративный +"</Table.Td>
                        <Table.Td>30</Table.Td>
                        <Table.Td>300</Table.Td>
                        <Table.Td>750</Table.Td>
                        <Table.Td><IconEdit/></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>2</Table.Td>
                        <Table.Td>Пакет "Роуминг"</Table.Td>
                        <Table.Td>-</Table.Td>
                        <Table.Td>60 (Р)</Table.Td>
                        <Table.Td>1000</Table.Td>
                        <Table.Td><IconEdit/></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>3</Table.Td>
                        <Table.Td>Пакет "Дополнительный"</Table.Td>
                        <Table.Td>10</Table.Td>
                        <Table.Td>-</Table.Td>
                        <Table.Td>250</Table.Td>
                        <Table.Td><IconEdit/></Table.Td>
                    </Table.Tr>
                    <Table.Tr fw={'bold'}>
                        <Table.Td/>
                        <Table.Td>Итого</Table.Td>
                        <Table.Td/>
                        <Table.Td/>
                        <Table.Td>1150₽</Table.Td>
                    </Table.Tr>
                </Table.Tbody>
            </Table>
            <Button mt={20} leftSection={<IconPrinter/>} color={'cyan'}>Печать</Button>
        </Container>
    )
}

export default ShowBill;
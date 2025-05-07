import {ActionIcon, Button, Card, Flex, Table, Text} from "@mantine/core";
import {IconFilter, IconPlus} from "@tabler/icons-react";

const renderHeaderCell = (label: string) => (
    <Table.Th ta="center" fz={18} key={label}>
        <Flex gap={10} align="center" justify="center">
            {label}
            <ActionIcon variant="subtle" size={20}>
                <IconFilter size={20}/>
            </ActionIcon>
        </Flex>
    </Table.Th>
);

type RowData = { [key: string]: unknown };
type dataColumns = { result: RowData[], total: number, page: number };

interface TableProps {
    name: string;
    data: dataColumns;
    dataKeys: string[];
    headers: string[];
    onEdit?: () => void;
    onCreate?: () => void;
}

const MyTable = ({name, headers, dataKeys, data, onEdit, onCreate}: TableProps) => {
    const rows = data.result.map((element: RowData) => (
        <Table.Tr key={element.id as number} fz={15}>
            {dataKeys.map((h: string) => (
                <Table.Td onClick={onEdit} style={{cursor: 'pointer'}}>{String(element[h])}</Table.Td>
            ))}
        </Table.Tr>
    ));

    return (
        <Card withBorder radius="lg" shadow="md" h="fit-content" w="82.5vw">
            <Card.Section p={30} withBorder>
                <Flex justify="space-between">
                    <Flex gap={20} align="center">
                        <Text fw="bold" fz={22}>
                            {name}, всего: {data.total}
                        </Text>
                    </Flex>
                    <Button variant={'outline'} color={'violet'} fz={16}
                            leftSection={<IconPlus size={25}/>} onClick={onCreate}>Создать</Button>
                </Flex>
            </Card.Section>
            <Card.Section withBorder>
                <Table w="100%" ta="center" highlightOnHover>
                    <Table.Thead>
                        <Table.Tr>{headers.map(renderHeaderCell)}</Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </Card.Section>
            <Card.Section>
                <Flex gap={15} p={15} align="flex-end" justify="flex-end">
                    {data.page > 1 && ([data.page, data.page - 1, data.page - 2].map((num: number, idx: number) => (
                        num > 1 && (
                            <Card
                                key={num}
                                p={10}
                                radius={15}
                                withBorder
                                style={idx === 0 ? {
                                    border: "2px solid #b2bbed",
                                    cursor: 'pointer'
                                } : {cursor: 'pointer'}}
                            >
                                {num}
                            </Card>
                        )
                    )))}
                    {data.page > 3 && <Text fz={25}>...</Text>}
                    <Card p={10} radius={15} withBorder style={{cursor: 'pointer'}}>
                        1
                    </Card>
                </Flex>
            </Card.Section>
        </Card>
    );
};

export default MyTable;

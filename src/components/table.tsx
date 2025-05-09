import {ActionIcon, Button, Card, Flex, Table, Text} from "@mantine/core";
import {IconFilter, IconPlus} from "@tabler/icons-react";

const renderHeaderCell = (label: string) => (
    <Table.Th fz={18} key={label}>
        <Flex gap={10} align="center">
            {label}
            <ActionIcon variant="subtle" size={23}>
                <IconFilter size={17}/>
            </ActionIcon>
        </Flex>
    </Table.Th>
);

type RowData = { [key: string]: unknown };
type dataColumns = { result: RowData[], total: number, page: number };

interface TableProps {
    name: string;
    data: dataColumns;
    headers: string[];
    onShow?: () => void;
    onCreate?: () => void;
}

const MyTable = ({name, headers, data, onShow, onCreate}: TableProps) => {
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
                <Table w="100%" highlightOnHover>
                    <Table.Thead>
                        <Table.Tr>{headers.map(renderHeaderCell)}</Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {data.result.map((element: RowData) => (
                            <Table.Tr key={element.id as number} fz={15}>
                                {Object.keys(data.result[0]).map((key: string) => (
                                    <Table.Td onClick={onShow} style={{cursor: 'pointer'}}>
                                        {String(element[key])}
                                    </Table.Td>
                                ))}
                            </Table.Tr>
                        ))}
                    </Table.Tbody>
                </Table>
            </Card.Section>
            <Card.Section>
                <Flex gap={15} p={15} align="flex-end" justify="flex-end">
                    {data.page > 1 && ([data.page, data.page - 1, data.page - 2].map((num: number, idx: number) => (
                        num > 1 && (
                            <Button
                                key={num}
                                radius={15}
                                variant={idx === 0 ? 'filled' : 'outline'}
                                color={'violet'}
                                p={0}
                                w={40}
                                h={40}
                            >
                                {num}
                            </Button>
                        )
                    )))}
                    {data.page > 3 && <Text fz={25}>...</Text>}
                    <Button
                        radius={15}
                        variant={data.page === 1 ? 'filled' : 'outline'}
                        color={'violet'}
                        p={0}
                        w={40}
                        h={40}
                    >
                        1
                    </Button>
                </Flex>
            </Card.Section>
        </Card>
    );
};

export default MyTable;

import {ActionIcon, Card, Flex, Table, Text} from "@mantine/core";
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

interface TableProps {
    name: string;
    data: RowData[];
    dataKeys: string[];
    headers: string[];
    count: number;
    pages: number[];
    onClick?: () => void;
}

const MyTable = ({name, headers, dataKeys, data, count, pages, onClick}: TableProps) => {
    const rows = data.map((element: RowData) => (
        <Table.Tr key={element.id as number} fz={15}>
            {dataKeys.map((h: string) => (
                <Table.Td onClick={onClick} style={{cursor: 'pointer'}}>{String(element[h])}</Table.Td>
            ))}
        </Table.Tr>
    ));

    return (
        <Card withBorder radius="lg" shadow="md" h="fit-content" w="80vw">
            <Card.Section p={30} withBorder>
                <Flex justify="space-between">
                    <Flex gap={20} align="center">
                        <Text fw="bold" fz={22}>
                            {name}, всего: {count}
                        </Text>
                    </Flex>
                    <ActionIcon variant="subtle" size={35}>
                        <IconPlus size={70}/>
                    </ActionIcon>
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
                    {pages.map((num: number, idx: number) => (
                        <Card
                            key={num}
                            p={10}
                            radius={15}
                            withBorder
                            style={idx === 0 ? {border: "2px solid #b2bbed", cursor: 'pointer'} : {cursor: 'pointer'}}
                        >
                            {num}
                        </Card>
                    ))}
                    <Text fz={25}>...</Text>
                    <Card px={15} py={10} radius={15} withBorder>
                        1
                    </Card>
                </Flex>
            </Card.Section>
        </Card>
    );
};

export default MyTable;

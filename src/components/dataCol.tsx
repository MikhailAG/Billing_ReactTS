import {ActionIcon, Box, Flex, Text} from "@mantine/core";
import {IconEdit} from "@tabler/icons-react";

interface DataColProps {
    name: string;
    value: string;
    editable?: boolean;
}

const DataCol = ({name, value, editable = false}: DataColProps) => {
    return (
        <Box style={{borderBottom: '1px solid #b2bbed'}} p={5} w={'100%'}>
            <Flex justify={'space-between'}>
                <Text fz={16}>{name}</Text>
                <Flex gap={10} align={'center'}>
                    <Text fz={16}>{value}</Text>
                    {editable && <ActionIcon variant={'subtle'} size={30}><IconEdit size={22}/></ActionIcon>}
                </Flex>
            </Flex>
        </Box>
    )
}

export default DataCol;
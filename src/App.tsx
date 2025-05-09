import {AppShell, Avatar, Card, Flex, Text} from '@mantine/core';
import Navigation from "./components/navigation.tsx";
import {Route, Routes} from "react-router-dom";
import Bills from "./screens/bills/index.tsx";
import Profiles from "./screens/profiles/index.tsx";
import Services from "./screens/services";

function App() {
    return (
        <AppShell
            header={{height: 80}}
            navbar={{width: '15vw', breakpoint: 'sm'}}
            padding="md"
            w={0}
        >
            <AppShell.Header>
                <Flex justify={'space-between'} align={'center'} w={'full'} h="100%" pl={30} pr={30}>
                    <Text fz={30}>ПМ БиУА</Text>
                    <Card shadow={'sm'} radius={'md'} withBorder h={'80%'} style={{cursor: 'pointer'}} px={30}>
                        <Flex gap={20} align={'center'} h={'100%'}>
                            <Avatar color="cyan" radius="xl">МТ</Avatar>
                            <Flex direction={'column'}>
                                <Text fz={16}>Михаил Терешин</Text>
                                <Text fz={14} c={'gray'}>администратор</Text>
                                {/*<Text fz={14} c={'gray'}>сотрудник</Text>*/}
                            </Flex>
                        </Flex>
                    </Card>
                </Flex>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <Navigation/>
            </AppShell.Navbar>
            <AppShell.Main>
                <Routes>
                    <Route path="/bills" element={<Bills/>}/>
                    <Route path="/profiles" element={<Profiles/>}/>
                    <Route path="/reports" element={<div>Отчеты</div>}/>
                    <Route path="/services" element={<Services/>}/>
                </Routes>
            </AppShell.Main>
        </AppShell>
    )
}

export default App

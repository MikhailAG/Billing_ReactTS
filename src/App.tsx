import {AppShell, Group, Text} from '@mantine/core';
import Navigation from "./components/navigation.tsx";
import {Route, Routes} from "react-router-dom";
import Bills from "./screens/bills/index.tsx";
import Profiles from "./screens/profiles/index.tsx";

function App() {
    return (
        <AppShell
            header={{height: 80}}
            navbar={{width: '15vw', breakpoint: 'sm'}}
            padding="md"
            w={0}
        >
            <AppShell.Header>
                <Group h="100%" px={30}>
                    <Text fz={30}>ЭтаБиллинг</Text>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <Navigation/>
            </AppShell.Navbar>
            <AppShell.Main>
                <Routes>
                    <Route path="/bills" element={<Bills/>}/>
                    <Route path="/profiles" element={<Profiles/>}/>
                    <Route path="/reports" element={<div>Отчеты</div>}/>
                    <Route path="/requests" element={<div>Заявки</div>}/>
                </Routes>
            </AppShell.Main>
        </AppShell>
    )
}

export default App

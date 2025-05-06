import {IconFileInvoice, IconMessage2Question, IconReport, IconUser} from "@tabler/icons-react";
import {NavLink, Stack} from "@mantine/core";
import {useNavigate, useLocation} from 'react-router-dom';

const navItems = [
    {to: '/bills', label: 'Счета', icon: <IconFileInvoice size={25} stroke={1.5}/>},
    {to: '/profiles', label: 'Профили абонентов', icon: <IconUser size={25} stroke={1.5}/>},
    {to: '/reports', label: 'Отчеты', icon: <IconReport size={25} stroke={1.5}/>},
    {to: '/requests', label: 'Заявки', icon: <IconMessage2Question size={25} stroke={1.5}/>}
];

const Navigation = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();

    return (
        <Stack gap={10}>
            {navItems.map(({to, label, icon}) => (
                <NavLink
                    key={to}
                    onClick={() => navigate(to)}
                    label={label}
                    style={{borderRadius: '20px'}}
                    leftSection={icon}
                    active={pathname === to}
                />
            ))}
        </Stack>
    );
}

export default Navigation;

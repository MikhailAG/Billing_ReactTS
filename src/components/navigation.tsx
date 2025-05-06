import {IconFileInvoice, IconMessage2Question, IconReport, IconUser} from "@tabler/icons-react"
import {NavLink, Stack} from "@mantine/core";
import {useNavigate, useLocation} from 'react-router-dom';

const Navigation = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation();

    return (
        <Stack gap={10}>
            <NavLink
                onClick={() => {
                    navigate('/bills')
                }}
                label="Счета"
                style={{borderRadius: '20px'}}
                leftSection={<IconFileInvoice size={25} stroke={1.5}/>}
                active={pathname === '/bills'}
            />
            <NavLink
                onClick={() => {
                    navigate('/profiles')
                }}
                label="Профили абонентов"
                style={{borderRadius: '20px'}}
                leftSection={<IconUser size={25} stroke={1.5}/>}
                active={pathname === '/profiles'}
            />
            <NavLink
                onClick={() => {
                    navigate('/reports')
                }}
                label="Отчеты"
                style={{borderRadius: '20px'}}
                leftSection={<IconReport size={25} stroke={1.5}/>}
                active={pathname === '/reports'}
            />
            <NavLink
                onClick={() => {
                    navigate('/requests')
                }}
                label='Заявки'
                style={{borderRadius: '20px'}}
                leftSection={<IconMessage2Question size={25} stroke={1.5}/>}
                active={pathname === '/requests'}
            />
        </Stack>
    )
}

export default Navigation;
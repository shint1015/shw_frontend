import { forwardRef } from "react";
import Link from 'next/link'
import {MenuItem, MenuItemProps, Button, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import '@/styles/component.scss'
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ArticleIcon from '@mui/icons-material/Article';
import SavingsIcon from '@mui/icons-material/Savings';

type LinkMenuItemProps = Omit<MenuItemProps<'a', { href: string }>, 'component' | 'button'>

// const LinkMenuItem = forwardRef<HTMLAnchorElement, LinkMenuItemProps>(
//     function LinkMenuItem(props, forwardedRef) {
//
//         const {
//             href,
//             ...other
//         } = props
//         return (
//             <Link href={href}>
//                 <MenuItem component='a' ref={forwardedRef} {...other}/>
//             </Link>
//         )
//     }
// )

const LinkButton = ({href, linkName}: {href: string, linkName: string}) => {
    return (
        <>
            <Link href={href}>
                <Button className={`base_button`}>{linkName}</Button>
            </Link>
        </>
    )
}

const LinkListItemButton = ({pageName, pageUrl, iconName, open}: {pageName: string, pageUrl: string, iconName: string, open: boolean}) => {
    return (
        <>
            <ListItemButton
                sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                }}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                >
                    <IconComponentFromPageName pageName={iconName} />
                </ListItemIcon>
                <ListItemText primary={pageName} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
        </>
    )
}

const IconComponentFromPageName = ({pageName}: {pageName: string}) => {
    switch (pageName) {
        case 'dashboard':
            return <DashboardIcon />
        case 'family':
            return <FamilyRestroomIcon />
        case 'housework':
            return <HomeWorkIcon />
        case 'housework template':
            return <ArticleIcon />
        case 'point':
            return <SavingsIcon />
        default:
            return <></>
    }
}

export { LinkButton, IconComponentFromPageName }
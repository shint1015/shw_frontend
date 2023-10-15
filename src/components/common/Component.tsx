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
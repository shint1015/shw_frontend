import { forwardRef } from "react";
import Link from 'next/link'
import {MenuItem, MenuItemProps, Button, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import '@/styles/component.css'
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ArticleIcon from '@mui/icons-material/Article';
import SavingsIcon from '@mui/icons-material/Savings';

const LinkButton = ({href, linkName}: {href: string, linkName: string}) => {
    return (
        <>
            <Link href={href}>
                <Button>{linkName}</Button>
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
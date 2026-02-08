'use client'

import {
    Tooltip,
    IconButton,
    Avatar,
    Menu,
    MenuItem,
    Box,
} from '@mui/material'
import {MouseEvent, useState} from "react";
import Link from "next/link";
const settings: {[key: string]: string}[] = [
    {linkName: 'Logout', linkHref: '/api/auth/logout'},
];
import { useUser } from '@auth0/nextjs-auth0/client';
import {LinkButton} from "@/components/common/Component";

const UserSettingsComponents = () => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const { user, isLoading } = useUser();

    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    if (isLoading) {
        return null;
    }

    return (
        <>
            {user ? (
                <>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt={`${user.name}`} src={`${user.picture}`} />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting.linkName} onClick={handleCloseUserMenu}>
                                <Link href={setting.linkHref}>{setting.linkName}</Link>
                            </MenuItem>
                        ))}
                    </Menu>
                </>
            ) : (
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <LinkButton href={`/auth/login`} linkName={`ログイン`}/>
                    <LinkButton href={`/auth/login?screen_hint=signup`} linkName={`サインアップ`}/>
                </Box>
            )}
        </>
    )
}


export default UserSettingsComponents

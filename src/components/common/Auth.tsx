import {
    Tooltip,
    IconButton,
    Avatar,
    Menu,
} from '@mui/material'
import {MouseEvent, useState} from "react";
import { Link } from "next/link"
const settings: {[key: string]: string}[] = [
    // {linkName: 'Profile', linkHref: '/'},
    // {linkName: 'Account', linkHref: '/'},
    // {linkName: 'Dashboard', linkHref: '/'},
    {linkName: 'Logout', linkHref: '/api/auth/logout'},
];
import { useUser } from '@auth0/nextjs-auth0/client';
import {LinkButton} from "@/components/common/Component";


const UserSettingsComponents = () => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

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
                        {/*{settings.map((setting) => (*/}
                        {/*    <LinkMenuItem href={`${setting.linkHref}`} onClick={handleCloseUserMenu}>*/}
                        {/*        <Typography textAlign="center">{setting.linkName}</Typography>*/}
                        {/*    </LinkMenuItem>*/}
                        {/*))}*/}
                    </Menu>
                </>
            ) : (
                <>
                    <LinkButton href={`/api/auth/login`} linkName={`ログイン`}/>
                </>
            )}
        </>
    )
}


export default UserSettingsComponents

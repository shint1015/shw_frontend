'use client'
import React, {createContext, ReactNode, useEffect, useState} from 'react';

type Notification = {
    message: string;
    type: string;
};

export const NotificationContext = createContext<Notification[]>([]);

const NotificationProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    useEffect(() => {
        const timer = setTimeout(() => {
            setNotifications([]);
        }, 5000);
        return () => clearTimeout(timer);
    }, [notifications]);

    return (
        <NotificationContext.Provider value={notifications}>
            {children}
        </NotificationContext.Provider>
    );
};
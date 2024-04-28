'use client';
import React, {createContext, ReactNode, useEffect, useState} from 'react';
import Family from "@utils/api/family";

// 型定義
type CommonInfo = {
    familyId: string;
    workUsers: Record<number, string>;
    roles: Record<number, string>;
};

// コンテキストの作成
export const CommonInfoContext = createContext<CommonInfo>({
    familyId: '',
    workUsers: {},
    roles: {}
});

// プロバイダーコンポーネントの定義
const CommonInfoProvider: React.FC<{children: ReactNode, familyId: string}> = ({ children, familyId }) => {
    const [workUsers, setWorkUsers] = useState({});
    const [roles, setRoles] = useState({});
    useEffect(() => {
        (async () => {
            {
                const res = await Family.getBelongToUserArr(familyId);
                setWorkUsers(res);
            }
            {
                const res = await Family.getRoleArr(familyId);
                setRoles(res);
            }

        })();
    }, []);


    return (
        <CommonInfoContext.Provider value={{ familyId: familyId, workUsers: workUsers, roles: roles }}>
            {children}
        </CommonInfoContext.Provider>
    );
};

export default CommonInfoProvider;
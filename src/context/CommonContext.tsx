'use client';
import React, {createContext, ReactNode, useEffect, useState} from 'react';
import Family from "@utils/api/family";

// 型定義
type CommonInfo = {
    family_id: string;
    work_users: Record<number, string>;
    roles: Record<number, string>;
    housework_statuses: Record<number, string>;
    templates?: Array<Record<string, any>>;
};

// コンテキストの作成
export const CommonInfoContext = createContext<CommonInfo>({
    family_id: '',
    work_users: {},
    roles: {},
    housework_statuses: {},
    templates: [],
});

// プロバイダーコンポーネントの定義
const CommonInfoProvider: React.FC<{children: ReactNode, familyId: string}> = ({ children, familyId }) => {
    const [workUsers, setWorkUsers] = useState({});
    const [roles, setRoles] = useState({});
    const [housework_statuses, setHouseworkStatuses] = useState({
        1: "未着手",
        2: "進行中",
        3: "完了",
    });

    useEffect(() => {
        (async () => {
            {
                if (Object.keys(workUsers).length == 0) {
                    const res = await Family.getBelongToUserArr(familyId);
                    setWorkUsers(res);
                }
            }
            {
                if (Object.keys(roles).length == 0) {
                    const res = await Family.getRoleArr(familyId);
                    setRoles(res);
                }
            }
        })();
    }, []);


    return (
        <CommonInfoContext.Provider value={{ family_id: familyId, work_users: workUsers, roles: roles, housework_statuses: housework_statuses }}>
            {children}
        </CommonInfoContext.Provider>
    );
};

export default CommonInfoProvider;
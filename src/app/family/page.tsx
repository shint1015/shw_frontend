'use client'
import {Card} from "@mui/material";
import DataTable from "@/components/family/dataTable";
import {Suspense, useContext, useState} from "react";
import Family from "@utils/api/family";
import * as React from "react";
import LoadingScreen from "@/components/common/Loading";
import {CommonInfoContext} from "@/context/CommonContext";

const Page = () => {
    const [data, setData] = useState<Record<string, any>[]>([]);
    const commonInfo = useContext(CommonInfoContext);
    const createDataTable = async () => {
        if (data.length == 0) {
            const res = await Family.getBelongToUser(commonInfo.familyId);
            setData(res.data.users);
            return <DataTable data={res.data.users} />;
        } else {
            return <DataTable data={data} />;
        }
    }
    return (
        <Card className={"card_common"}>
            <Suspense fallback={<LoadingScreen/>}>
                {createDataTable()}
            </Suspense>
        </Card>
    )
}


export default Page;
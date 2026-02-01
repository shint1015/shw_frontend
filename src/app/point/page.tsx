'use client'
import {Card} from "@mui/material";
import DataTable from "@/components/point/dataTable";
import HouseworkPoint from "@utils/api/point";
import {Suspense, useContext, useState} from "react";
import LoadingScreen from "@/components/common/Loading";
import {CommonInfoContext} from "@/context/CommonContext";


const Page = () => {
    const [data, setData] = useState<Record<string, any>[]>([]);
    const commonInfo = useContext(CommonInfoContext);
    const createDataTable = async () => {

        if (data && Object.keys(data).length == 0) {
            const res = await HouseworkPoint.getListByFamilyId(commonInfo.familyId);
            console.log(res.data);
            setData(res.data.points);
            return <DataTable data={res.data.points} />;
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
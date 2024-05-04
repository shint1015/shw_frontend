"use client";
import {Card, Box} from "@mui/material";
import {Suspense, useEffect, useState} from "react";
import Housework from "@utils/api/housework";
import HouseworkForm from "@/components/housework/form";
import LoadingScreen from "@/components/common/Loading";

const Page = ({params}: {params: {housework_id: string}}) => {
    const [data, setData] = useState<Record<string, any>>({});
    const createHouseworkForm = () => {
        const res = await Housework.getHouseworkDetail(params.housework_id);
        setData(res.data.housework);
        return <HouseworkForm defaultData={data} />;
    }

    return (
        <Card className={"card_common"}>
            <div className={"title_common"}>家事編集</div>
            <Box className={"flex flex-wrap justify-between"}>
                <Suspense fallback={<LoadingScreen />}>
                    {createHouseworkForm()}
                </Suspense>
            </Box>
        </Card>
    );
}

export default Page;
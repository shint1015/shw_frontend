"use client";
import {Card, Box} from "@mui/material";
import {useEffect, useState} from "react";
import Housework from "@utils/api/housework";
import HouseworkForm from "@/components/housework/form";
import LoadingScreen from "@/components/common/Loading";
import {HouseworkFormValues} from "@/components/common/react-hook-form/type";
import dayjs from "dayjs";
import {number} from "prop-types";


const Page = ({params}: {params: {housework_id: string}}) => {
    const [data, setData] = useState<Record<string, any>>({});
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        (async () => {
            const res = await Housework.getHouseworkDetail(params.housework_id);
            setData(res.data.housework);
            setLoading(false)
        })();
    }, [params.housework_id]);

    return (
        <Card className={"card_common"}>
            <div className={"title_common"}>家事編集</div>
            <Box className={"flex flex-wrap justify-between"}>
                { loading ? <LoadingScreen/> : <HouseworkForm defaultData={data}/> }
            </Box>
        </Card>
    );
}

export default Page;
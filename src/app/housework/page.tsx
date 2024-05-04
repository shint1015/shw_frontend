"use client";
import {Suspense, SyntheticEvent, useEffect, useState} from "react";
import { Box, Card, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import DataTable from "@/components/housework/dataTable";
import "@/styles/common.scss"
import Housework from "@utils/api/housework";
import LoadingScreen from "@/components/common/Loading";
import * as React from "react";

const Page = () => {
    const [value, setValue] = useState('table');
    const [data, setData] = useState<Record<string, any>[]>([]);
    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const createDataTable = async () => {
        if (data.length == 0) {
            const res = await Housework.getByFamilyId("1");
            setData(res.data.housework);
            return <DataTable data={res.data.housework} />;
        } else {
            return <DataTable data={data} />;
        }
    }

    return (
        <Card className={"card_common"}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="リストビュー" value="table" />
                            <Tab label="カレンダービュー" value="calender" />
                        </TabList>
                    </Box>
                    <TabPanel value="calender">

                    </TabPanel>
                    <TabPanel value="table">
                        <Suspense fallback={<LoadingScreen/>}>
                            {createDataTable()}
                        </Suspense>
                    </TabPanel>
                </TabContext>
            </Box>
        </Card>
    )
}

export default Page;

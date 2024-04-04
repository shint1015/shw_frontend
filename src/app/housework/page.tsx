"use client";
import {SyntheticEvent, useEffect, useState} from "react";
import { Box, Card, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import DataTable from "@/components/housework/dataTable";
import "@/styles/common.scss"
import Housework from "@utils/api/housework";

const Page = () => {
    const [value, setValue] = useState('table');
    const [data, setData] = useState<Record<string, any>[]>([]);

    useEffect(() => {
        (async () => {
            const res = await Housework.getByFamilyId("1");
            setData(res.data.housework);
        })();
    }, []);
    const handleChange = (event: SyntheticEvent, newValue: string) => {
        console.log("newValue", newValue)
        setValue(newValue);
    };

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
                        <DataTable data={data} />
                    </TabPanel>
                </TabContext>
            </Box>
        </Card>
    )
}

export default Page;

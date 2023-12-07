"use client";
import { SyntheticEvent, useState } from "react";
import { Box, Card, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import DataTable from "@/components/housework/dataTable";
import "@/styles/common.scss"



const Page = () => {
    const [value, setValue] = useState('table');

    const handleChange = (event: SyntheticEvent, newValue: string) => {
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
                        <DataTable />
                    </TabPanel>
                </TabContext>
            </Box>
        </Card>
    )
}

export default Page;

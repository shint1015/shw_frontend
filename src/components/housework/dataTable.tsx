import * as React from 'react';
import {Box, Button, Card} from "@mui/material";
import CustomPaginationActionsTable from "@/components/common/Table";

const columns = [
    { field: 'id', headerName: 'ID', width: 40 },
    { field: 'name', headerName: '家事', width: 130 },
    { field: 'detail', headerName: '詳細', width: 200 },
    { field: 'status', headerName: '状態', width: 90 },
    { field: 'workTo', headerName: '作業者', width: 90},
    { field: 'startAt', headerName: '開始日時', width: 200},
    { field: 'endAt', headerName: '終了日時', width: 200},
];

const rows = [
    {id: 1, name: "洗濯物たたみ", detail: "子供服", status: "完了", workTo: "父", startAt: "2023/11/01 17:00", endAt: "2023/11/01 17:30" },
    {id: 2, name: "夜ご飯作り", detail: "カレーライス", status: "対応中", workTo: "母", startAt: "2023/11/01 18:00", endAt: "2023/11/01 19:00" },
    {id: 3, name: "トイレ掃除", detail: "", status: "未対応", workTo: "母", startAt: "2023/11/01 19:30", endAt: "2023/11/01 20:00" },
    {id: 4, name: "お風呂掃除", detail: "水アカの掃除", status: "未対応", workTo: "父", startAt: "2023/11/01 19:30", endAt: "2023/11/01 20:00" },
    {id: 5, name: "お風呂掃除", detail: "水アカの掃除", status: "未対応", workTo: "父", startAt: "2023/11/01 19:30", endAt: "2023/11/01 20:00" },
    {id: 6, name: "お風呂掃除", detail: "水アカの掃除", status: "未対応", workTo: "父", startAt: "2023/11/01 19:30", endAt: "2023/11/01 20:00" },
    {id: 7, name: "お風呂掃除", detail: "水アカの掃除", status: "未対応", workTo: "父", startAt: "2023/11/01 19:30", endAt: "2023/11/01 20:00" },
    {id: 8, name: "お風呂掃除", detail: "水アカの掃除", status: "未対応", workTo: "父", startAt: "2023/11/01 19:30", endAt: "2023/11/01 20:00" },
    {id: 9, name: "お風呂掃除", detail: "水アカの掃除", status: "未対応", workTo: "父", startAt: "2023/11/01 19:30", endAt: "2023/11/01 20:00" },
    {id: 10, name: "お風呂掃除", detail: "水アカの掃除", status: "未対応", workTo: "父", startAt: "2023/11/01 19:30", endAt: "2023/11/01 20:00" },
];

const options = [
    { value: 'edit', uri: '/housework/:id/edit' },
    { value: 'delete', uri: '' },
]

const DataTable = () => {
    const addHousework = () => {
        console.log("addHousework");
    };

    return (
        <div style={{ width: '100%' }}>
            <Box className={"text-right mb-4"} component='div' xs={{ p:2 }}>
                <Button className={"common_btn"} onClick={addHousework}>家事追加</Button>
            </Box>

            <CustomPaginationActionsTable rows={rows} columns={columns} options={options}/>
        </div>
    );
}

export default DataTable;
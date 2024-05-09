import {Box, Button} from "@mui/material";
import React from "react";
import CustomPaginationActionsTable from "@/components/common/Table";


const columns = [
    { field: 'id', headerName: 'ID', width: 40, align: 'center' },
    { field: 'name', headerName: '名前', width: 130, align: 'center' },
    { field: 'nickname', headerName: 'ニックネーム', width: 200, align: 'center' },
    { field: 'role', headerName: '役割', width: 90, align: 'center' },
];


const rows = [
    {id: 1, name: "test1", nickname: "test1", role: 1},
    {id: 2, name: "test2", nickname: "test2", role: 2},
    {id: 3, name: "test3", nickname: "test3", role: 3},
]


const options = [
    { value: 'edit', uri: '/family/:id/edit' },
    { value: 'delete', uri: '' },
]

const DataTable = () => {
    const addFamily = () => {
        alert("addFamily");
    }

    return (
        <div className={"max-w-[65%] m-auto"}>
            <Box className={"text-right mb-4"} component='div' xs={{ p:2 }}>
                <Button className={"common_btn"} onClick={addFamily}>メンバー追加</Button>
            </Box>
            <CustomPaginationActionsTable rows={rows} columns={columns} options={options}/>
        </div>
    );
}

export default DataTable;
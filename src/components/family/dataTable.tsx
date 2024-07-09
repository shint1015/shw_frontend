import {Box, Button} from "@mui/material";
import React, {useContext} from "react";
import CustomPaginationActionsTable from "@/components/common/Table";
import {convertFormatTableData} from "@utils/convert";
import {CommonInfoContext} from "@/context/CommonContext";

interface Props {
    data: Record<string, any>[];
}

const columns = [
    { field: 'id', headerName: 'ID', width: 40, align: 'center' },
    { field: 'name', headerName: '名前', width: 130, align: 'center' },
    { field: 'role', headerName: 'メンバー', width: 90, align: 'center' },
];

const options = [
    { value: 'edit', uri: '/family/:id/edit' },
    { value: 'delete', uri: '' },
]

const DataTable = ({data}: Props) => {
    const commonInfo = useContext(CommonInfoContext);
    const rows = convertFormatTableData(data, columns, {roles: commonInfo.roles});
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
import {Box, Card} from "@mui/material";
import React, {Suspense, useContext} from "react";
import CustomPaginationActionsTable from "@/components/common/Table";
import LoadingScreen from "@/components/common/Loading";
import {CommonInfoContext} from "@/context/CommonContext";
import {convertFormatTableData} from "@utils/convert";

interface Props {
    data: Record<string, any>[];
}

const columns = [
    { field: 'name', headerName: '名前', width: 130},
    { field: 'role', headerName: '', width: 130},
    { field: 'point', headerName: 'ポイント', width: 130}
];


const DataTable = ({data}: Props) => {
    const rows = convertFormatTableData(data, columns);

    return (
        <Card className={"card_common"}>
            <CustomPaginationActionsTable rows={rows} columns={columns}/>
        </Card>
    );
}

export default DataTable;

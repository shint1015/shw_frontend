import {Box, Card} from "@mui/material";
import React, {Suspense} from "react";
import CustomPaginationActionsTable from "@/components/common/Table";
import LoadingScreen from "@/components/common/Loading";


const columns = [
    { field: 'name', headerName: '名前', width: 130, align: 'center' },
    { field: 'role', headerName: '', width: 130, align: 'center'},
    { field: 'point', headerName: 'ポイント', width: 130, align: 'center'}
];

const options = {

};

const rows = [

];

const createPaginationActionsTable = () => {
    return <CustomPaginationActionsTable rows={rows} columns={columns} options={options}/>
}

const DataTable = () => {
    return (
        <Card className={"card_common"}>
            <Suspense fallback={<LoadingScreen />}>
                {createPaginationActionsTable()}
            </Suspense>
        </Card>
    );
}

export default DataTable;

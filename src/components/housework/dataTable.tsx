"use client";
import * as React from 'react';
import {Box, Button, Card} from "@mui/material";
import CustomPaginationActionsTable from "@/components/common/Table";
import Link from "next/link";
import Housework from "@utils/api/housework";
import {Suspense, useEffect, useState} from "react";
import LoadingScreen from "@/components/common/Loading";
interface Props {
    data: Record<string, any>[];
}

const columns = [
    { field: 'id', headerName: 'ID', width: 40 },
    { field: 'title', headerName: '家事', width: 130 },
    { field: 'detail', headerName: '詳細', width: 200 },
    { field: 'status', headerName: '状態', width: 90 },
    { field: 'workTo', headerName: '担当', width: 90},
    { field: 'startedAt', headerName: '開始日時', width: 200},
    { field: 'endedAt', headerName: '終了日時', width: 200},
];

const options = [
    { value: 'edit', uri: '/housework/:id/edit' },
    { value: 'delete', uri: '' },
]
// data: Record<string, any>[]
const DataTable = ({data}: Props) => {
    let rows: Record<string, any> = [];
    for (let i = 0; i < data.length; i++) {
        let record: { [key: string]: string } = {};
        for (let j = 0; j < columns.length; j++) {
            if (columns[j].field === 'startedAt' || columns[j].field === 'endedAt') {
                record[columns[j].field] = new Date(Number(data[i][columns[j].field]) * 1000).toLocaleString();
                continue;
            }
            record[columns[j].field] = data[i][columns[j].field] as string;
        }
        rows.push(record);
    }

    return (
        <div style={{width: '100%'}}>
            <Box className={"text-right mb-4"} component='div' sx={{p: 2}}>
                <Button className={"common_btn"}>
                    <Link id={"add_housework"} href={"/housework/new"}>
                        家事追加
                    </Link>
                </Button>
            </Box>
            <CustomPaginationActionsTable rows={rows} columns={columns} options={options}/>
        </div>
    );
};

export default DataTable;
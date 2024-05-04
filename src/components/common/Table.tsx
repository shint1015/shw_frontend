import { useState, MouseEvent, ChangeEvent } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import EditIcon from '@mui/icons-material/Edit';
import Link from "next/link";
import HouseworkDeleteDialog from "@/components/housework/deleteDialog";
import {TableHead} from "@mui/material";
import {AlignType} from "@/types/type";

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
        event: MouseEvent<HTMLButtonElement>,
    ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box className={"flex"} sx={{ ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

export default function CustomPaginationActionsTable(props: {rows:{[key: string]: any}, columns: {field: string, headerName: string, width: number, align?: AlignType}[], options?: {value: string, uri: string}[]}) {
    const count = props.rows.length;
    const [page, setPage] = useState(0);
    const [perPage, setPerPage] = useState(5);
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * perPage - count) : 0;

    const handleChangePage = (
        event: MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangePerPage = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleActionButtonClick = (houseworkData: {[key: string]: any}, actionType: string) => {
        if (actionType === 'delete') {
            alert("delete")
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        {
                            (props.columns.map((column) => (
                                <TableCell key={column.field} style={{ width: column.width }} align={column.align}>
                                    {column.headerName}
                                </TableCell>
                            )))
                        }
                        <TableCell key={"action_btn"}>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(perPage > 0
                            ? props.rows.slice(page * perPage, page * perPage + perPage)
                            : props.rows
                    ).map((row: any) => (
                        <TableRow key={row.id}>
                            {
                                (props.columns.map((column) => (
                                    <TableCell key={column.field} style={{ width: column.width }} align={column.align}>
                                        {row[column.field]}
                                    </TableCell>
                                )))
                            }
                            <TableCell key={"action_btn"} className={"flex flex-row justify-end"}>
                                {
                                    (props.options?.map((option) => (
                                        (option.value === 'edit') ?
                                            <Link key={option.value}
                                                  href={option.uri.replace(':id', row.id)}
                                            >
                                                <IconButton aria-label={option.value}>
                                                    <EditIcon />
                                                </IconButton>
                                            </Link>
                                            :
                                            <HouseworkDeleteDialog key={"deleteDialog"} houseworkData={row} />
                                    )))
                                }
                            </TableCell>
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={props.columns.length + 1}
                            count={count}
                            rowsPerPage={perPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page',
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangePerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

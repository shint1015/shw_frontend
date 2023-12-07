import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import {IconButton} from "@mui/material";

export default function HouseworkDeleteDialog(props: {houseworkData:{[key: string]: any}}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        alert("delete")
    }

    return (
        <React.Fragment>
            <IconButton onClick={handleClickOpen}>
                <DeleteIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>Are you sure you want to delete this housework?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <TableContainer>
                            <Table aria-label={"simple table"}>
                                {Object.entries(props.houseworkData).map(([key, value]) => {
                                    return (
                                        <TableRow key={key}>
                                            <TableCell component={"th"} scope={"row"}>
                                                {key}
                                            </TableCell>
                                            <TableCell align={"right"}>{value}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </Table>
                        </TableContainer>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import GroupsIcon from '@mui/icons-material/Groups';
import { Tooltip } from '@mui/material';

export default function EvaluationDialog({ children, disabled=false }) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const buttonEvaluateMembers = <ButtonEvaluateMembers onClick={handleOpen} open={open} disabled={disabled}/>;

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <React.Fragment>
            {buttonEvaluateMembers}
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={"paper"}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">組員互評</DialogTitle>
                <DialogContent dividers>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

function ButtonEvaluateMembers({ onClick, open, disabled=false }) {


    return <>
        <Tooltip title="組員互評">
            <Button color="inherit" onClick={onClick} open={open} disabled={disabled}><GroupsIcon /></Button>
        </Tooltip>

    </>
}
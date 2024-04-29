import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CircularProgress, Tooltip } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { submit_save_Assessment } from '../verifyUser';

export default function ButtonSave({ disabled }) {
    const [open, setOpen] = React.useState(false);
    const [inProgress, setInProgress] = React.useState(false);
    const [diaglogContent, setDiaglogContent] = React.useState('評分儲存成功')
    const handleClickSave = () => {
        setInProgress(true)
        submit_save_Assessment(window.accessToken, window.assessment).then(res => {
                console.log(res)
                setInProgress(false)
                if(res.status === 200){
                    setDiaglogContent('評分儲存成功')
                } else {
                    setDiaglogContent('儲存失敗，請重新儲存')
                }
                setOpen(true);
            })
    };

    const handleClose = () => {
        setOpen(false);
    };

    const buttonSave = inProgress ? <CircularProgress color="inherit" /> : <Tooltip title="儲存,未來還可再登入更改">
        <Button color="inherit" onClick={handleClickSave} disabled={disabled}><SaveIcon /></Button>
    </Tooltip>

    return (
        <React.Fragment>
            {buttonSave}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"執行結果"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {diaglogContent}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>

                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}


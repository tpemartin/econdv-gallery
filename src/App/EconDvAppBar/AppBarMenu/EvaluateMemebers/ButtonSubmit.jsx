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
import BackupIcon from '@mui/icons-material/Backup';

export default function ButtonSubmit({ setHasSubmit, disabled }) {
    const [open, setOpen] = React.useState(false);
    const [inProgress, setInProgress] = React.useState(false);
    const [diaglogContent, setDiaglogContent] = React.useState('評分儲存成功')
    const [isConfirmStage, setIsConfirmStage] = React.useState(true)
    const handleClickSubmit = () => {
        setIsConfirmStage(true)
        const contentConfirmation = {...window.assessment}
        delete contentConfirmation.submit
        setDiaglogContent(JSON.stringify(contentConfirmation))
        setOpen(true);
    }
    const handleSubmit = () => {
        setIsConfirmStage(false)
        setOpen(false)
        setInProgress(true)
        window.assessment.submit=true
        submit_save_Assessment(window.accessToken, window.assessment, true).then(res => {
                console.log(res)
                setInProgress(false)
                if(res.status === 200){
                    setDiaglogContent('評分上傳成功')
                    
                    setHasSubmit(true)
                } else {
                    setDiaglogContent('上傳失敗，請重新上傳')
                    window.assessment.submit=false
                    setHasSubmit(false)
                }
                setOpen(true);
            })
    };

    const handleClose = () => {
        setOpen(false);
    };

    const buttonSubmit = inProgress ? <CircularProgress color="inherit" /> : <Tooltip title="上傳封存,之後無法再更改">
        <Button color="inherit" onClick={handleClickSubmit} disabled={disabled}><BackupIcon /></Button>
    </Tooltip>

    const title = isConfirmStage ? '請確認評分 上傳後將鎖住無法更動' : '執行結果'

    const dialogButtons = isConfirmStage ? <>
        <Button onClick={handleSubmit}>確認上傳</Button>
        <Button onClick={handleClose}>取消</Button>
    </> : <>
        <Button onClick={handleClose}>OK</Button>
    </>
    return (
        <React.Fragment>
            {buttonSubmit}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {diaglogContent}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {dialogButtons}
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}


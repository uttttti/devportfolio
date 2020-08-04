import React from 'react';
import './ExcuseDialog.scss';
import { Dialog, DialogContent, IconButton, DialogTitle, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

const ExcuseDialog: React.FC<SimpleDialogProps> = (props: SimpleDialogProps) => {
  const { onClose, open } = props;
  
  return (
    <div className="ExcuseDialog" data-testid="ExcuseDialog">
      <Dialog onClose={onClose} open={open}>
        <IconButton aria-label="close" onClick={onClose} className="close-button">
          <CloseIcon color="primary" />
        </IconButton>
        <DialogTitle className="dialog-title">
          <Typography variant="h4">Sorry…</Typography>
        </DialogTitle>
        <DialogContent className="dialog-content">
          <Alert severity="warning"　color="info">This is just a sample. — These links are invalid.</Alert>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ExcuseDialog;

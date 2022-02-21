import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ConfirmDialog(props) {
  return (

      <Box
        open={true}
        onCancel={props.onCancel}
        onConfirm={props.onConfirm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={style}
      >
        <DialogTitle id="alert-dialog-title" color="red">
         {props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onCancel} autoFocus>
            Cancel
          </Button>
          <Button onClick={props.onConfirm} color="red">
            Confirm
          </Button>
        </DialogActions>
      </Box>

  );
}

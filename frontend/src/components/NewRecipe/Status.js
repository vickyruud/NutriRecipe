/*import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate(props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
      {props.message}...
    </Box>
  );
}*/

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CircularProgress from '@mui/material/CircularProgress';

export default function AlertDialog(props) {
  return (
    <div>
      <Dialog
        open={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
            <CircularProgress />
            {props.message}...
        </DialogContent>
      </Dialog>
    </div>
  );
}

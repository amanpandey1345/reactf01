import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';



import "react-toastify/dist/ReactToastify.css";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TemDailog({ContectD,title,ActionD,icons,id}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setOpen(false);
  };




  return (
    <div>
      <Button variant="outlined" onClick={(e)=>{handleClickOpen(e)}}>
        {icons}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            {ContectD}
        </DialogContent>

      </Dialog>
    </div>
  );
}

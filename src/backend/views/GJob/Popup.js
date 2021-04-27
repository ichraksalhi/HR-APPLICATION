import React from 'react';
import {Dialog, DialogTitle, DialogContent, makeStyles, Typography, DialogActions, Button} from '@material-ui/core';
import DialogContentText from '@material-ui/core/DialogContentText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {Link,useHistory } from 'react-router-dom' ;

const Popup = (props) => {
  const history = useHistory();
  const {title,app, detail, id, children, openPopup, setOpenPopup} = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const Details = (id) =>{
    if(app === "app"){
      history.push(`/admin/jobAdDetails/${id}`);
    }else{
      history.push(`/admin/jobDetails/${id}`);
    }
  }
  return (
    <Dialog
    fullScreen={fullScreen}
    open={openPopup}
    onClose={()=> {setOpenPopup(false)}}
    aria-labelledby="responsive-dialog-title"
  >
    <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>
       {detail}
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button autoFocus  onClick={()=> {setOpenPopup(false)}} color="primary">
        Close
      </Button>
      <Button color="primary" onClick={() => {Details(id)}} autoFocus>
        Details
      </Button>
    </DialogActions>
  </Dialog>
    );
};

export default Popup;
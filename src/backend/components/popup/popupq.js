import React from 'react';
import {Dialog,DialogTitle,DialogContent} from '@material-ui/core';
import {Button} from "reactstrap";
import CloseIcon from '@material-ui/icons/Close';

export default function popupq(props) {
    const {title,children,openPopupq,setOpenPopupq}=props;
    return (
        <Dialog open={openPopupq}  fullWidth
       maxWidth="sm">
           <DialogTitle>
<div className="font-weight-bold" >Add Question
          <Button  style={{float:'right', backgroundColor:'#ff000080'}} onClick={()=>{setOpenPopupq(false)}}>
              <CloseIcon/>
            </Button> 
          </div>
           </DialogTitle>
           <DialogContent dividers>
{children}
           </DialogContent>

       </Dialog>
    )
}

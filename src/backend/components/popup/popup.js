import React from 'react'
import {Dialog,DialogTitle,DialogContent} from '@material-ui/core';
import {Button} from "reactstrap";
import CloseIcon from '@material-ui/icons/Close';
export default function popup(props) {
    const {title,children,openPopup,setOpenPopup}=props;
    return (
       <Dialog open={openPopup}  fullWidth
       maxWidth="sm">
           <DialogTitle>
<div className="font-weight-bold" >Add Test
          <Button  style={{float:'right', backgroundColor:'#ff000080'}} onClick={()=>{setOpenPopup(false)}}>
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

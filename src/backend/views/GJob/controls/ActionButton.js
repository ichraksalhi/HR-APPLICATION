import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    
}))
const ActionButton = (props) => {
    const {color, children, onClick} = props;
    const classes = useStyles();
    return (
        <Button onClick={onClick}>
            {children}
        </Button>
       
    );
};

export default ActionButton;
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@material-ui/core';
import VisibilityIcon from '@mui/icons-material/Visibility';

export function TableEditButton(props){
    return(
        <IconButton color = "#0F9F93" component = "span">
            <EditIcon />
        </IconButton>
    )
}

export function TableVisibilityButton(props){
    return(
        <IconButton color = "#0F9F93" component = "span">
            <VisibilityIcon />
        </IconButton>
    )
}

export function TableDeleteButton(props){
    return(
        <IconButton color = "#0F9F93" component = "span">
            <DeleteIcon />
        </IconButton>
    )
}
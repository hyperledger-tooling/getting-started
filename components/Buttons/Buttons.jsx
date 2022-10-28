import React from 'react'
import { Button } from '@mui/material';
import classes from "./style.module.scss";

export function PrimaryButton({text }) {
    text = text || 'Get Involved';
    // console.log("The text is here", text);
    return (
        <div>
            <Button
                className={[classes.button, classes.typography, classes.buttonPrimary]}
                variant="contained"
            >{text}</Button>
        </div>
    )
}

export function SecondaryButton({text}) {
    return (
        <div>
            <Button
                className={[classes.button, classes.typography,classes.buttonSecondary]}
                variant="contained"
            >{text}</Button>
        </div>
    )
}



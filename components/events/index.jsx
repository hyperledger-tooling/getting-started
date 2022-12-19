import React from 'react'
import { Card, CardMedia, Box, CardContent } from '@mui/material'
import classes from './style.module.scss'
import styles from '../../styles/globalStyle.module.scss'


export default function Index (){
    return (
        <Card
            className={classes.eventCard}
        >
            <CardMedia
                component="img"
                height="380"
                width="90"
                image="/images/persona6.jpg"
            // className={classes.eventCardMedia}
            />
            <CardContent
                className={classes.eventCardContent}
            >
                <button className={styles.secondaryButton} >
                    Register here
                </button>
            </CardContent>
        </Card>
    )
}
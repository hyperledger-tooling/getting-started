import React from 'react'
import { Card, CardMedia, Box, CardContent } from '@mui/material'
import Button from '../Buttons/index'
import classes from './style.module.scss'
import styles from '../../styles/globalStyle.module.scss'


export default () => {
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
                // sx={
                //     {
                //         display: 'flex',
                //         justifyContent: 'center',
                //         alignItems: 'center',
                //         // backgroundColor: 'blue',
                //         position: 'absolute',
                //         zIndex: 'tooltip',
                //         bottom: '0',
                //         width: '100%',
                //     }
                // }
                className={classes.eventCardContent}
            >
                <button className={styles.secondaryButton} >
                    Register here
                </button>
            </CardContent>
        </Card>
    )
}
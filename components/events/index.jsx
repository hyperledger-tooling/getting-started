import React from 'react'
import { Card, CardMedia, Box, CardContent } from '@mui/material'
import classes from './style.module.scss'
import styles from '../../styles/globalStyle.module.scss'
import Image from 'next/image'

export default function Index() {
    return (
        <div
            className={classes.eventCard}
        >
            <div className={classes.eventImageBox} 
            >
                <Image
                    // component="img"
                    height={300}
                    width={1200}
                    alt="event image"
                    src="/images/persona6.jpg"
                    // className="classes.eventImageBox"
                />
                {/* dfdfdfd */}
            </div>
            <CardContent
                className={classes.eventCardContent}
            >
                <button className={styles.secondaryButton} >
                    Register here
                </button>
            </CardContent>
        </div>
    )
}
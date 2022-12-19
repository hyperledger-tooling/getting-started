import React from 'react'
import Events from './index'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import classes from './style.module.scss';
import styles from '../../styles/globalStyle.module.scss'

function Index() {
    return (
        <div>
            <h1 className={styles.heading}>
                Events
            </h1>
            <div className={classes.eventBox}>
                <Events />
            </div>
        </div>
    )
}

export default Index
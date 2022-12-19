import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import classes from './style.module.scss';

export default function Index({ title, desc, icon }) {
  return (
    <div className={classes.ctaCard}>
      <div className={classes.ctaCardMedia}>
        {/* <Image src="/icons/twitter.png" height="30px"  width="30px"/> */}
        <Image src={icon} height="60px"  width="60px" alt=""/>
      </div>
      <div className={classes.ctaCardContent}>
        <div className={classes.ctaCardTitle}>{title}</div>
        <div>{desc}</div>
      </div>
    </div>
  )
}
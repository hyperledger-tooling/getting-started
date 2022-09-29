import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { styled, makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import { NodeNextRequest } from 'next/dist/server/base-http/node';
import classes from './style.module.css';
import Button from '../Buttons/index'

function Navbar() {
  //   const classes = useStyles();
  return (
    <>
      <AppBar
        position="sticky" 
        className={classes.appBar}
      // backgroundColor="#fff"
      // color="#222"
      sx={
        {
          zIndex:'tooltip'
        }
      }
      >
      <Toolbar className={classes.toolbar}>
        <Box>
          <Image
            src="https://challenge.hyperledger.org/css/2022_style/img/logos/hyperledgerfoundation.png"
            height="50px"
            width="280px"
          />
        </Box>
        <Box className={classes.navItems}>
          <Link href="/">
            <Typography className={classes.typography} >Home</Typography>
          </Link>

          <Link href="projects">
            <Typography className={classes.typography} >Projects</Typography>
          </Link>

          <Link href="community">
            <Typography className={classes.typography} >Community</Typography>
          </Link>

          <Link href="events">
            <Typography className={classes.typography} >Events</Typography>
          </Link>

          <Link href="https://www.hyperledger.org/">
            <Typography  className={classes.typography}>
              <Button type="primary" text="Get Involved"/>
            </Typography>
          </Link>

        </Box>

      </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar
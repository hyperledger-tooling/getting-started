import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { styled, makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import { NodeNextRequest } from 'next/dist/server/base-http/node';
import classes from './style.module.css';

// const useStyles = makeStyles({
//   appBar: {
//     backgroundColor: '#fff',
//     color: 'black',
//     boxShadow: '0px 5px 10px 2px rgba(0,0,0,0.1)',
//     height: '96px',
//     justifyContent: 'center',
//     width: '100%',
//     overflow: 'hidden',
//   },

//   toolbar: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     margin: '0px 100px 0 100px',
//   },

//   navItems: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     fontSize: '16px',
//     // marginLeft: '10px'
//   },

//   typography: {
//     fontSize: '16px',
//     fontFamily: 'Poppins',
//     fontWeight: 'Regular',
//     marginLeft: '2.5rem',
//     cursor: 'pointer',
//   },

//   button:{
//     borderRadius: 20,
//     backgroundColor: '#111',
//     color: '#fff',
//     textTransform: 'none',
//     height:'50px',
//     width:'180px',
//     borderRadius: 50,
//     boxShadow: "none",
//     "&:hover": {
//       backgroundColor: '#111',
//       boxShadow: "none",
//     }
//   }


// })

function Navbar() {
  //   const classes = useStyles();
  return (
    <>
      <AppBar
        position="sticky" 
        className={classes.appBar}
      // backgroundColor="#fff"
      // color="#222"
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
            <Typography va>
              <Button className={[classes.button, classes.typography]} variant="contained">Get Involved</Button>
              {/* <Button
                variant="contained"
                disableElevation
                sx={
                  {
                    borderRadius: '50px',
                    backgroundColor: '#111',
                    height: '50px',
                    width: '180px',
                    // textTransform:'lowercase'


                  }
                }

              >
                Get Involved
              </Button> */}
            </Typography>
          </Link>

        </Box>

      </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar
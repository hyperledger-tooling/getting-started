import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { styled, makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import classes from './style.module.scss';
import Button from '../Buttons/index'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import { PrimaryButton } from '../Buttons/Buttons';
import { useState } from 'react';
import NavbarHover from './NavbarHover';


function Navbar() {

  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = () => {
    setAnchorEl("root");
    // setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };



  const handleOpenNavMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div
            className={classes.logo}
          // sx={
          //   {
          //     height: {
          //       xs: '40px',
          //       md: '50px'
          //     },
          //     width: {
          //       xs: "220px",
          //       md: '250px'
          //     },
          //   }
          // }
          >
            <Image
              src="https://challenge.hyperledger.org/css/2022_style/img/logos/hyperledgerfoundation.png"
              height="50px"
              width="280px"
            />
          </div>
          <div
            className={classes.toolbarItems}
          >

            <Link href="/">
              <Typography
                className={classes.typography}
              >
                Home
              </Typography>
            </Link>

            <div>
              <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                className={classes.typography}
              >
                <Link href="projects">
                  Projects
                </Link>
              </Typography>
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                  mt: 10,
                }}
                open={open}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 100, left: 800 }}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'center',
                  horizontal: 'center',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Box>
                  <NavbarHover />
                </Box>
              </Popover>
            </div>

            <Link href="community">
              <Typography
                className={classes.typography}
              // fontFamily="Poppins"
              // sx={
              //   {
              //     ml: 4,
              //     cursor: "pointer"
              //   }
              // }
              >
                Community
              </Typography>
            </Link>

            <Link href="events">
              <Typography
                className={classes.typography}
              // fontFamily="Poppins"
              //   sx={
              //   {
              //     ml                                                                                                                                                                        : 4,
              //     cursor: "pointer"
              //   }
              // }
              >
                Events
              </Typography>
            </Link>

            <Link href="https://www.hyperledger.org/">
              <Typography
                className={classes.typography}
              // fontFamily="Poppins"
              // sx={
              //   {
              //     ml: 4,
              //     cursor: "pointer"
              //   }
              // }
              >
                <Button type="primary" text="Get Involved" />
              </Typography>
            </Link>
          </div>

          <Box
            sx={
              {
                display: {
                  md: "none"
                }
              }
            }
          >
            <IconButton
              size="large"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
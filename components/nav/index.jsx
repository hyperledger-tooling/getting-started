import React, { } from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import classes from './style.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import { useState } from 'react';
import NavbarHover from './NavbarHover';
import styles from '../../styles/globalStyle.module.scss'

export default function Index() {

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
      <AppBar
        color="inherit"
        elevation={0}
        className={classes.appBar}
        >
        <Toolbar 
        className={classes.toolBar}
        >
          <div
            className={classes.logo}
          >
            <Link href="/">
              <Image
                src="https://challenge.hyperledger.org/css/2022_style/img/logos/hyperledgerfoundation.png"
                height="50px"
                width="280px"
                alt="Hyperledger logo"
              />
            </Link>

          </div>
          <div
            className={classes.toolbarItems}
          >

            <Link href="/">
              <p
                className={classes.typography}
              >
                Home
              </p>
            </Link>

            <div>
              <p
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                className={classes.typography}
              >
                <Link href="projects">
                  Projects
                </Link>
              </p>
              < Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={open}
                anchorReference="none"
                onClose={handlePopoverClose}
                disableRestoreFocus
                className={classes.popover}
              >
                <NavbarHover />
              </Popover>
            </div>
            <div>
              <p
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                className={classes.typography}
              >
                <Link href="community">
                  Community
                </Link>
              </p>
              < Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={open}
                anchorReference="none"
                className={classes.popover}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Box>
                  <NavbarHover />
                </Box>
              </Popover>
            </div>
            <div>
              <p
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                className={classes.typography}
              >
                <Link href="events">
                  Events
                </Link>
              </p>
              < Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={open}
                anchorReference="none"
                className={classes.popover}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Box>
                  <NavbarHover />
                </Box>
              </Popover>
            </div>

            {/* <Link href="community">
              <Typography
                className={classes.typography}
              >
                Community
              </Typography>
            </Link>

            <Link href="events">
              <Typography
                className={classes.typography}
              >
                Events
              </Typography>
            </Link> */}

            <Link href="https://www.hyperledger.org/">
              <p
                className={classes.typography}
              >
                <button className={styles.primaryButton} >
                  Get Involved
                </button>
              </p>
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
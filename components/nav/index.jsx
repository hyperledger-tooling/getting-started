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
import HoverMenu from 'material-ui-popup-state/HoverMenu'
import MenuItem from '@mui/material/MenuItem'
import {
  usePopupState,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks'


export default function Index() {

  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoMenu',
  })

  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = () => {
    // setAnchorEl("root");
    setAnchorEl(event.currentTarget);
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
  const id = open ? 'simple-popover' : undefined;

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
              <Box className={classes.typography}
                variant="contained" {...bindHover(popupState)}>
                <Link href="projects" >
                  Projects
                </Link>
              </Box>
              <HoverMenu
                PaperProps={{
                  style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                  },
                }}
                // onMouseEnter={handlePopoverOpen}
                // onMouseLeave={handlePopoverClose}

                {...bindMenu(popupState)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              >
                <MenuItem
                  disableRipple
                  style={{ background: 'transparent', boxShadow: 'none' }}
                  onClick={popupState.close}>
                  <NavbarHover />
                </MenuItem>
              </HoverMenu>
            </div>

            {/* <div>
              <Box className={classes.typography}
                variant="contained" {...bindHover(popupState)}>
                <Link href="projects" >
                  Projects
                </Link>
              </Box>
              <HoverMenu
                PaperProps={{
                  style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                  },
                }}
                // onMouseEnter={handlePopoverOpen}
                // onMouseLeave={handlePopoverClose}

                {...bindMenu(popupState)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              >
                <MenuItem
                  style={{ background: 'transparent', boxShadow: 'none' }}
                  onClick={popupState.close}>
                  <NavbarHover />
                </MenuItem>
              </HoverMenu>
            </div> */}


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
              {/* < Popover
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
              </Popover> */}
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
              {/* < Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                transitionDuration="300"
                open={open}
                anchorReference="none"
                className={classes.popover}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Box>
                  <NavbarHover />
                </Box>
              </Popover> */}
            </div>


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
import React, { } from 'react'
import { AppBar, Menu, Toolbar, Typography } from '@mui/material'
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
  bindTrigger,
} from 'material-ui-popup-state/hooks'
import { Subtitles } from '@mui/icons-material';
import navbarContents from '../../data/navbarData';

export default function Index() {

  const projectPopupState = usePopupState({
    variant: 'popover',
    popupId: 'project',
  })
  const communityPopupState = usePopupState({
    variant: 'popover',
    popupId: 'community',
  })
  const eventsPopupState = usePopupState({
    variant: 'popover',
    popupId: 'events',
  })

  const [anchorEl, setAnchorEl] = useState(null);
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })


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
                variant="contained" {...bindHover(projectPopupState)}>
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

                {...bindMenu(projectPopupState)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              >
                <MenuItem
                  disableRipple
                  style={{ background: 'transparent', boxShadow: 'none' }}
                  onClick={projectPopupState.close}>
                  <NavbarHover data={navbarContents[0]}/>
                </MenuItem>
              </HoverMenu>
            </div>
            <div>
              <Box className={classes.typography}
                variant="contained" {...bindHover(communityPopupState)}>
                <Link href="community" >
                  Community
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

                {...bindMenu(communityPopupState)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              >
                <MenuItem
                  disableRipple
                  style={{ background: 'transparent', boxShadow: 'none' }}
                  onClick={communityPopupState.close}>
                  <NavbarHover data={navbarContents[1]} />
                </MenuItem>
              </HoverMenu>
            </div>
            <div>
              <Box className={classes.typography}
                variant="contained" {...bindHover(eventsPopupState)}>
                <Link href="events" >
                  Events
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

                {...bindMenu(eventsPopupState)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              >
                <MenuItem
                  disableRipple
                  style={{ background: 'transparent', boxShadow: 'none' }}
                  onClick={eventsPopupState.close}>
                  <NavbarHover data={navbarContents[2]}/>
                </MenuItem>
              </HoverMenu>
            </div>

            <Link href="learn">
              <p
                className={classes.typography}
              >
                Learn
              </p>
            </Link>


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
              variant="contained" {...bindTrigger(popupState)}
            >
              <MenuIcon />
            </IconButton>


            <Menu
              {...bindMenu(popupState)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={
                {
                  display: {
                    md: "none"
                  },
                  mt: 5
                }
              }
              className={classes.menuContainer}
              PaperProps={{
                style: {
                  backgroundColor: 'white',
                  boxShadow: 'none',
                },
              }}

            >
              {
                navbarContents.map((data, idx) => (
                  <div key={idx} className={classes.menuItem}>
                    <Link href="projects">
                      <h2>{data.title}</h2>
                    </Link>
                    <div className={classes.menuItemList}>

                      {
                        data.subTitles.map((subTitle, id) => (
                          <Link key={id} href="projects">
                            <p>{subTitle.name}</p>
                          </Link>
                        ))
                      }
                    </div>
                  </div>
                ))
              }


            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
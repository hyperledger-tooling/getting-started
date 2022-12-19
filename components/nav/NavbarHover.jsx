import React from 'react'
import classes from './style.module.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function NavbarHover() {
  return (
    <div className={classes.navbarBox}>
      <div className={classes.navbarHover}>
        <div className={classes.navbarContent}>
          <h2 className={classes.navbarHeading}>Projects</h2>
          <li>Incubated Projects</li>
          <li>Graduated Projects</li>
          <li>Propose a Project</li>
          <li>All projects</li>

        </div>
        <div className={classes.navbarCards}>
          <Image height="150px" width="250px" src="/logos/fabric.svg" alt="project icon"/>
          <div className={classes.navbarCardContent}>
            Fabric 2.0 New Release
          </div>
          <p>
            See more
            <ArrowForwardIcon />
          </p>
        </div>
        <div className={classes.navbarCards}>
          <Image height="150px" width="250px" src="/logos/fabric.svg" alt="project icon" />
          <div className={classes.navbarCardContent}>
            Fabric 2.0 New Release
          </div>
          <p>
            See more
            <ArrowForwardIcon />
          </p>
        </div>
      </div>
    </div>


  )
}

export default NavbarHover;
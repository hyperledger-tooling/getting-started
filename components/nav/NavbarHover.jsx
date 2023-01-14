import React from 'react'
import classes from './style.module.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link'

function NavbarHover({ data }) {
  console.log("data from navbar", data)
  return (
    <div className={classes.navbarBox}>
      <div className={classes.navbarHover}>
        <div className={classes.navbarContent}>
          <Link href={data.titleLink}>
            <h2 className={classes.navbarHeading}>{data.title}</h2>
          </Link>

          {
            data.subTitles.map((subtitle, idx) => (
              <Link key={idx} href={subtitle.link}>
                <li>{subtitle.name}</li>
              </Link>
            ))
          }
          {/* <li>Graduated Projects</li>
          <li>Propose a Project</li>
          <li>All projects</li> */}
        </div>
        <div className={classes.navbarCards}>
          <div className={classes.navbarCardsImageBox}>
            <Image className={classes.navbarCardsImage} height="150px" width="280px" src={data.images[0]?.src || "/logos/fabric.svg"} alt="project icon" />
          </div>
          <div className={classes.navbarCardContent}>
            {data.images[0]?.content}
          </div>
          <p>
            See more
            <ArrowForwardIcon />
          </p>
        </div>
        <div className={classes.navbarCards}>
          <div className={classes.navbarCardsImageBox}>
            <Image className={classes.navbarCardsImage} height="150px" width="280px" src={data.images[1]?.src || "/logos/fabric.svg"} alt="project icon" />
          </div>
          <div className={classes.navbarCardContent}>
            {data.images[1]?.content}
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
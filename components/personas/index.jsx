import { Card, CardMedia, Box, CardContent, Typography } from '@mui/material'
import React from 'react'
import classes from './style.module.scss'
import Link from 'next/link';
import styles from '../../styles/globalStyle.module.scss'
import Image from 'next/image'

export default function Index({ title, buttonLink, imgUrl }) {
  return (
    <div>
      <div
        className={classes.personaCard}
      >
        <div className={classes.cardMedia}
        >
          <Image
            // component="img"
            height={300}
            width={500}
            alt="perona images"
            src={imgUrl}
          />
        </div>



        <Link href={buttonLink}>
          <div
            className={classes.cardContent}
          >
            <button className={styles.secondaryButton} >
              {title}
            </button>
          </div>
        </Link>

      </div>
    </div>
  )
}


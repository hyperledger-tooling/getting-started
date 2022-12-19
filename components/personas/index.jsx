import { Card, CardMedia, Box, CardContent, Typography } from '@mui/material'
import React from 'react'
import classes from './style.module.scss'
import Link from 'next/link';
import styles from '../../styles/globalStyle.module.scss'


export default function Index({ title, buttonLink, imgUrl }) {
  return (
    <div>
      <Card
        className={classes.personaCard}
      >
        <CardMedia
          component="img"
          height="300"
          width="500"
          image={imgUrl}
          className={classes.cardMedia}
        />

        <Link href={buttonLink}>
          <CardContent
            className={classes.cardContent}
          >
            <button className={styles.secondaryButton} >
              {title}
            </button>
          </CardContent>
        </Link>

      </Card>
    </div>
  )
}


import { Card, CardMedia, Box, CardContent, Typography } from '@mui/material'
import React from 'react'
import Button from '../Buttons/index'
import classes from './style.module.scss'

function PersonaCard({ title, buttonLink, imgUrl }) {
  // console.log("Card info", title, buttonLink, imgUrl)
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

        <CardContent
          className={classes.cardContent}
        >
          <Button type="secnondary" text={title}/>
        </CardContent>
      </Card>
    </div>
  )
}

export default PersonaCard
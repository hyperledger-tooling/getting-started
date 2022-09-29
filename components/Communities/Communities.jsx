import { Card, CardMedia, Box, CardContent } from '@mui/material'
import React from 'react'
import Button from '../Buttons/index'
import classes from './style.module.cs'

function Communities() {
  return (
    <div>
      <Card
        variant="outline"
        sx={
          {
            // backgroundColor: 'red',
            // height: '500px',
            cursor: 'pointer',
            position: 'relative',
            boxShadow: 4,
            borderRadius: "20px",
          }
        }
      >
        <CardMedia
          component="img"
          height="380"
          width="300"
          image="/images/persona1.jpg"
          sx={
            {
              borderRadius: '20px',
            }
          }
        />
        
        <CardContent
          sx={
            {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: 'blue',
              position: 'absolute',
              zIndex: 'tooltip',
              bottom:'0',
              width: '100%',
            }
          }
        >
          <Button type="secnondary" text="Regional Chapters"/>
        </CardContent>
      </Card>
    </div>
  )
}

export default Communities
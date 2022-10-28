import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import Announcement from './Announcement'
import Button from '../Buttons/index'

function index() {
  return (
    <div>
      <Box
        container 
        align="center"
        justifyContent="center"
        // height="800px"
        
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={
            {
              mb: 8,
              mt: 8,
            }
          }
        >
          Latest from Hyperledger
        </Typography>
        <Box
          sx={
            {
              mb:4
            }
          }
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={10}
          >
            <Grid
              item
              xs={3}
            >
              <Announcement />
            </Grid>
            <Grid
              item
              xs={3}
            >
              <Announcement />
            </Grid>
            <Grid
              item
              xs={3}
            >
              <Announcement />
            </Grid>
          </Grid>
        </Box>

        <Typography
          variant="h3"
          align="center"
          sx={
            {
              mb:4
            }
          }
        >
          Keep Up to Date with News,<br />
          Resources and Events
        </Typography>
        <Button type="primary" text="Subscribe to Newsletter"/>
      </Box>

    </div>
  )
}

export default index
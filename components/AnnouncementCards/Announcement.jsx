import { Typography, Box, Grid } from '@mui/material'
import React from 'react'
import classes from './style.module.css'

function Announcement() {
  return (
    <div>
      <Box
        height="auto"
        // boxShadow={classes.card}
        sx={
          {
            p:4,
            borderRadius: '20px',
            // boxShadow: "0px 343px 137px rgba(0, 0, 0, 0.01), 0px 193px 116px rgba(0, 0, 0, 0.05), 0px 86px 86px rgba(0, 0, 0, 0.09), 0px 21px 47px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
            boxShadow: 1,
            height: '600px',
            color: "text"
          }
        }
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={
            {
              p: 2
            }
          }
        >
          <Typography
            variant='h5'
            align='start'
            sx={
              {
                mb:5
              }
            }
          >
            Developer showcase series: Dr. Yunxi Zhang, Accenture
          </Typography>

          <Typography
            // variant='h6'
            align='start'
            sx={
              {
                typography: 'body1',
                fontWeight: 'light',
                mb:2,
              }
            }
            gutterBottom
          >
            June 30,2022 in Blog, Finance,
            Hyperledger Fabric,
            Hyperledger Iroha,
            Hyperledger Sawtooth
          </Typography>

          <Typography
            variant='h6'
            align='start'
            gutterBottom
            sx={
              {
                typography:'h6'
              }
            }
          >
            Bitcoin, Ethereum and other altcoins have sparked a range of investments, industries and even emotions. However, there is a fast-growing array of digital currencies
          </Typography>
        </Grid>

      </Box>
    </div>
  )
}

export default Announcement
import { Typography, Box, Grid } from '@mui/material'
import React from 'react'

function Announcement() {
  return (
    <div>
      <Box
        height="auto"
        sx={
          {
            boxShadow: 4,
            borderRadius: '20px',
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
            gutterBottom
            align='start'
          >
            Developer showcase series: Dr. Yunxi Zhang, Accenture
          </Typography>

          <Typography
            // variant='h6'
            align='start'
            sx={
              {
                typography: 'body2',
                fontWeight: 'light',
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
                typography:'body1'
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
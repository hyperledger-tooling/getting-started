import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import CTA from './CTA'
import CTACard from './CTACard'
import classes from './CTA.module.css'

function index() {
  return (
    <div>
      <Box
        height="900px"
        // width="100vw"
        className={classes.container}
        backgroundImage="/images/persona1.jpg"
      >
        <Box>
        </Box>
        <Grid
          // xs={4}
          container
          justifyContent="center"
          alignItems="center"
          // backgroundColor="green"
          direction="column"
        >
          <Typography
            variant="h3"
            alignItems="center"
            gutterBottom
            sx={
              {
                mb: 4,
                mt: 8,
              }
            }
          >
            Join the Hyperledger Community
          </Typography>

          <Grid
            container
            xs={10}
          >
            <Typography
              variant="subtitle"
              align="center"
              gutterBottom
              sx={
                {
                  mb: 4,
                }
              }
            >
              Hyperledger Foundation is a non profit organization that brings together all the necessary resources and infrastructure to ensure thriving and stable ecosystems around open source software blockchain projects.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            // backgroundColor="orange"
            xs={10}
            sx={
              {
                display: 'flex',
                flexWrap: 'wrap',
                p: 1,
                m: 1,
              }
            }
            spacing={4}
          >
            <Grid
              item
              xs={10}
              sm={6}
              md={4}
            >
              <CTACard />
            </Grid>

            <Grid
              item
              xs={10}
              sm={6}
              md={4}
            >
              <CTACard />
            </Grid>
            <Grid
              item
              xs={10}
              sm={6}
              md={4}
            >
              <CTACard />
            </Grid>
            <Grid
              item
              xs={10}
              sm={6}
              md={4}
            >
              <CTACard />
            </Grid>
            <Grid
              item
              xs={10}
              sm={6}
              md={4}
            >
              <CTACard />
            </Grid>
            <Grid
              item
              xs={10}
              sm={6}
              md={4}
            >
              <CTACard />
            </Grid>
            <Grid
              item
              xs={10}
              sm={6}
              md={4}
            >
              <CTACard />
            </Grid>
            <Grid
              item
              xs={10}
              sm={6}
              md={4}
            >
              <CTACard />
            </Grid>
            <Grid
              item
              xs={10}
              sm={6}
              md={4}
            >
              <CTACard />
            </Grid>
            <Grid
              item
              xs={10}
              sm={6}
              md={4}
            >
              <CTACard />
            </Grid>
            <Grid
              item
              xs={10}
              sm={6}
              md={4}
            >
              <CTACard />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default index
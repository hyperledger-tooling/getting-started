import React from 'react'
import { Box } from '@mui/system';
import { Typography, Grid, Button } from '@mui/material'
import Image from 'next/image';
import { ClassNames } from '@emotion/react';
import classes from './footer.module.css'
import Link from 'next/link'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

function Footer() {
  return (
    <div>
      <Box
        height="100%"
        backgroundColor="#262424"
        color="#FFFFFF"
        sx={
          {
            p: 4
          }
        }
      >
        <Box
          sx={
            {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: 'white'
            }
          }
        >
          <Box>
            <Image
              src="/logos/Hyperledger.png"
              height="50px"
              width="280px"
            />
          </Box>
          <Box
            sx={
              {
                display: 'flex',
                flexDirection: 'row',
              }
            }
          >
            <Box
              sx={
                {
                  ml: 2
                }
              }
            >
              <Image src="/icons/github.png"
                height="40px"
                width="40px"
              />
            </Box>
            <Box
              sx={
                {
                  ml: 2
                }
              }
            >
              <Image src="/icons/twitter.png"
                height="40px"
                width="40px"
              />
            </Box>
            <Box
              sx={
                {
                  ml: 2
                }
              }
            >
              <Image src="/icons/twitter.png"
                height="40px"
                width="40px"
              />
            </Box>
            <Box
              sx={
                {
                  ml: 2
                }
              }
            >
              <Image src="/icons/discord.png"
                height="40px"
                width="40px"
              />
            </Box>
            <Box
              sx={
                {
                  ml: 2
                }
              }
            >
              <Image src="/icons/linkedin.png"
                height="40px"
                width="40px"
              />
            </Box>
            <Box
              sx={
                {
                  ml: 2
                }
              }
            >
              <Image src="/icons/mail.png"
                height="40px"
                width="40px"
              />
            </Box>
          </Box>
        </Box>

        <hr />
        <Box
          // backgroundColor="red"
          gutterBottom
        >
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={
              {
                display: 'flex',
                flexDirection: 'row',
              }
            }
          >
            <Grid
              item
              xs={10}
              md={6}
              lg={2}
            >
              <List>
                <ListItem >
                  <Typography variant='h6'>About Us</Typography>
                </ListItem>
                <ListItem >
                  <Typography variant='body1'>Incubated Projects</Typography>
                </ListItem>
                <ListItem >
                  <Typography variant='body1'>Graduated Projects</Typography>
                </ListItem>
                <ListItem >
                  <Typography variant='body1'>Propose a project</Typography>
                </ListItem>
                <ListItem >
                  <Typography variant='body1'>Explore Landscape</Typography>
                </ListItem>
              </List>
            </Grid>

            <Grid
              item
              xs={10}
              md={6}
              lg={2}
              backgroundColor=""
            >
              <List>
                <ListItem >
                  <Typography variant='h6' >Projects</Typography>
                </ListItem>
                <ListItem >
                  <Typography variant='body1'>Members</Typography>
                </ListItem>
                <ListItem >
                  <Typography variant='body1'>New Contributors Roadmap</Typography>
                </ListItem>
                <ListItem >
                  <Typography variant='body1'>Working group</Typography>
                </ListItem>
                <ListItem >
                  <Typography variant='body1'>Sigs</Typography>
                </ListItem>
                <ListItem >
                  <Typography variant='body1'>Regional Chapters</Typography>
                </ListItem>
                <ListItem >
                  <Typography variant='body1'>Working Groups</Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid
              item
              xs={10}
              md={6}
              lg={2}
            >
              <List>
                <ListItem >
                  <Typography variant='h6'>Community</Typography>
                </ListItem>
                <ListItem >
                  <Typography variant='body1'>Who are we</Typography>
                </ListItem>
                <ListItem >
                  <Typography variant='body1'>Members</Typography>
                </ListItem>
                <ListItem >
                  <Typography variant='body1'>Code of Conduct</Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid
              item
              xs={10}
              md={6}
              lg={2}
            >
              <List>
                <ListItem >
                  <Typography variant='h6'>Events</Typography>
                </ListItem>
                <ListItem >
                  <Typography variant='body1'>Who are we</Typography>
                </ListItem>
                <ListItem >
                  <Typography variant='body1'>Members</Typography>
                </ListItem>
                <ListItem >
                  <Typography variant='body1'>Code of Conduct</Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid
              item
              xs={10}
              md={6}
              lg={2}
            >
              <List>
                <ListItem >
                  <Typography variant='h6'>Learn</Typography>
                </ListItem>
                <ListItem >
                  <Typography variant='body1'>Who are we</Typography>
                </ListItem>
                <ListItem >
                  <Typography variant='body1'>Members</Typography>
                </ListItem>
                <ListItem >
                  <Typography variant='body1'>Code of Conduct</Typography>
                </ListItem>
              </List>
            </Grid>

          </Grid>
        </Box>

        <Box color="primary">
          <Grid
            container
            // xs={}
          >
            <Typography
              variant="body2"
            >
              Copyright © 2022 The Linux Foundation®. All rights reserved. Hyperledger Foundation, Hyperledger, and the other Hyperledger Foundation trademarks are trademarks of The Linux Foundation. For a list of Hyperledger Foundation trademarks, please see our Trademark Usage page. Linux is a registered trademark of Linus Torvalds. Privacy Policy and Terms of Use.
            </Typography>
          </Grid>
        </Box>
        <hr />
        <Typography variant="body1">© 2022 Hyperledger Foundation</Typography>
      </Box>
    </div >
  )
}

export default Footer
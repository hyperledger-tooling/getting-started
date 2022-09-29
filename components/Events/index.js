import React from 'react'
import Events from './Events'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'


function index() {
    return (
        <div>
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
                Events
            </Typography>
            <Box
                sx={
                    {
                        display: 'flex',
                        align: 'center',
                        justifyContent: 'center',
                    }
                }
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={
                        {
                            display: "flex",
                            width: "80%",
                        }
                    }
                >
                    <Events />
                </Grid>
            </Box>
        </div>
    )
}

export default index
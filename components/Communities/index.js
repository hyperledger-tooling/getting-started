import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import PersonaCard from '../PersonaCard/PersonaCard'

const data = [
    {
        title: "Business",
        buttonLink: "https://www.hyperledger.org/",
        imgUrl: "../../public/images/persona1.jpg",
    },
    {
        title: "Developer",
        buttonLink: "https://www.hyperledger.org/",
        imgUrl: "../../public/images/persona1.jpg",
    },
    {
        title: "Enterprises",
        buttonLink: "https://www.hyperledger.org/",
        imgUrl: "../../public/images/persona1.jpg",
    },
]

function index() {
    return (
        <div>
            <Typography
                variant="h3"
                align="center"
                gutterBottom
                sx={
                    {
                        mb:8,
                        mt:8,
                    }
                }
            >
                <p>Explore various <br/>Communities </p>
            </Typography>

            <Box>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={8}
                    sx={
                        {
                            display: "flex",
                            flexWrap: "wrap",
                        }
                    }
                >
                    <Grid
                        item
                        xs={3}
                    >
                        <PersonaCard />
                    </Grid>

                    <Grid
                        item
                        xs={3}
                    >
                        <PersonaCard />
                    </Grid>

                    <Grid
                        item
                        xs={3}
                    >
                        <PersonaCard />
                    </Grid>
                </Grid>
            </Box>

        </div>
    )
}

export default index
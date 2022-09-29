import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import PersonaCard from './PersonaCard'

const data = [
    {
        title: "Business",
        buttonLink: "https://www.hyperledger.org/",
        imgUrl: "/images/persona1.jpg",
    },
    {
        title: "Developer",
        buttonLink: "https://www.hyperledger.org/",
        imgUrl: "/images/persona2jpg",
    },
    {
        title: "Enterprises",
        buttonLink: "https://www.hyperledger.org/",
        imgUrl: "/images/persona3.jpg",
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
                Personas
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
                    {/* <Grid
                        item
                        xs={3}
                    >
                        {
                            data.map((info,id) => {
                                <PersonaCard title={info.title} buttonLink={info.buttonLink} imgUrl={info.imgUrl} />
                            })
                        }
                    </Grid> */}

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
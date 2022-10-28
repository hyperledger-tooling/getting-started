import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

function CTACard() {
    return (
        <div>
            <Card
                container
                // justifyContent="center"
                // alignItems="center"
                // direction="row"
                sx={
                    {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: '20px',
                        height: '100px',
                    }
                }
            >
                {/* <CardMedia
                    component="img"
                    height="50px"
                    width="50px"
                    image="/Icons/Account.png"
                    sx={
                        {
                            borderRadius: '50%',
                            objectFit: 'contain',
                        }
                    }
                /> */}
                <Box
                    backgroundColor="#73BA50"
                    sx={
                        {
                            padding: "2px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: '50%',
                            m:2
                        }
                    }
                >
                    <img src="/icons/account.png" />
                </Box>

                <CardContent
                >
                    <Typography
                        variant='h6'
                        gutterBottom
                    >
                        Account
                    </Typography>
                    <Typography
                        variant='subtitle'
                        gutterBottom
                    >
                        Sign up for a Linux Foundation account
                    </Typography>

                </CardContent>
            </Card>

        </div>
    )
}

export default CTACard
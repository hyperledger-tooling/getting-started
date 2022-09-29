import React from 'react'
import { Card, CardMedia, Box, CardContent } from '@mui/material'
import Button from '../Buttons/index'


function Events() {
    return (
            <Card
                variant="outline"
                sx={
                    {
                        cursor: 'pointer',
                        position: 'relative',
                        boxShadow: 4,
                        borderRadius: "20px",
                        backgroundColor:"green",
                        width: "100%",
                    }
                }
            // className={classes.personaCard}
            >
                <CardMedia
                    component="img"
                    height="380"
                    width="90"
                    image="/images/persona6.jpg"
                    sx={
                        {
                            borderRadius: '20px',
                            width: '100%',
                            objectFit: 'cover',

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
                            bottom: '0',
                            width: '100%',
                        }
                    }
                >
                    <Button type="secnondary" />
                </CardContent>
            </Card>
    )
}

export default Events
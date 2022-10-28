import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import PersonaCard from './PersonaCard'
import classes from './style.module.scss';

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
        <div className={classes.persona}>
            <h1 className={classes.heading}>
                Personas
            </h1>

            <div className={classes.cards}>
                <PersonaCard title={"Business"} imgUrl="/images/persona1.jpg" />
                <div className={classes.contentBox}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                </div>
            </div>
            <div className={[classes.inverseCard]}>
                <PersonaCard title={"Enterprise"} imgUrl="/images/persona2.jpg" />
                <div className={classes.contentBox}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                </div>
            </div>
            <div className={classes.cards}>
                <PersonaCard title={"Developer"} imgUrl="/images/persona3.jpg" />

                <div className={classes.contentBox}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                </div>
            </div>

        </div>
    )
}

export default index
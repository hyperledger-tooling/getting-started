import React from 'react'
import classes from '../style.module.scss'
import Image from 'next/image'

function bigCard({ img }) {
    return (
        <div className={classes.bigCard}>
            <Image
                src={img}
                height="360px"
                width="1230px"
                alt="roadmap image"
                className={classes.bigCardImage}
            />
        </div>
    )
}

export default bigCard
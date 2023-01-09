import React from 'react'
import classes from '../style.module.scss'
import Link from 'next/link'
import Image from 'next/image'

function caseStudyCard() {
    return (
        <div className={classes.caseStudyCard}>
            <div className={classes.caseStudyCard_logo}>
                <Link href="/">
                    <Image
                        src="https://challenge.hyperledger.org/css/2022_style/img/logos/hyperledgerfoundation.png"
                        height="35px"
                        width="200px"
                        alt="Hyperledger logo"
                    />
                </Link>
            </div>
            <div className={classes.caseStudyCard_content}>
                <p>Step-by-step process leads Bosch to Hyperledger Labs with Perun layer-2 protocol</p>
            </div>
            <div className={classes.caseStudyCard_link}>
                <Link href="/">Read more</Link>
            </div>
        </div>
    )
}

export default caseStudyCard
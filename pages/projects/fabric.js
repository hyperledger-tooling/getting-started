import React from 'react'
import classes from '../../styles/globalStyle.module.scss'
import BigCard from '../../components/cards/general/bigCard'
import VideoCard from '../../components/cards/general/videoCard'
import Card1 from '../../components/cards/projectCards/card1'
import Card2 from '../../components/cards/projectCards/card2'

function index() {
    return (
        <div className={classes.section}>
            <div className={classes.headingSection}>
                <h1 className={classes.heading}>
                    Hyperledger Fabric
                </h1>
            </div>

            <div className={classes.headingSection}>
                <BigCard />
                <div className={classes.title} >
                    Type: Distributed ledger software
                </div>
                <div className={classes.textBox}>
                    <p>
                        Hyperledger Fabric is intended as a foundation for developing applications or solutions with a modular architecture. Hyperledger Fabric allows components, such as consensus and membership services, to be plug-and-play. Its modular and versatile design satisfies a broad range of industry use cases. It offers a unique approach to consensus that enables performance at scale while preserving privacy.
                    </p>

                </div>
            </div>


            <div className={classes.headingSection}>
                <h1 className={classes.heading}>
                    Know about Hypedger Projects
                </h1>
            </div>

            <div className={classes.headingSection}>
                <VideoCard />
            </div>

            {/* Project section and dropdown */}
            <div className={classes.project}>
                <div className={classes.projectSection}>
                    <div>
                        <div className={classes.title} >
                            Hyperledger
                            <div className={classes.cardSection}>
                                <Card1 />
                                <Card1 />
                                <Card1 />
                                <Card1 />
                                <Card1 />
                                <Card1 />
                                <Card1 />
                                <Card1 />
                            </div>
                        </div>
                        <div className={classes.title} >
                            Hyperledger labs
                            <div className={classes.cardSection}>
                                <Card2 />
                                <Card2 />
                                <Card2 />
                                <Card2 />
                                <Card2 />
                                <Card2 />
                                <Card2 />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default index
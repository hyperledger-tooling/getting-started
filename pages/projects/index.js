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
                <h1 className={classes.heading} id="graduatedProjects">
                    Graduated Hyperledger Projects
                </h1>
            </div>


            {/* Project section and dropdown */}
            <div className={classes.project}>
                <div className={classes.projectSection}>
                    <div>
                        <div className={classes.title} >
                            <div className={classes.cardSection}>
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

            <div className={classes.headingSection} id="incubatedProjects">
                <h1 className={classes.heading}>
                    Incubating Hyperledger Projects
                </h1>
            </div>

            <div className={classes.project}>
                <div className={classes.projectSection}>
                    <div>
                        <div className={classes.title} >
                            <div className={classes.cardSection}>
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
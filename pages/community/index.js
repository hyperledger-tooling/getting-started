import React from 'react'
import classes from '../../styles/globalStyle.module.scss'
import BigCard from '../../components/cards/general/bigCard'
import VideoCard from '../../components/cards/general/videoCard'
import ProfileCard from '../../components/cards/projectCards/profileCard'

function index() {
    return (
        <div className={classes.section}>
            <div className={classes.headingSection}>
                <h1 className={classes.heading}>
                    Meet Hyperledger Members
                </h1>
            </div>


            {/* Project section and dropdown */}
            <div className={classes.project}>
                <div className={classes.projectSection}>
                    <div>
                        <div className={classes.title} >
                            <div className={classes.cardSection}>
                                <ProfileCard />
                                <ProfileCard />
                                <ProfileCard />
                                <ProfileCard />
                                <ProfileCard />
                                <ProfileCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default index
import React from 'react'
import classes from '../style.module.scss'

function blogCard() {
    return (
        <div className={classes.blogCard}>
            <div className={classes.blogCardHeading}>
                Hyperledger Foundation Welcomes Seven New Members,
                Including Avast, Infosys and the National FinTech
                Center at Morgan State University
            </div>
            <div className={classes.blogCardDescription}>
                Releases Details of New Hyperledger Besu Execution Client
                Incentive Program SAN FRANCISCO and AUSTIN (June 10, 2022) –
                Today, at Consensus 2022, Hyperledger Foundation, the open,
                global ecosystem for enterprise  blockchain technologies,
                announced seven new members, including Avast, Infosys, The
                Digital Dollar Project and the National FinTech Center at
                Morgan State University.
            </div>
            <div className={classes.blogCardLink}>
                Read More
            </div>
        </div>
    )
}

export default blogCard
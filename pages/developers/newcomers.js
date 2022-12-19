import React from 'react'
import classes from '../../styles/globalStyle.module.scss'
import IssueCard from '../../components/issue/issueCard'

function index() {
  return (
    <div className={classes.section}>
      <div className={classes.headingSection}>
        <h1 className={classes.heading}>
          Developers
        </h1>
      </div>

      <div className={classes.textBox}>
        <p>
          Hyperledger is an Open Source, Collaborative and Inclusive community, we welcome contributions from anyone and of anytype, weather your are a first time contributor or an open source veteran. you are welcome to contribute to and actively engage in the development.
        </p>
      </div>

      <h1 className={classes.subHeading}>
        Contribute
      </h1>
        <IssueCard />
    </div>

  )
}

export default index
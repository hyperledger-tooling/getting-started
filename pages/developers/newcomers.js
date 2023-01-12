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
          Newcommers Guide
        </h1>
      </div>

      <div className={classes.textBox}>
        <p>
          Hyperledger is an Open Source, Collaborative and Inclusive community, we welcome contributions from anyone and of anytype, weather your are a first time contributor or an open source veteran. you are welcome to contribute to and actively engage in the development.
        </p>
      </div>

      <div className={classes.headingSection}>
        <BigCard img='/images/road.png' />
        <div className={classes.textBox}>
          <p>
            A global enterprise blockchain project that offers the necessary framework, standards, guidelines, and tools to build open-source blockchains and related applications for use across various industries.F
          </p>
          <p>
            A global enterprise blockchain project that offers the necessary framework, standards, guidelines, and tools to build open-source blockchains and related applications for use across various industries.F
          </p>
          <p>
            A global enterprise blockchain project that offers the necessary framework, standards, guidelines, and tools to build open-source blockchains and related applications for use across various industries.F
          </p>
          <p>
            A global enterprise blockchain project that offers the necessary framework, standards, guidelines, and tools to build open-source blockchains and related applications for use across various industries.F
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
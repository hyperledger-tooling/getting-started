import React from 'react'
import classes from '../styles/globalStyle.module.scss'
import CaseStudyCard from '../components/cards/general/caseStudyCard'
import BigCard from '../components/cards/general/bigCard'
import CountCard from '../components/cards/projectCards/countCard'
import BlogCard from '../components/cards/general/blogCard'

function business() {
  return (
    <div className={classes.section}>
      <div className={classes.headingSection}>
        <h1 className={classes.heading}>
          Business
        </h1>
      </div>

      <div className={classes.textBox}>
        <p>
          A global enterprise blockchain project that offers the necessary framework, standards, guidelines, and tools to build open-source blockchains and related applications for use across various industries.        </p>
      </div>

      <h1 className={classes.subHeading}>
        Case Studies
      </h1>

      <div className={classes.project}>
        <div className={classes.projectSection}>
          <div>
            <div className={classes.title} >
              <div className={classes.cardSection}>
                <CaseStudyCard />
                <CaseStudyCard />
                <CaseStudyCard />
                <CaseStudyCard />
                <CaseStudyCard />
                <CaseStudyCard />
              </div>
              <div className={classes.headingSection}>
                <button className={classes.primaryButton} >
                  View More
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className={classes.headingSection}>
        <h1 className={classes.heading}>
          Explore our landscape
        </h1>
      </div>

      <div className={classes.cardSection}>
        <CountCard />
        <CountCard />
      </div>



      <div className={classes.headingSection}>
        <BigCard />
      </div>

      <div>
        <div className={classes.buttonSection}>
          <div>
            <button className={classes.primaryButton} >
              View More
            </button>
          </div>
          <div>
            <button className={classes.primaryButton} >
              View More
            </button>
          </div>
        </div>
      </div>

      <div className={classes.headingSection}>
        <h1 className={classes.heading}>
          News and Blogs
        </h1>
      </div>

      <div className={classes.headingSection}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>

      <div className={classes.headingSection}>
        <button className={classes.primaryButton} >
          View More
        </button>
      </div>

    </div>
  )
}

export default business
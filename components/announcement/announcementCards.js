import React from 'react'
import Announcement from './index'
import classes from './style.module.scss';
import styles from '../../styles/globalStyle.module.scss'

export default function announcementCards () {
  return (
    <div>
      <h1 className={styles.heading}>
        Latest from Hyperledger      
        </h1>
      <Announcement />
      <div className={classes.newsletterBox}>
        <h1 className={styles.title}>
          Keep Up to Date with News,
          Resources and Events
        </h1>
        <div>
          <button className={styles.primaryButton} >
            Subscribe to Newsletter
          </button>
        </div>
      </div>

    </div>
  )
}
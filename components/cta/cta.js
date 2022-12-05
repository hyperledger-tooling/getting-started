import Image from 'next/image'
import React from 'react'
import CTA from './index'
import classes from './style.module.scss'
import styles from '../../styles/globalStyle.module.scss'

const data = [
  {
    // "id": 1,
    "title": "Account",
    "desc": "Sign up for a Linux Foundation account",
    "icon": "/icons/account.svg",
    "link": ""
  },
  {
    // "id": 2,
    "title": "Chat",
    "desc": "Join the discussion on chat",
    "icon": "/icons/chat.svg",
    "link": ""
  },
  {
    // "id": 3,
    "title": "Mailing Lists",
    "desc": "Participate on the Hyperledger Mailing Lists",
    "icon": "/icons/mail.svg",
    "link": ""
  },
  {
    // "id": 4,
    "title": "Github",
    "desc": "Contribute to the codebase",
    "icon": "/icons/github.svg",
    "link": ""
  },
  {
    // "id": 5,
    "title": "Wiki",
    "desc": "Get the latest development updates from the wiki",
    "icon": "/icons/wiki.svg",
    "link": ""
  },
  {
    // "id": 6,
    "title": "Bug Reporting",
    "desc": "Search for open bugs, or report a new one, in our bug database",
    "icon": "/icons/bug.svg",
    "link": ""
  },
  {
    // "id": 7,
    "title": "Twitter",
    "desc": "Follow @Hyperledger",
    "icon": "/icons/twitter.svg",
    "link": ""
  },
  {
    // "id": 8,
    "title": "Discord",
    "desc": "Get the latest development updates from the wiki",
    "icon": "/icons/discord.svg",
    "link": ""
  },
  {
    // "id": 8,
    "title": "Docs",
    "desc": "Get the latest development updates from the wiki",
    "icon": "/icons/docs.svg",
    "link": ""
  },
  {
    // "id": 8,
    "title": "YouTube",
    "desc": "Get the latest development updates from the wiki",
    "icon": "/icons/youtube.svg",
    "link": ""
  },
  {
    // "id": 8,
    "title": "Linkedin",
    "desc": "Get the latest development updates from the wiki",
    "icon": "/icons/linkedin.svg",
    "link": ""
  },
]

function index() {
  return (
    <div className={classes.ctaBox}>
      <h1 className={styles.heading}>
        Join the Hyperledger Community
      </h1>
      <p>
        Hyperledger Foundation is a non profit organization that brings together all the necessary resources and infrastructure to ensure thriving and stable ecosystems around open source software blockchain projects.
      </p>
      <div className={classes.ctaCardContainer}>
        {
          data.map((data,id) => (
            <CTA title={data.title} desc={data.desc} icon={data.icon} />
          ))
        }
      </div>
    </div>
  )
}

export default index
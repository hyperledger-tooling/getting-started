
import Image from 'next/image'
import React from 'react'
import classes from './style.module.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ChatIcon from '@mui/icons-material/Chat';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

function Index() {
  return (
    <div className={classes.footerBox}>
      <div className={classes.footerHeader}>
        <div>
          <Image src="/icons/Hyperledger-white.png" height={60} width={300} alt="logo"/>
        </div>
        <div className={classes.footerIconBox}>
          <GitHubIcon className={classes.footerIcon} />
          <TwitterIcon className={classes.footerIcon} />
          <YouTubeIcon className={classes.footerIcon} />
          <ChatIcon className={classes.footerIcon} />
          <LinkedInIcon className={classes.footerIcon} />
          <MailIcon className={classes.footerIcon} />
        </div>
      </div>

      <hr />
      <div className={classes.footerContent}>
        <div className={classes.footerContentCards}>
          <h3>About Us</h3>
          <p>Who are we</p>
          <p>Members</p>
          <p>Code of Conduct</p>
        </div>

        <div className={classes.footerContentCards}>
          <h3>Projects</h3>
          <p>Incubated Projects</p>
          <p>Graduated Projects</p>
          <p>Propose a Projects</p>
          <p>Explore Landscape</p>
        </div>

        <div className={classes.footerContentCards}>
          <h3>Community</h3>
          <p>Members</p>
          <p>New Comers Rodemap</p>
          <p>Working Groups</p>
          <p>Sigs</p>
          <p>Regional Chapters</p>
        </div>

        <div className={classes.footerContentCards}>
          <h3>Events</h3>
          <p>Webinars</p>
          <p>Meetups</p>
          <p>Announcement</p>
          <p>Calenders</p>
        </div>

        <div className={classes.footerContentCards}>
          <h3>Learn</h3>
          <p>Resources</p>
          <p>Teaching and Certifications</p>
          <p>Internships</p>
        </div>
      </div>

      <div className={classes.footerCopyText}>
        Copyright © 2022 The Linux Foundation®. All rights reserved. Hyperledger Foundation, Hyperledger, and the other Hyperledger Foundation trademarks are trademarks of The Linux Foundation. For a list of Hyperledger Foundation trademarks, please see our Trademark Usage page. Linux is a registered trademark of Linus Torvalds. Privacy Policy and Terms of Use.
        <hr />
        <div>
          © 2022 Hyperledger Foundation
        </div>
      </div>
    </div>
  )
}

export default Index
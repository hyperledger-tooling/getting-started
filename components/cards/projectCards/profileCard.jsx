import React from 'react'
import classes from '../style.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';

function card1() {
  return (
    <div className={classes.profileCard}>
      <div className={classes.profilePic}>
        <Link href="/">
          <Image
            src="/images/persona2.jpg"
            height="160px"
            width="160px"
            alt="Hyperledger logo"
          />
        </Link>
      </div>

      <div className={classes.profilePicContent}>
        <p>Name</p>
        <p>Fabric Contributor</p>
        <div className={classes.profileSocial}>
          <p><GitHubIcon className={classes.card2Icons} /></p>
          <p><GitHubIcon className={classes.card2Icons} /></p>
          <p><GitHubIcon className={classes.card2Icons} /></p>
        </div>
      </div>



    </div>
  )
}

export default card1
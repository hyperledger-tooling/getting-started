import React from 'react'
import classes from '../style.module.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import MergeIcon from '@mui/icons-material/Merge';
import BookIcon from '@mui/icons-material/Book';
import Link from 'next/link';
import Image from 'next/image';

function card1() {
  return (
    <div className={classes.projectCard1}>
      <div className={classes.card1logo}>
      
            <Link href="/">
              <Image
                src="https://challenge.hyperledger.org/css/2022_style/img/logos/hyperledgerfoundation.png"
                height="50px"
                width="280px"
                alt="Hyperledger logo"
              />
            </Link>

      </div>
        <p>
          <GitHubIcon className={classes.card1Icons} />
          Good First Issues
        </p>
        <p>
          <MergeIcon  className={classes.card1Icons} />
          Pull request
        </p>
        <p>
          <BookIcon className={classes.card1Icons} />
          Contributing Guidelines
        </p>
    </div>
  )
}

export default card1
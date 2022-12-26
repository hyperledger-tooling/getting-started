import React from 'react'
import classes from '../style.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import BookIcon from '@mui/icons-material/Book';
import LanguageIcon from '@mui/icons-material/Language';

function card1() {
    return (
        <div className={classes.projectCard2}>
            <div className={classes.card2Logo}>
                <Link href="/">
                    <Image
                        src="/logos/fabric.svg"
                        height="200px"
                        width="280px"
                        alt="Hyperledger logo"
                    />
                </Link>
            </div>
            <div className={classes.card2Content}>
                <div className={classes.card2IconBox}>
                    <GitHubIcon className={classes.card2Icons} />
                    <p>Github</p>
                </div>
                <div>
                    <div className={classes.card2IconBox}>
                        <BookIcon className={classes.card2Icons} />
                        <p>Wiki</p>
                    </div>
                </div>
                <div>
                    <div className={classes.card2IconBox}>
                        <LanguageIcon className={classes.card2Icons} />
                        <p>Site</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default card1
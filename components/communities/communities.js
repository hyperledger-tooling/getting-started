
import React from 'react'
import Communities from './index';
import classes from './style.module.scss';
import styles from '../../styles/globalStyle.module.scss'

function Index() {
    return (
        <div>
            <h1 className={styles.heading}>
                Explore various Communities
            </h1>
            <div>
                <Communities />
            </div>

        </div>
    )
}

export default Index
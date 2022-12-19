import React from 'react'
import classes from './style.module.scss';
import styles from '../../styles/globalStyle.module.scss'
import Card from './index'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

function Index() {
    return (
        <div className={classes.mainSection}>
            <div className={classes.filterOption}>
                <h1 className={styles.subHeading}>
                    Filter
                </h1>

                <div className={classes.filterBox}>
                    <div>
                        <h3>Languages</h3>
                        <div className={classes.filterBoxCheckbox}>
                            <div>
                                <CheckBoxIcon className={classes.checkIcon} />
                                <div>Javascript</div>
                            </div>
                            <div>(100)</div>
                        </div>
                        <div className={classes.filterBoxCheckbox}>
                            <div>
                                <CheckBoxIcon className={classes.checkIcon} />
                                <div>Javascript</div>
                            </div>
                            <div>(100)</div>
                        </div>
                        <div className={classes.filterBoxCheckbox}>
                            <div>
                                <CheckBoxIcon className={classes.checkIcon} />
                                <div>Javascript</div>
                            </div>
                            <div>(100)</div>
                        </div>
                        <div className={classes.filterBoxCheckbox}>
                            <div>
                                <CheckBoxIcon className={classes.checkIcon} />
                                <div>Javascript</div>
                            </div>
                            <div>(100)</div>
                        </div>
                    </div>

                    <div>
                        <h3>Projects</h3>
                        <div className={classes.filterBoxCheckbox}>
                            <div>
                                <CheckBoxIcon className={classes.checkIcon} />
                                <div>Javascript</div>
                            </div>
                            <div>(100)</div>
                        </div>
                        <div className={classes.filterBoxCheckbox}>
                            <div>
                                <CheckBoxIcon className={classes.checkIcon} />
                                <div>Javascript</div>
                            </div>
                            <div>(100)</div>
                        </div>
                        <div className={classes.filterBoxCheckbox}>
                            <div>
                                <CheckBoxIcon className={classes.checkIcon} />
                                <div>Javascript</div>
                            </div>
                            <div>(100)</div>
                        </div>
                        <div className={classes.filterBoxCheckbox}>
                            <div>
                                <CheckBoxIcon className={classes.checkIcon} />
                                <div>Javascript</div>
                            </div>
                            <div>(100)</div>
                        </div>
                    </div>
                    <div>
                        <h3>Others</h3>
                        <div className={classes.filterBoxCheckbox}>
                            <div>
                                <CheckBoxIcon className={classes.checkIcon} />
                                <div>Javascript</div>
                            </div>
                            <div>(100)</div>
                        </div>
                        <div className={classes.filterBoxCheckbox}>
                            <div>
                                <CheckBoxIcon className={classes.checkIcon} />
                                <div>Javascript</div>
                            </div>
                            <div>(100)</div>
                        </div>
                        <div className={classes.filterBoxCheckbox}>
                            <div>
                                <CheckBoxIcon className={classes.checkIcon} />
                                <div>Javascript</div>
                            </div>
                            <div>(100)</div>
                        </div>
                        <div className={classes.filterBoxCheckbox}>
                            <div>
                                <CheckBoxIcon className={classes.checkIcon} />
                                <div>Javascript</div>
                            </div>
                            <div>(100)</div>
                        </div>
                    </div>


                </div>
            </div>
            <div className={classes.cardSection}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>

    )
}

export default Index
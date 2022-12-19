import React from 'react'
import classes from './style.module.scss'
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Index () {
  return (
    <div className={classes.cardBox}>
      <div className={classes.cardHeader}>
        <p>Fabric</p>
        <p>Good First Issue</p>
        <div>
          <p><GitHubIcon /></p>
          <p>Issue 3320</p>
        </div>
      </div>
      <div className={classes.cardDesc}>
        <h5>Improve error message when deliver service is asked for a block that doesn&apos;t yet exist on the node</h5>

        <p>Improve error message when deliver service is asked for a block that doesn&apos;t yet exist on the node. This is all we get for now: `[common.deliver] deliverBlocks -&gt; ERRO 18d59 [channel: channel1] Error reading from channel, cause was: NOT_FOUND` It is enough for Fabric developers to know what happened, but not for users or support personnel.</p>
      </div>
    </div>
  )
}

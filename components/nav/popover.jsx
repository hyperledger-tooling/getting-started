import React from 'react'
import Typography from '@mui/material/Typography'
import Popper from '@mui/material/Popper'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import {
  usePopupState,
  bindHover,
  bindPopper,
} from 'material-ui-popup-state/hooks'
import NavbarHover from './NavbarHover'

const HoverPopperPopupState = ({ classes }) => {
  const popupState = usePopupState({
    variant: 'popper',
    popupId: 'demoPopper',
  })
  return (
    <div>
      <Button variant="contained" {...bindHover(popupState)}>
        Hover to open Popper
      </Button>
      <Popper {...bindPopper(popupState)} placement="bottom">
        <Paper>
            <NavbarHover />
        </Paper>
      </Popper>
    </div>
  )
}

export default HoverPopperPopupState
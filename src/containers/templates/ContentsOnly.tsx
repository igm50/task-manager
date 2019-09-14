import React, { useState } from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/styles'

interface DialogProps {
  handleClose: () => void
  open: boolean
}

const DayDialog: React.FC<DialogProps> = props => {
  return (
    <Dialog onClose={props.handleClose} open={props.open}>
      <DialogTitle>DayDialog</DialogTitle>
      <DialogContent>sample</DialogContent>
    </Dialog>
  )
}

const TaskDialog: React.FC<DialogProps> = props => {
  return (
    <Dialog onClose={props.handleClose} open={props.open}>
      <DialogTitle>TaskDialog</DialogTitle>
      <DialogContent>sample</DialogContent>
    </Dialog>
  )
}

interface Props {
  MainContents: React.FC
}

const useStyles = makeStyles({
  root: {
    background: '#afc0d1'
  }
})

const ContentsOnly: React.FC<Props> = props => {
  const classes = useStyles()

  const [dayOpen, setDayOpen] = useState(false)
  const [taskOpen, setTaskOpen] = useState(false)

  return (
    <Container component="main" fixed className={classes.root}>
      <props.MainContents></props.MainContents>
      <DayDialog
        handleClose={() => setDayOpen(false)}
        open={dayOpen}
      ></DayDialog>
      <TaskDialog
        handleClose={() => {
          setTaskOpen(false)
          setDayOpen(false)
        }}
        open={taskOpen}
      ></TaskDialog>
    </Container>
  )
}

export default ContentsOnly

import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import dayjs from 'dayjs'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Container from '@material-ui/core/Container'

import Calendar from '../../containers/organisms/Calendar'

const useStyles = makeStyles({
  headerTile: {
    height: '60px'
  },
  headerCard: {
    background: '#EEEEEE',
    textAlign: 'center',
    height: '60px',
    margin: '5px'
  },
  bodyCard: {
    background: '#EEEEEE',
    height: '110px',
    margin: '5px'
  }
})

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
  now: dayjs.Dayjs
}

const Main: React.FC<Props> = props => {
  const classes = useStyles()
  const [dayOpen, setDayOpen] = useState(false)
  const [taskOpen, setTaskOpen] = useState(false)

  const handleDayClick = () => {
    setDayOpen(true)
  }
  const handleTaskClick = () => {
    setTaskOpen(true)
  }

  return (
    <Container component="main" fixed>
      <Calendar
        classes={classes}
        now={props.now}
        handleDayClick={handleDayClick}
        handleTaskClick={handleTaskClick}
      ></Calendar>
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

export default Main

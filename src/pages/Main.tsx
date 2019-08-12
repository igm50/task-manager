import React, { useState } from 'react'
import _ from 'lodash'
import dayjs from 'dayjs'
import { makeStyles } from '@material-ui/styles'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Container from '@material-ui/core/Container'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

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

interface Props {
  handleClose: () => void
  open: boolean
}

const DayDialog: React.FC<Props> = props => {
  return (
    <Dialog onClose={props.handleClose} open={props.open}>
      <DialogTitle>DayDialog</DialogTitle>
      <DialogContent>sample</DialogContent>
    </Dialog>
  )
}

const TaskDialog: React.FC<Props> = props => {
  return (
    <Dialog onClose={props.handleClose} open={props.open}>
      <DialogTitle>TaskDialog</DialogTitle>
      <DialogContent>sample</DialogContent>
    </Dialog>
  )
}

const dayOfTheWeeks = ['日', '月', '火', '水', '木', '金', '土']

const Main: React.FC = () => {
  const classes = useStyles()
  const [dayOpen, setDayOpen] = useState(false)
  const [taskOpen, setTaskOpen] = useState(false)

  const now = dayjs()

  return (
    <Container component="main" fixed>
      <GridList cellHeight="auto" cols={7}>
        {_.range(7).map(index => (
          <GridListTile
            className={classes.headerTile}
            id={'dayOfTheWeek' + index}
          >
            <Card className={classes.headerCard}>
              <CardHeader title={dayOfTheWeeks[index]}></CardHeader>
            </Card>
          </GridListTile>
        ))}
        {_.range(now.day()).map(index => (
          <GridListTile id={'headBlankTile-' + index}>
            <Card className={classes.bodyCard}>
              <CardContent></CardContent>
            </Card>
          </GridListTile>
        ))}
        {_.range(1, now.daysInMonth() + 1).map(index => (
          <GridListTile onClick={() => setDayOpen(true)} id={'dayTile' + index}>
            <Card className={classes.bodyCard}>
              <CardContent>
                <Typography>{now.month() + '月' + index + '日'}</Typography>
                <List disablePadding={true}>
                  <ListItem>
                    <ListItemText onClick={() => setTaskOpen(true)}>
                      sample
                    </ListItemText>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </GridListTile>
        ))}
        {_.range((now.day() + now.daysInMonth() - 1) % 7).map(index => (
          <GridListTile id={'headBlankTile-' + index}>
            <Card className={classes.bodyCard}>
              <CardContent></CardContent>
            </Card>
          </GridListTile>
        ))}
      </GridList>
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

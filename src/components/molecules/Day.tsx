import React from 'react'
import { Dayjs } from 'dayjs'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'

import Date from '../atoms/Date'
import TaskCount from '../atoms/TaskCount'
import { makeStyles } from '@material-ui/styles'

interface Props {
  type: 'Header' | 'Empty' | 'Filled'
  date?: Dayjs
  tasks?: Array<string>
  onClickHandler?: () => void
}

interface HeaderProps extends Props {
  type: 'Header'
}

interface EmptyProps extends Props {
  type: 'Empty'
}

interface FilledProps extends Props {
  type: 'Filled'
  date: Dayjs
  tasks?: Array<string>
  onClickHandler?: () => void
}

const useStyles = makeStyles({
  root: {
    background: '#EEEEEE',
    height: '80px',
    margin: '5px'
  },
  header: {
    textAlign: 'center'
  }
})

const Day: React.FC<HeaderProps | EmptyProps | FilledProps> = props => {
  const tasks = props.tasks || []
  const onClickHandler = props.onClickHandler || (() => {})
  const classes = useStyles()

  return (
    <Card onClick={onClickHandler} className={classes.root}>
      {props.type === 'Header' && (
        <CardHeader
          title={props.children}
          className={classes.header}
        ></CardHeader>
      )}
      <CardContent>
        {props.type === 'Filled' && <Date date={props.date}></Date>}
        {tasks.length !== 0 && (
          <TaskCount count={props.tasks!.length}></TaskCount>
        )}
      </CardContent>
    </Card>
  )
}

export default Day

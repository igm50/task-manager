import React, { useMemo } from 'react'
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
  header: {
    background: '#e8c2bf',
    margin: '5px',
    height: '60px',
    textAlign: 'center'
  },
  empty: {
    background: '#555555',
    margin: '5px',
    height: '80px'
  },
  filled: {
    background: '#d8ddad',
    margin: '5px',
    height: '80px'
  }
})

const Day: React.FC<HeaderProps | EmptyProps | FilledProps> = props => {
  const classes = useStyles()

  const tasks = useMemo(() => props.tasks || [], [props.tasks])
  const onClickHandler = useMemo(() => props.onClickHandler || (() => {}), [
    props.onClickHandler
  ])
  const className = useMemo(
    () =>
      props.type === 'Header'
        ? classes.header
        : props.type === 'Empty'
        ? classes.empty
        : classes.filled,
    [classes.empty, classes.filled, classes.header, props.type]
  )

  return (
    <Card onClick={onClickHandler} className={className}>
      {props.type === 'Header' && (
        <CardHeader title={props.children}></CardHeader>
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

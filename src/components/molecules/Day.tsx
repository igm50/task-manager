import React from 'react'
import { Dayjs } from 'dayjs'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import Date from '../atoms/Date'
import TaskList from '../atoms/TaskList'
import { makeStyles } from '@material-ui/styles'

type Type = 'Header' | 'Empty' | 'Filled'

interface Props {
  type: Type
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
    background: '#EEEEEE'
  }
})

const Day: React.FC<EmptyProps | FilledProps> = props => {
  const tasks = props.tasks || []
  const onClickHandler = props.onClickHandler || (() => {})

  const classes = useStyles()

  return (
    <Card onClick={onClickHandler} className={classes.root}>
      <CardContent>
        {props.type === 'Filled' && (
          <React.Fragment>
            <Date date={props.date}></Date>
            <TaskList tasks={tasks} short={true}></TaskList>
          </React.Fragment>
        )}
      </CardContent>
    </Card>
  )
}

export default Day

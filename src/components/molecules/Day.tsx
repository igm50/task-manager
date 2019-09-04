import React from 'react'
import { Dayjs } from 'dayjs'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import Date from '../atoms/Date'
import TaskList from '../atoms/TaskList'

interface Props {
  isEmpty: boolean
  date?: Dayjs
  tasks?: Array<string>
  onClickHandler?: () => void
}

interface EmptyProps extends Props {
  isEmpty: true
}

interface FilledProps extends Props {
  isEmpty: false
  date: Dayjs
  tasks: Array<string>
}

const Day: React.FC<EmptyProps | FilledProps> = props => {
  const onClickHandler = props.onClickHandler || (() => {})

  return (
    <Card onClick={onClickHandler}>
      <CardContent>
        {!props.isEmpty && (
          <React.Fragment>
            <Date date={props.date}></Date>
            <TaskList tasks={props.tasks} short={true}></TaskList>
          </React.Fragment>
        )}
      </CardContent>
    </Card>
  )
}

export default Day

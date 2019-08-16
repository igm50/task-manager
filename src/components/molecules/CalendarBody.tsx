import React from 'react'
import _ from 'lodash'
import dayjs from 'dayjs'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import BlankDay from '../atoms/BlankDay'
import Day from '../atoms/Day'

interface Props {
  classes: Record<'headerTile' | 'headerCard' | 'bodyCard', string>
  now: dayjs.Dayjs
  tasksList: Array<{
    day: number
    tasks: Array<{
      id: number
      title: string
    }>
  }>
  handleDayClick: (day: number) => void
  handleTaskClick: (day: number, taskId: number) => void
}

const CalendarBody: React.FC<Props> = props => {
  const topBlank = props.now.day()
  const daysInMonth = props.now.daysInMonth()
  const bottomBlank =
    dayjs().day() === 6 ? 0 : 7 - ((topBlank + daysInMonth) % 7) // 土曜日の場合は0

  const dayTasks = (day: number) => {
    const dayTasks = _.find(props.tasksList, { day: day })
    return dayTasks ? dayTasks.tasks : []
  }

  return (
    <GridList cellHeight="auto" cols={7}>
      {_.range(topBlank).map(index => (
        <GridListTile id={'topBlank' + index}>
          <BlankDay classes={props.classes}></BlankDay>
        </GridListTile>
      ))}
      {_.range(1, daysInMonth + 1).map(index => (
        <GridListTile
          onClick={() => props.handleDayClick(index)}
          id={'day' + index}
        >
          <Day
            classes={props.classes}
            month={props.now.month()}
            day={index}
            tasks={dayTasks(index)}
            handleTaskClick={(taskId: number) =>
              props.handleTaskClick(index, taskId)
            }
          ></Day>
        </GridListTile>
      ))}
      {_.range(bottomBlank).map(index => (
        <GridListTile id={'bottomBlank' + index}>
          <BlankDay classes={props.classes}></BlankDay>
        </GridListTile>
      ))}
    </GridList>
  )
}

export default CalendarBody

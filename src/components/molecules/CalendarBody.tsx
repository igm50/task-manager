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
  handleDayClick: () => void
  handleTaskClick: () => void
}

const CalendarBody: React.FC<Props> = props => {
  const topBlank = props.now.day()
  const daysInMonth = props.now.daysInMonth()
  const bottomBlank = 7 - ((topBlank + daysInMonth) % 7)

  return (
    <GridList cellHeight="auto" cols={7}>
      {_.range(topBlank).map(index => (
        <GridListTile id={'topBlank' + index}>
          <BlankDay classes={props.classes}></BlankDay>
        </GridListTile>
      ))}
      {_.range(1, daysInMonth + 1).map(index => (
        <GridListTile onClick={props.handleDayClick} id={'day' + index}>
          <Day
            classes={props.classes}
            month={props.now.month()}
            day={index}
            handleTaskClick={props.handleTaskClick}
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

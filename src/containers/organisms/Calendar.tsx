import React from 'react'
import _ from 'lodash'
import { Dayjs } from 'dayjs'

import Container from '@material-ui/core/Container'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import Day from '../../components/molecules/Day'

interface Props {
  date: Dayjs
}

const Calendar: React.FC<Props> = props => {
  const daysInMonth = props.date.daysInMonth()

  return (
    <Container component="div" fixed>
      <GridList cellHeight="auto" cols={7}>
        {_.range(1).map(index => (
          <GridListTile key="before">
            <Day type="Empty"></Day>
          </GridListTile>
        ))}
        {_.range(daysInMonth).map(index => (
          <GridListTile key="main">
            <Day
              type="Filled"
              date={props.date}
              tasks={[]}
              onClickHandler={() => {}}
            ></Day>
          </GridListTile>
        ))}
        {_.range(1).map(index => (
          <GridListTile key="main2">
            <Day
              type="Filled"
              date={props.date}
              tasks={['タスクタスクタスクタスク']}
              onClickHandler={() => {}}
            ></Day>
          </GridListTile>
        ))}
        {_.range(1).map(index => (
          <GridListTile key="after">
            <Day type="Empty"></Day>
          </GridListTile>
        ))}
      </GridList>
    </Container>
  )
}

export default Calendar

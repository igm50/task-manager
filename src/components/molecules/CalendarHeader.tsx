import React from 'react'
import _ from 'lodash'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import DayOfWeek from '../atoms/DayOfWeek'

interface Props {
  classes: Record<'headerTile' | 'headerCard', string>
}

const dayOfTheWeeks = ['日', '月', '火', '水', '木', '金', '土']

const CalendarHeader: React.FC<Props> = props => {
  return (
    <GridList cellHeight="auto" cols={7}>
      {_.range(7).map(index => (
        <GridListTile
          className={props.classes.headerTile}
          id={'dayOfTheWeek' + index}
        >
          <DayOfWeek
            classes={props.classes}
            title={dayOfTheWeeks[index]}
          ></DayOfWeek>
        </GridListTile>
      ))}
    </GridList>
  )
}

export default CalendarHeader

import React from 'react'
import dayjs from 'dayjs'
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs'

import Calendar, { CalendarContext } from './Calendar'

const division = 'containers/organisms/カレンダー'

const stories = storiesOf(division, module)

stories.addDecorator(withKnobs)
stories.add('サンプル', () => {
  const defaultDate = dayjs('2020-10-10')
  const dummyDayTaskList = [{ day: 5, tasks: ['タスクタスクタスクタスク'] }]

  return (
    <CalendarContext.Provider
      value={{
        date: object('日付', defaultDate),
        dayTaskList: object('日付タスクリスト', dummyDayTaskList)
      }}
    >
      <Calendar></Calendar>
    </CalendarContext.Provider>
  )
})

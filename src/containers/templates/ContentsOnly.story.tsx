import React from 'react'
import dayjs from 'dayjs'
import { storiesOf } from '@storybook/react'

import ContentsOnly from './ContentsOnly'
import Calendar, { CalendarContext } from '../organisms/Calendar'

const division = 'containers/template/コンテンツテンプレート'
const date = dayjs('2020-10-10')

storiesOf(division, module).add('空欄', () => {
  const Sample: React.FC = () => <div>サンプル</div>

  return <ContentsOnly MainContents={Sample}></ContentsOnly>
})

storiesOf(division, module).add('カレンダー', () => (
  <CalendarContext.Provider
    value={{
      date: date,
      dayTaskList: []
    }}
  >
    <ContentsOnly MainContents={Calendar}></ContentsOnly>
  </CalendarContext.Provider>
))

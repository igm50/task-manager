import React from 'react'
import dayjs from 'dayjs'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Calendar from './Calendar'

const division = 'containers/organisms/カレンダー'
const date = dayjs('2020-10-10')

storiesOf(division, module).add('サンプル', () => {
  return <Calendar date={date}></Calendar>
})

import React from 'react'
import dayjs from 'dayjs'
import { storiesOf } from '@storybook/react'

import Date from './Date'

const division = 'components/atoms/日付'

storiesOf(division, module).add('サンプル', () => {
  const date = dayjs('2020-10-10')
  return <Date date={date}></Date>
})

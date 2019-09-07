import React from 'react'
import dayjs from 'dayjs'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Day from './Day'

const division = 'components/molecules/日付カード'
const date = dayjs('2020-10-10')

storiesOf(division, module).add('空欄', () => <Day type="Empty"></Day>)

storiesOf(division, module).add('日付込み', () => (
  <Day
    type="Filled"
    date={date}
    tasks={[]}
    onClickHandler={action('clicked')}
  ></Day>
))

storiesOf(division, module).add('タスク込み', () => (
  <Day
    type="Filled"
    date={date}
    tasks={[
      '短縮タスク短縮タスク短縮タスク短縮タスク',
      '短縮タスク短縮タスク短縮タスク短縮タスク'
    ]}
    onClickHandler={action('clicked')}
  ></Day>
))

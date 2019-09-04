import React from 'react'
import dayjs from 'dayjs'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Day from './Day'

const division = 'components/molecules/日付カード'
const date = dayjs('2020-11-10')

storiesOf(division, module).add('空欄', () => <Day isEmpty={true}></Day>)

storiesOf(division, module).add('値込み', () => (
  <Day
    isEmpty={false}
    date={date}
    tasks={[
      '短縮タスク短縮タスク短縮タスク短縮タスク',
      '短縮タスク短縮タスク短縮タスク短縮タスク'
    ]}
    onClickHandler={action('clicked')}
  ></Day>
))

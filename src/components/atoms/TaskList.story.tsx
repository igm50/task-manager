import React from 'react'
import { storiesOf } from '@storybook/react'

import TaskList from './TaskList'

const division = 'components/atoms/タスク'

storiesOf(division, module).add('タスク無し', () => (
  <TaskList tasks={[]}></TaskList>
))

storiesOf(division, module).add('通常タスク', () => (
  <TaskList
    tasks={['タスクタスクタスクタスク', 'タスクタスクタスクタスク']}
  ></TaskList>
))

storiesOf(division, module).add('短縮タスク', () => (
  <TaskList
    tasks={['タスクタスクタスクタスク', 'タスクタスクタスクタスク']}
    short={true}
  ></TaskList>
))

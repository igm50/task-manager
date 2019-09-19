import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import TaskList from './TaskList'

const division = 'components/atoms/タスクリスト'
const deleteTask = (index: number) => action(index.toString())()

storiesOf(division, module).add('タスク無し', () => (
  <TaskList tasks={[]}></TaskList>
))

storiesOf(division, module).add('通常タスク', () => (
  <TaskList
    tasks={['タスクタスクタスクタスク', 'タスクタスクタスクタスク']}
    deleteTask={deleteTask}
  ></TaskList>
))

storiesOf(division, module).add('短縮タスク', () => (
  <TaskList
    tasks={[
      '短縮タスク短縮タスク短縮タスク短縮タスク',
      '短縮タスク短縮タスク短縮タスク短縮タスク'
    ]}
    deleteTask={deleteTask}
    short={true}
  ></TaskList>
))

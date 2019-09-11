import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, number } from '@storybook/addon-knobs'

import TaskCount from './TaskCount'

const division = 'components/atoms/タスク件数'

const stories = storiesOf(division, module)

stories
  .addDecorator(withKnobs)
  .add('サンプル', () => <TaskCount count={number('件数', 1)}></TaskCount>)

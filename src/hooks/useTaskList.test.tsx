import React, { useState } from 'react'
import _ from 'lodash'
import { render } from '@testing-library/react'

import useTasksList from './useTaskList'

let dummy: string[][]

beforeEach(() => {
  const dummyA = _.range(10).map(() => ['test'])
  const dummyB = _.range(10).map(() => ['array'])
  const dummyC = _.range(11).map(() => ['string'])
  dummy = dummyA.concat(dummyB).concat(dummyC)
})

const TestDom: React.FC = () => {
  const [findTasks] = useTasksList(dummy)
  const [count, setCount] = useState(0)

  return (
    <div>
      <p title="tasks">{findTasks(count)}</p>
      <button title="button" onClick={() => setCount(count + 1)}></button>
    </div>
  )
}

it('useTaskList test', () => {
  const { container, getByTitle } = render(<TestDom />)
  const tasks = getByTitle('tasks')
  const button = getByTitle('button')

  expect(tasks!.textContent).toContain('test')
})

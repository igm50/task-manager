import React, { useContext, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/ja'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import TaskList from '../../components/atoms/TaskList'

dayjs.locale('ja')

interface Props {
  date: Dayjs
  tasks: Array<string>
  handleClose: () => void
  registerTask: (value: string) => void
  deleteTask: (index: number) => void
  open: boolean
}

export const TaskDialogContext = React.createContext<Props>({
  date: dayjs(),
  tasks: [],
  handleClose: () => {},
  registerTask: (value: string) => {},
  deleteTask: (index: number) => {},
  open: false
})

const TaskDialog: React.FC = () => {
  const context = useContext(TaskDialogContext)

  const [value, setValue] = useState('')

  return (
    <Dialog onClose={context.handleClose} open={context.open}>
      <DialogTitle>{context.date.format('MMMMD')}日のタスク一覧</DialogTitle>
      <DialogContent>
        <TaskList
          tasks={context.tasks}
          deleteTask={context.deleteTask}
        ></TaskList>
        <TextField
          label="新規タスク"
          value={value}
          onChange={event => setValue(event.target.value)}
        ></TextField>
        <Button onClick={() => context.registerTask(value)}>登録</Button>
      </DialogContent>
    </Dialog>
  )
}

export default TaskDialog

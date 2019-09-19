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
  clickEventHandler: (value: string) => void
  open: boolean
}

export const TaskDialogContext = React.createContext<Props>({
  date: dayjs(),
  tasks: [],
  handleClose: () => {},
  clickEventHandler: (value: string) => {},
  open: false
})

const TaskDialog: React.FC = () => {
  const context = useContext(TaskDialogContext)

  const [value, setValue] = useState('')
  const onClickEvent = () => context.clickEventHandler(value)

  return (
    <Dialog onClose={context.handleClose} open={context.open}>
      <DialogTitle>{context.date.format('MMMMD')}日のタスク一覧</DialogTitle>
      <DialogContent>
        <TaskList tasks={context.tasks}></TaskList>
        <TextField
          label="新規タスク"
          value={value}
          onChange={event => setValue(event.target.value)}
        ></TextField>
        <Button onClick={onClickEvent}>実行</Button>
      </DialogContent>
    </Dialog>
  )
}

export default TaskDialog

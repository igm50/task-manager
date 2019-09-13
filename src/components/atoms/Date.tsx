import React from 'react'
import { Dayjs } from 'dayjs'

import Typography from '@material-ui/core/Typography'

interface Props {
  date: Dayjs
}

const Date: React.FC<Props> = props => {
  return <Typography variant="h5">{props.date.date()}</Typography>
}

export default Date

import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

interface Props {
  classes: Record<'bodyCard', string>
}

const BlankDay: React.FC<Props> = props => {
  return (
    <Card className={props.classes.bodyCard}>
      <CardContent></CardContent>
    </Card>
  )
}

export default BlankDay

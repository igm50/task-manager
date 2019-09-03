import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import Button from '@material-ui/core/Button'

import('../components/atoms/TaskList.story')

storiesOf('material-ui/sample/button', module).add('simple blue button', () => (
  <Button variant="contained" color="primary" onClick={action('clicked')}>
    サンプル
  </Button>
))

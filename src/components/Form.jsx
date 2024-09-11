import React from 'react'
import Panel from './Panel'
import Button from './Button'

function Form() {
  return (
    <Panel title="Welcome">
        <Button>Sign Up</Button>
        <Button>Log in</Button>
    </Panel>
  )
}

export default Form
import { AddOutlined, RemoveOutlined } from '@mui/icons-material'
import { IconButton, InputAdornment } from '@mui/material'
import * as React from 'react'

type EndAndorContext = 'add' | 'remove'

type EndAndorProps = {
  context: EndAndorContext
}

export const StartAndor = ({ context }: EndAndorProps) => {
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
  }

  return (
    <InputAdornment position='start'>
      <IconButton disabled onMouseDown={handleMouseDownPassword}>
        {context === "add" ? <AddOutlined /> : <RemoveOutlined />}
      </IconButton>
    </InputAdornment>
  )
}

import { AddOutlined, RemoveOutlined } from '@mui/icons-material'
import { IconButton, InputAdornment } from '@mui/material'

type EndAndorContext = 'add' | 'remove'

type EndAndorProps = {
  context: EndAndorContext
}

export const StartAndor = ({ context }: EndAndorProps) => {
  return (
    <InputAdornment position='start'>
      <IconButton disabled>{context === 'add' ? <AddOutlined /> : <RemoveOutlined />}</IconButton>
    </InputAdornment>
  )
}

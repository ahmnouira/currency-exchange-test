import { AddSharp, DeleteOutline } from '@mui/icons-material'
import { IconButton, InputAdornment } from '@mui/material'
import * as React from 'react'

type EndAndorContext = 'password' | 'repeat'

type EndAndorProps = {
    value: boolean
    onClick: () => void
    context: EndAndorContext
}

export const StartAndor = ({ value, onClick, context }: EndAndorProps) => {
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault()
    }

    return (
        <InputAdornment position='start'>
            <IconButton
                disabled
                onClick={onClick}
                onMouseDown={handleMouseDownPassword}
            >
                {value ? <AddSharp /> : <DeleteOutline />}
            </IconButton>
        </InputAdornment>
    )
}
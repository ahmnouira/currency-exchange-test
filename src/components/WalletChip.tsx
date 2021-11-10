import { Box, Chip } from '@mui/material';

type WalletChipProps = {
    position: 'top' | "bottom"

}

export const WalletChip = ({ position }: WalletChipProps) => {
    return (
        <Box style={{ position: "absolute", [position]: -16, right: "50%" }} mr={2} ml={2}>
            <Chip label="1= 15522" color="success" variant="outlined" style={{ backgroundColor: 'white', minWidth: 120 }} />
        </Box>
    )
}
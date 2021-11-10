import * as React from 'react';
import { Box, Card } from '@mui/material';

export const WalletCard = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <Card style={{ marginTop: 16, marginBottom: 16 }}>
            <Box
                component="form"
                noValidate
                autoComplete="off"
            >
                {children}
            </Box>
        </Card>
    )
}
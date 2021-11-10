import { Typography, Container, Button, Box } from '@mui/material';
import './App.css';
import { WalletCard } from './components/WalletCard';
import { WalletRow } from './components/WalletRow';
import { WalletChip } from './components/WalletChip';

function App() {

  const handleExchange = () => {

  }

  return (
    <div className="app">
      <Container>
        <Typography color="gray">Currency Exchange Proptype</Typography>
        <WalletCard>
          <WalletRow currencies={["EUR", "GBP"]} />
          <Box style={{ width: "100%", position: "relative", backgroundColor: "#dfe6e9" }}>
            <WalletChip position="top" />
            <WalletRow currencies={["GBP", "USD"]} />
            <WalletChip position="bottom" />
          </Box>
          <WalletRow currencies={["USD", "EUR"]} />
        </WalletCard>
        <Button color="secondary" variant="contained" onClick={handleExchange}>
          Exchange
        </Button>
      </Container>
    </div >
  );
}

export default App;

import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import Web3IntegrationApp from './components/ui.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <DynamicContextProvider 
        settings={{
          environmentId: "f268a013-0fa0-4d9d-9314-c6919e2dfde7",
          walletConnectors: [EthereumWalletConnectors]
        }}>
      <Web3IntegrationApp />
      </DynamicContextProvider>
    </div>
  );
}

export default App;

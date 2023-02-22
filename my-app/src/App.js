import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

import ConnectWallet from './components/ConnectWallet';
import WalletInfo from './components/WalletInfo';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main'; //Used in Sidebar
import Home from './components/Home' //Used in Main 




const getLibrary = (provider) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
};

function App() {
  return (
    
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <WalletInfo />
        <ConnectWallet />
        <Sidebar />
      </div>
    </Web3ReactProvider>

  
  );
}

export default App;
 
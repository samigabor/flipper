import './App.css';
import Header from './components/Header';
import LoadingArea from './components/LoadingArea';
import BettingArea from './components/BettingArea';
import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { getWeb3ProviderLibrary, Wallet } from './components/Wallet';

function App() {
  return (
    <Web3ReactProvider getLibrary={getWeb3ProviderLibrary}>
      <Header />
      <LoadingArea />
      <BettingArea />
      <Wallet />
    </Web3ReactProvider>
  )
}

export default App;

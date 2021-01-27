import './App.css';
import Header from './components/Header';
import LoadingArea from './components/LoadingArea';
import BettingArea from './components/BettingArea';
import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { Wallet } from './components/Wallet';
import { Web3Provider } from '@ethersproject/providers';

const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Header />
      <LoadingArea />
      <BettingArea />
      <Wallet />
    </Web3ReactProvider>
  )
}

export default App;

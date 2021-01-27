import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { formatEther } from '@ethersproject/units';
import { InjectedConnector } from '@web3-react/injected-connector';
import useSWR from 'swr';

export const getWeb3ProviderLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    1, // Mainet
    3, // Ropsten
    4, // Rinkeby
    5, // Goerli
    42, // Kovan
  ],
})

const fetcher = (library: any) => (...args: any[]) => {
  const [method, ...params] = args;
  console.log(method, params);
  return library[method](...params);
}


export const Balance = () => {
  const { account, library } = useWeb3React<Web3Provider>()
  const { data: balance } = useSWR(['getBalance', account, 'latest'], {
    fetcher: fetcher(library),
  })
  if(!balance) {
    return <div>NO balance found!</div>
  }
  return <div>Balance: {parseFloat(formatEther(balance)).toPrecision(6)}</div>;
}


export const Wallet = () => {
  const { chainId, account, activate, active } = useWeb3React<Web3Provider>();

  const onClick = () => {
    activate(injectedConnector);
  }

  return (
    <div>
      <div>ChainId: {chainId}</div>
      <div>Account: {account}</div>
      {active ? (
        <div>✅ </div>
      ) : (
        <button type="button" onClick={onClick}>
          Connect
        </button>
      )}
      {active && <Balance />}
    </div>
  )
}

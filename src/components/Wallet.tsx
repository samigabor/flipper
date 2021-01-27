import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { formatEther } from '@ethersproject/units';
import useSWR from 'swr';
import { injected } from '../connectors';


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
    return <span>0</span>
  }
  return <span>{ parseFloat(formatEther(balance)).toPrecision(6) }</span>;
}


export const Wallet = () => {
  const { chainId, account, activate, active } = useWeb3React<Web3Provider>();

  const onClick = () => {
    activate(injected);
  }

  return <>
    { active ? (
      <div className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#home"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span id="playerBalance"><Balance /></span> ETH (player)
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <div className="dropdown-item input-group">
          <span id="playerAddress">{ account }</span>
        </div>
  
        <div className="dropdown-item input-group">
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-danger"
              type="button"
              id="withdrawPlayerBalance"
            >
              Withdraw
            </button>
          </div>
          <input
            id="withdrawPlayerAmount"
            type="text"
            className="form-control"
            placeholder="ETH amount"
            aria-label="Withdraw player amount button"
            aria-describedby="withdraw player amount"
          />
        </div>
      </div>
    </div>
    ) : (
      <button className="nav-link btn btn-light btn-sm" type="button" onClick={onClick}>
        Connect to MetaMask
      </button>
    )}
  </>
}

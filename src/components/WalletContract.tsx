export const WalletContract = () => {  
  return <>
    <a
      className="nav-link dropdown-toggle"
      href="#home"
      id="navbarDropdown"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span id="contractBalance">0.00</span> ETH (contract)
    </a>
    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      <div className="dropdown-item input-group">
        <span id="contractAddress">xxxxxxxxx</span>
      </div>

      <div className="dropdown-item input-group">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-success"
            type="button"
            id="depositButton"
          >
            Deposit
          </button>
        </div>
        <input
          id="depositAmount"
          type="text"
          className="form-control"
          placeholder="ETH amount"
          aria-label="Example text with button addon"
          aria-describedby="depositButton"
        />
      </div>

      <div className="dropdown-item input-group">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-danger"
            type="button"
            id="withdrawContractBalance"
          >
            Withdraw
          </button>
        </div>
        <input
          id="withdrawContractAmount"
          type="text"
          className="form-control"
          placeholder="ETH amount"
          aria-label="Withdraw contract amount button"
          aria-describedby="withdraw contract amount"
        />
      </div>
    </div>
  </>
}

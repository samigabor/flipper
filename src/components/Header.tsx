const Header: React.FC = () => {
  return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#home">Flipper</a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#home"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span id="playerBalance">0 </span> ETH (player)
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <div className="dropdown-item input-group">
              <span id="playerAddress"></span>
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
        </li>

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#home"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span id="contractBalance">0 </span> ETH (contract)
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <div className="dropdown-item input-group">
              <span id="contractAddress"></span>
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
        </li>
      </ul>
      <span className="navbar-text" id="ifOwner"></span>
    </div>
  </nav>
}

export default Header;

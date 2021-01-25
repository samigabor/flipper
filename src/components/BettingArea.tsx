import ethLogoSmall from '../eth-logo-small.png';

const BettingArea = () => {
  return <div className="d-flex flex-column align-items-center">
    <div className="input-group mb-2 w-50">
      <input
        type="text"
        id="betAmountInput"
        className="form-control"
        placeholder="Enter bet amount"
        aria-label="contract-balance"
        aria-describedby="basic-addon1"
      />
      <div className="input-group-append">
        <p className="input-group-text">
          <img
            className="eth-logo-small"
            height="20px"
            src={ethLogoSmall}
            alt="eth logo"
          />
          <span className="ml-1">ETH</span>
        </p>
      </div>
    </div>

    <button id="makeBetButton" className="btn btn-success m-4 w-50">
      Make Bet
    </button>
  </div>
}

export default BettingArea;

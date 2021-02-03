import { WalletPlayer } from './WalletPlayer';
import { WalletContract } from './WalletContract';

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
      <div className="navbar-nav mr-auto">
        <WalletPlayer />
        <WalletContract />
      </div>
      <span className="navbar-text" id="ifOwner"></span>
    </div>
  </nav>
}

export default Header;

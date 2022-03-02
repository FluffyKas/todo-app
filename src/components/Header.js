import './Header.scss';
// import { ReactComponent as LightModeIcon } from '../images/icon-sun.svg';
import { ReactComponent as DarkModeIcon } from '../images/icon-moon.svg';

const Header = () => {
  return (
    <header>
      <h1>TODO</h1>
      <button className="theme-toggle">
        <DarkModeIcon />
      </button>
    </header>
  );
}

export default Header;
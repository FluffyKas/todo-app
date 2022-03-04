import './Header.scss';
import { ReactComponent as LightModeIcon } from '../images/icon-sun.svg';
import { ReactComponent as DarkModeIcon } from '../images/icon-moon.svg';

function Header ({ switchTheme, theme }) {

  return (
    <header>
      <h1>TODO</h1>
      <button onClick={switchTheme} className="theme-toggle">
        {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
    </header>
  );
}

export default Header;
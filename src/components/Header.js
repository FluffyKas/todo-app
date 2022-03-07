import './Header.scss';
import sunIcon  from '../images/icon-sun.svg';
import moonIcon  from '../images/icon-moon.svg';

function Header ({ switchTheme, theme }) {

  return (
    <header>
      <h1>TODO</h1>
      <button onClick={switchTheme} title={`Switch to ${theme} theme`} aria-label={`Switch to ${theme} theme`} className="theme-toggle">
        {
        theme === 'dark' ? 
        // SUN ICON
        <img src={sunIcon} alt="" /> : 
        // MOON ICON
        <img src={moonIcon} alt="" />
        }
      </button>
    </header>
  );
}

export default Header;
import Header from './components/Header';
import TodoController from './components/TodoController';
import useLocalStorage from 'use-local-storage';

function App() {
  const defaultDark = window.matchMedia('(perfers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  function switchTheme () {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="app" data-theme={theme}>
      <Header switchTheme={switchTheme} theme={theme}/>
      <TodoController />
    </div>
  );
}

export default App;

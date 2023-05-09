import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
function App() {
  let year = getFullYear();
  let footercopy = getFooterCopy(false);
  return (
    <>
      <header className='App-header'>
        <img src={logo} alt='logo' />
        <h1>School dashboard</h1>
      </header>
      <main role='main' className='App-body'>
        <p>Login to access the full dashboard</p>
      </main>
      <footer className='App-footer'>
        <p>Copyright {year} - {footercopy}</p>
      </footer>
    </>
  );
}

export default App;

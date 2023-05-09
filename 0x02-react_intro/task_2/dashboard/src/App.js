import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
function App() {
  return (
    <>
      <header className='App-header'>
        <img src={logo} alt='logo' />
        <h1>School dashboard</h1>
      </header>
      <main role='main' className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email' class="spaced-label">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          class="spaced-input"
        />
        <label htmlFor='password' class="spaced-label">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          class="spaced-input"
        />
        <button class="spaced-button">OK</button>
      </main>
      <footer className='App-footer'>
      Copyright {getFullYear()} - {getFooterCopy(false)}
      </footer>
    </>
  );
}

export default App;

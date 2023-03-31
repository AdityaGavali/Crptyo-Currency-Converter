import logo from './logo.svg';
import './App.css';
import Converting from './components/Converting';
import {SiConvertio } from 'react-icons/si';

function App() {
  return (
    <div>
    <h1 className='label'>Crypto Converter & Calculator</h1>
      <Converting/>
      <h1 style={{textAlign:'center'}} className='label'>Thanks for visiting !</h1>
    </div>
  );
}

export default App;

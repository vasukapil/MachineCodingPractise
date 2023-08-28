import logo from './logo.svg';
import './App.css';
import { useCopy } from './useCopy';
import { useState } from 'react';

function App() {
  const copy = useCopy();
  const [value,setValue] = useState('')
  return (
    <div className="App">
      <div className='copy-container'>
        <input style={{marginTop : "32px"}} name='copy-input' onChange={(e)=>{setValue(e.target.value)}} value={value} />
        <img onClick={()=>copy(value)} src="https://www.svgrepo.com/show/309480/copy.svg" className="copy-icon" alt="" />
      </div>
    </div>
  );
}

export default App;

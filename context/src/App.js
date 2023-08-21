import logo from './logo.svg';
import './App.css';
import { ToggleContext } from './context/toggle';
import { useState } from 'react';
import Button from './components/Button';

function App() {
  const [theme,setTheme] = useState('light');
  const handleToggle = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }
  return (
    <ToggleContext.Provider value={{theme,handleToggle}} >
    <Button/>
    </ToggleContext.Provider>
  );
}

export default App;

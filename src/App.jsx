import logo from './click.svg';
import './App.css';
import ThemeChanger from './components/ChangeTheme';
import Counter from './components/Counter';
import Button from './components/Button';
import { useState } from 'react';

const App = () => {

  const [numOfClicks, setNumOfClicks] = useState(0);
  const [numOfTaps, setNumOfTaps] = useState(0);

  const handleClick = () => {
    setNumOfClicks(numOfClicks + 1);
  }

  const handleTap = () => {
    setNumOfTaps(numOfTaps + 1)
  }

  const counterReset = () => {
    setNumOfClicks(0);
  }

  return (
    <>
    <ThemeChanger />
    <div className='App'>
        <img 
        src={logo} 
        className='App-logo' 
        alt='logo' />
      
        <div className='main-container'>
        <h1>Click Counter</h1>
        <Counter
        numClicks={numOfClicks}
        />
        <Button
        text='Click'
        isClick={true}
        handleClick={handleClick} 
        handleTap={handleTap}
        />
        <Button
        text='Reset'
        isClick={false}
        handleClick={counterReset} 
        handleTap={handleTap}
        />
        </div>
    </div>
    </>
  );
}

export default App;

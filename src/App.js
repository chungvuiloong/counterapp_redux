import './App.css';
import Button from './Components/Button';
import Circle from './Components/Circle';
import { useSelector } from 'react-redux';

const App = () => {

  const count = useSelector((state) => state.counter.value);



  return (
    <div className="App">
      <h1>Counter Redux</h1>
      <Circle value={count} />
      <div className="button-container">
        <Button text="Increase 5"/>
        <Button text="Increase 1"/>
        <Button text="Reset"/>
        <Button text="Decrease 1"/>
        <Button text="Decrease 5"/>
      </div>

    </div>
  );
}

export default App;

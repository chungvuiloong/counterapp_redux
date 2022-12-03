import './App.css';
import Button from './Components/Button';
import Circle from './Components/Circle';
import { selectCount as pikachu, reset, incrementByAmount, decrementByAmount } from './features/counter/CounterSlice';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const count = useSelector(pikachu);

  let dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter Redux</h1>
      <div>Testing CI/ CD</div>
      <Circle value={count} />
      <div className="button-container">
        <Button text="Increase 10"  onClick={() => dispatch(incrementByAmount(10))} />
        <Button text="Increase 5"   onClick={() => dispatch(incrementByAmount(5))} />
        <Button text="Increase 1"   onClick={() => dispatch(incrementByAmount(1))} />
        <Button text="Reset" onClick={() => dispatch(reset())}/>
        <Button text="Decrease 1"   onClick={() => dispatch(decrementByAmount(1))}/>
        <Button text="Decrease 5"   onClick={() => dispatch(decrementByAmount(5))}/>
        <Button text="Decrease 10"   onClick={() => dispatch(decrementByAmount(10))}/>
      </div>
    </div>
  );
}

export default App;

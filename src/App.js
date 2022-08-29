import './App.css';
import Button from './Components/Button';
import Circle from './Components/Circle';
import { selectCount as pikachu, reset, increment, decrement, incrementByAmount, decrementByAmount } from './features/counter/CounterSlice';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {

  // const count = useSelector((state) => state.counter.value);
  const count = useSelector(pikachu);

  let dispatch = useDispatch();



  return (
    <div className="App">
      <h1>Counter Redux</h1>
      <Circle value={count} />
      <div className="button-container">
        <Button text="Increase 5" onClick={() => dispatch(incrementByAmount(5))} />
        <Button text="Increase 1" onClick={() => dispatch(incrementByAmount(1))} />
        {/* <Button text="Increase 1" onClick={() => dispatch(increment())} /> */}

        <Button text="Reset" onClick={() => dispatch(reset())}/>

        {/* <Button text="Decrease 1" onClick={() => dispatch(decrement())}/>  */}
        <Button text="Decrease 1" onClick={() => dispatch(decrementByAmount(1))}/>
        <Button text="Decrease 5" onClick={() => dispatch(decrementByAmount(5))}/>
      </div>

    </div>
  );
}

export default App;

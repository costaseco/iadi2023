import React from 'react';
import logo from './logo.svg';
import './App.css';

function Hello(props: { name: string }) {
  return <div>Hello {props.name}</div>;
}

function Timer() {
  const [seconds, setSeconds] = React.useState(0);

  let interval: NodeJS.Timeout;

  let tick = () => { setSeconds(seconds => seconds + 1); }

  let clear = () => { clearInterval(interval); }

  React.useEffect(() => {
    interval = setInterval(tick, 1000);
    return clear;
  }, []);
  return <div>Seconds: {seconds}</div>;
}

function Clock() {
  const [date, setDate] = React.useState(new Date());

  let tick = () => { setDate(new Date()); }

  React.useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);
  return (
    <div>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Hello name="João"/>
      <Timer/>
      <Clock/>
    </div>
  );
}

export default App;

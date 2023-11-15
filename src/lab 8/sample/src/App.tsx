import React, { useState, useEffect } from 'react';
import './App.css';

function Hello(props: { name: string }) {
  return <div>Hello {props.name}</div>;
}

function Timer() {
  const [seconds, setSeconds] = useState(0);

  let interval: NodeJS.Timeout;

  let tick = () => { setSeconds(seconds => seconds + 1); }

  let clear = () => { clearInterval(interval); }

  useEffect(() => {
    interval = setInterval(tick, 1000);
    return clear;
  }, []);
  return <div>Seconds: {seconds}</div>;
}

function Clock() {
  const [date, setDate] = useState(new Date());

  let tick = () => { setDate(new Date()); }

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);
  return (
    <div>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}

interface SetLocationInterface{
  setLocation: (place:string, latitude: number, longitude: number) => void
}
function SearchWidget(props:SetLocationInterface) {

  const [text, setText] = useState("Caparica")

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    loadLocation()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const loadLocation = () => {
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${text}`)
    .then(res => res.json())
    .then(
      (result) => {
        if(result.hasOwnProperty('results')){
          const latitude = result.results[0].latitude
          const longitude = result.results[0].longitude
          console.log(text, latitude, longitude)
          props.setLocation(text, latitude, longitude)
        }
      },
      (error) => {
        console.log(error)
      }
    )
  }

  return <div>
    <form onSubmit={submit}>
    Search:
    <input type="text" placeholder="Location" value={text} onChange={handleChange}/>
    <button>Search</button>
    </form>
  </div>
}

function WeatherWidget({latitude, longitude}:any) {
  const [ temp, setTemp ] = useState(0)

  console.log(latitude, longitude)

  let loadWeather = () => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
    .then(res => res.json())
    .then(
      (result) => {
        const hour = new Date().getHours()
        const temp = result.hourly.temperature_2m[hour]
        setTemp(temp)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  useEffect(loadWeather, [latitude, longitude])

  return <div>Temp: {temp}ºC</div>
}

function CompleteWeatherWidget() {

    const [ place, setPlace ] = useState("")
    const [ latitude, setLatitude ] = useState(52.52)
    const [ longitude, setLongitude ] = useState(13.41)

    const setLocation = (newplace:string, latitude: number, longitude: number) => {
      setPlace(newplace)
      setLatitude(latitude)
      setLongitude(longitude)
      console.log(newplace, latitude, longitude)
    }

    return <>
      <SearchWidget setLocation={setLocation}/>
      <p>{place}</p>
      <WeatherWidget latitude={latitude} longitude={longitude}/>
    </>
}

function App() {
  return (
    <div className="App">
      <Hello name="João"/>
      <Timer/>
      <Clock/>
      <CompleteWeatherWidget/>
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPerson();
  }, [])

  const getPerson = async () => {
    const response = await fetch("https://api.randomuser.me/");
    const data = await response.json();
    const item = data.results[0].name.first;
    setPerson(item);
    setLoading(false);
  }

  return (
    <div className="App">
      <p>You clicked the counter {counter} times</p>
      <button onClick={() => (setCounter(counter +1))}>Click!!</button>
      <h1>My Person</h1>
      {loading ? "Loading..." : <p><strong>Name: </strong>{person}</p>}
    </div>
  );
}

export default App;

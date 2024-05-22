import "./App.css";
import { useEffect, useState } from 'react';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch('/api/jokes')
      .then((res) => res.json())
      .then((data) => setJokes(data))
      .catch((err) => {
        console.log("ERROR =>", err.message);
      });
  });

  return (
    <div className="app">
      <div className="jokes-container">
        {jokes.length > 0 ? (
          jokes.map((joke) => (
            <div key={joke.id} className="joke-card">
              <h3 className="joke-title">{joke.title}</h3>
              <p className="joke-content">{joke.content}</p>
            </div>
          ))
        ) : (
          <p><b>Loading jokes...</b></p>
        )}
      </div>
    </div>
  );
}

export default App;

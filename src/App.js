import React from 'react';
const api = {
  key: "15af4f99ae2fc57c12d99ef87b6ecc1d",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" 
          className="search-bar"
          placeholder="Search..." 
          />
        </div>
        <div className="location-box">
          <div className="location">New York City, US</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>

  );
}

export default App;

import React from 'react';
// import fetchApi from './util/fetchApi';
import Home from "./Home";
import { FetchData }from './Home';


const request = {
  "start": 50,
  "count":15
}

function App() {
  return (
    <div>
      <Home />
      {
        FetchData(request, (data) => console.log(data))
      }
    </div>
  );
}

export default App;

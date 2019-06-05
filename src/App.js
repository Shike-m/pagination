import React from 'react';
import fetchApi from './util/fetchApi';
import Home from "./Home";


const request = {
  "start": 50,
  "count":15
}

function App() {
  return (
    <div>
      <Home />
      {
        fetchApi.RestApi("/v2/movie/top250", "GET",request)
      }
    </div>
  );
}

export default App;

import React from 'react';
import fetchApi from './util/fetchApi';




function App() {
  return (
    <div>
      Hello, Pagination!
      {
        fetchApi.RestApi("/v2/movie/top250", "GET")
      }
    </div>
  );
}

export default App;

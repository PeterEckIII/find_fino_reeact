import React from 'react';
import Vendors from "./components/Vendors";
import { vendorList } from "./data/vendors";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Vendors vendorList={vendorList} />
    </div>
  );
}

export default App;

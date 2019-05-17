import React from "react";
import Vendors from "./components/Vendors";
import { illinoisVendorList, marylandVendorList } from "./data/vendors";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header title="Illinois-Based Vendors" />
      <Vendors vendorList={illinoisVendorList} />
      <Header title="Maryland & DC-Based Vendors" />
      <Vendors vendorList={marylandVendorList} />
    </div>
  );
};

export default App;

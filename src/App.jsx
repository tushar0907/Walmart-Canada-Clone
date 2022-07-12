import React from "react";
import {BrowserRouter} from "react-router-dom";
import Router from "./routes";
import {useDispatch} from "react-redux";
import Navigation from "./components/header";
import Local from "./components/local";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Local />
    </div>
  );
}

export default App;

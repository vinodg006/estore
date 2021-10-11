import React from 'react';
import logo from './logo.svg';
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import './App.css';

function App() {
  console.log("App")
  return (
    <>
      <Header />
      <MainContainer />
    </>
  );
}

export default App;

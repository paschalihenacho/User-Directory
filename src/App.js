import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {

  //document.body.style = 'background: red;';
  return (
  <div className="App">
    <Wrapper>
      <Header/>
      <Main/>
    </Wrapper>
  </div>);
}

export default App;

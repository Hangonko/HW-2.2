import "./App.css";
import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Children from "./Children";

function App() {
  return (
    <>
      <Wrapper>
        <Children />
        <Children />
      </Wrapper>
    </>
  );
}

export default App;

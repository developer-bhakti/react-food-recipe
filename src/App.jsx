import React from "react";
import Mainpage from "./Components/Mainpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mealinfo from "./Components/Mealinfo";

function App() {
  return (
    <BrowserRouter>
      {/* <Mainpage /> */}
      <Routes>
        <Route path="/" element= {<Mainpage/>}/>
        <Route path="/:mealid" element={<Mealinfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

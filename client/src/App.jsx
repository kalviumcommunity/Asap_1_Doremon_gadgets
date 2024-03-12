import "./App.css";
import Update from "./Components/Update";
import Body from "./Components/Body";
import Add from "./Components/Form";
import Explore from "./Components/Explore";
import Login from "./Components/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Body/>}></Route>
          <Route path="/form" element={<Add />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

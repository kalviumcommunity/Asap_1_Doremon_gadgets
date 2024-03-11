import "./App.css";
import Update from "./Components/Update";
import Body from "./Components/Body";
import Add from "./Components/Form";
import Explore from "./Components/Explore";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/form" element={<Add />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

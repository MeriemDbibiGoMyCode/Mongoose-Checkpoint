import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavContact from "./component/NavContact";
import Home from "./component/Home";
import ListContact from "./component/ListContact";
import Add from "./component/Add";
import Update from "./component/Update";
function App() {
  return (
    <div className="App">
      <NavContact />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<ListContact />} />
        <Route path="/addContact" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;

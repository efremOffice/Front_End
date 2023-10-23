import { Router } from "@mui/icons-material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./AllPages/Home";
import Login from "./AllPages/Login";
import Registration from "./AllPages/Registration";
import SearchHouse from "./AllPages/SearchHouse";
import AddHouse from "./AllPages/AddHouse";
import AboutUs from "./AllPages/AboutUs";
import ContactUs from "./AllPages/ContactUs";
function App() {
  return (
    <div className="App">
     
      <Home/>
    </div>
  );
}

export default App;

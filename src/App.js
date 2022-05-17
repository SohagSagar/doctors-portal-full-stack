import { Route, Routes } from "react-router-dom";
import Appionment from "./Components/pages/appoinment/Appionment";
import Home from "./Components/pages/Home/Home";
import NavBar from "./Components/shared_pages/NavBar";
import 'react-day-picker/dist/style.css';

function App() {
  return (
    <div>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/apointment" element={<Appionment/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;

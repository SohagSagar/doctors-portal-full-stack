import { Route, Routes } from "react-router-dom";
import Appionment from "./Components/pages/appoinment/Appionment";
import Home from "./Components/pages/Home/Home";
import NavBar from "./Components/shared_pages/NavBar";
import 'react-day-picker/dist/style.css';
import Login from "./Components/pages/Login/Login";
import Signup from "./Components/pages/Login/Signup";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/apointment" element={<Appionment/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./Components/pages/Home/Home";
import NavBar from "./Components/shared_pages/NavBar";

function App() {
  return (
    <div>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;

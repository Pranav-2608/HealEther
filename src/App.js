import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Features from "./pages/Features";
import Health from "./pages/Health";
import Abha from "./pages/Abha";
import Locker from "./pages/Locker";
import About from "./pages/About";

import { Route,Routes } from "react-router-dom";


function App() {

  
  return (
    <div className="">
      <div className={``}>
         <Navbar/>
      </div>
      
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/features" element={<Features/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/features/smarthealth" element={<Health/>}/>
         <Route path="features/abha" element={<Abha/>}/>
         <Route path="features/locker" element={<Locker/>}/>
       </Routes>
    </div>
  );
}

export default App;

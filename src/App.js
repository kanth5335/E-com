import Home from "./components/Home";
import {BrowserRouter as Router,Routes,Route} from  'react-router-dom'
import './style/All.css'
import ProdDescrip from "./components/ProdDescrip";
import Checkout  from "./components/Checkout";
import Address from "./components/Address";
import Thankyou from "./components/Thankyou";
import Error from "./components/Error";
import Login from "./components/Login";
import Fot from './components/Fot'
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/Description/:id' element={<ProdDescrip/>} />
      <Route path="/Checkout/:id" element={<Checkout/>}/>
      <Route path='/Address' element={<Address/>}/>
      <Route path="/Thankyou" element={<Thankyou/>} />
      <Route path="/Login" element={<Login/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    <Fot/>
    </Router>
  );
}

export default App;

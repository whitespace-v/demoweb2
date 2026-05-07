import CreateOrder from "./pages/CreateOrder";
import FillOrder from "./pages/FillOrder";
import Signup from "./pages/Signup";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
         {/* <Route path='/signin' element={<Signin/>}/> */}
        {/* <Route path='/admin' element={<Admin/>}/> */}
        <Route path='/create-order' element={<CreateOrder/>}/>
        <Route path='/fill-order' element={<FillOrder/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;

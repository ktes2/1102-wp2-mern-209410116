import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { Dashboard_16, Landing_16,Register_16,Error_16} from "./pages";
import styled from "styled-components";




function App_16() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard_16/>} />
        <Route path='/landing' element={<Landing_16/>} />
        <Route path='/register' element={<Register_16/>} />
        <Route path='*' element={<Error_16/>} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App_16;

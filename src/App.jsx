
import './App.css'
import Hello from './Hello';
import Counter from './counter';
import Count from './Counter+useState';
import Samp from './Sample';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Product from './Product';
import LoginControl from './LoginControl';
import LoginUncontrol from './LoginUncontrol';
import Effect from './effect';
function App() {

  return (
    <>
    <h1>hello world</h1>
    <h2>welcome to my world</h2>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginControl />} ></Route>
      <Route path='/nav' element={<Navbar></Navbar>}>
      <Route path='home' element={<Hello></Hello>}></Route>
      <Route path="defeat" element={<Counter></Counter>}></Route>
      <Route path='counter' element={<Count></Count>}></Route>
      <Route path='view' element={<Product></Product>}></Route>
      <Route path='uncontrol' element={<LoginUncontrol></LoginUncontrol>}></Route>
      <Route path='effect' element={<Effect></Effect>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

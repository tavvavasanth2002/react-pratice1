
import './App.css'
import Hello from './Hello';
import Counter from './counter';
import Count from './Counter+useState';
import Samp from './Sample';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
function App() {

  return (
    <>
    <h1>hello world</h1>
    <h2>welcome to my world</h2>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Hello />}></Route>
      <Route path='/count' element={<Counter />} />
      <Route path='/realcounter' element={<Count></Count>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

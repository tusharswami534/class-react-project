import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import Second from './views/Second';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='second' element={<Second />} />
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;

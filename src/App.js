import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GamePage from './Pages/GamePage/GamePage';
import Main from './Pages/Main/Main';
import AddPage from './Pages/AddPage/AddPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/game" element={<GamePage/>}/>
          <Route path='/Add' element={<AddPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

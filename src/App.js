import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GamePage from './Pages/GamePage/GamePage';
import Main from './Pages/Main/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/game" element={<GamePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

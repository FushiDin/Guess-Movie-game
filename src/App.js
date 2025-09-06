import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GamePage from './Pages/GamePage/GamePage';
import Main from './Pages/Main/Main';
import AddPage from './Pages/AddPage/AddPage';
import { Provider } from 'react-redux';
import store from './store/redux-store';
import FilmListPage from './Pages/FilmListPage/FilmListPage';
import FilmListPageDesc from './Pages/FilmListPage/FilmListPageDesc/FilmListPageDesc';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/game" element={<GamePage />} />
            <Route path='/Add' element={<AddPage />} />
            <Route path='/list' element={<FilmListPage />} />
            <Route path='/films/:id' element={<FilmListPageDesc/>}/>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { SYNC_ROUTE, HOME_ROUTE,GENRES_ROUTE } from "./constants/routes.jsx";
import Home from "./pages/Home/index";
import SyncPage from "./pages/SyncPage/index";
import GenrePage from './pages/GenrePage/index';
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={SYNC_ROUTE} element={<SyncPage />} />
          <Route path={GENRES_ROUTE} element={<GenrePage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

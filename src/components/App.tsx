import {JSX} from 'react';
import MainPage from './MainPage.tsx';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Login from './Login.tsx';
import Favorites from './Favorites.tsx';
import Offer from './Offer.tsx';
import NotFoundPage from './NotFoundPage.tsx';
import PrivateRoute from './PrivateRoute.tsx';
import {AuthorizationStatus} from '../const.ts';


type AppProps = {
  offersCount: number;
};

function App({offersCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage offersCount={offersCount}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/favorites" element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <Favorites/>
          </PrivateRoute>
        }
        />
        <Route path="/offer/:id" element={<Offer/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import MainPage from './MainPage.tsx';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Login from './Login.tsx';
import Favorites from './Favorites.tsx';
import Offer from './Offer.tsx';
import NotFoundPage from './NotFoundPage.tsx';
import PrivateRoute from './PrivateRoute.tsx';
import {AuthorizationStatus} from '../const.ts';
import {Offer as OfferType} from '../mocks/offers';

type AppProps = {
  offersCount: number;
  offers: OfferType[];
};

function App({offersCount, offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage offersCount={offersCount} offers={offers}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/favorites" element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <Favorites offers={offers}/>
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

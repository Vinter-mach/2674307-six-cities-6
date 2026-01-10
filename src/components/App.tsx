import MainPage from './MainPage.tsx';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Login from './Login.tsx';
import Favorites from './Favorites.tsx';
import Offer from './Offer.tsx';
import NotFoundPage from './NotFoundPage.tsx';
import PrivateRoute from './PrivateRoute.tsx';
import {AuthorizationStatus} from '../const.ts';
import {OfferType} from '../mocks/offers';
import {Review} from '../mocks/reviews.ts';

type AppProps = {
  offersCount: number;
  offers: OfferType[];
  reviews: Review[];
};

function App({offersCount, offers, reviews}: AppProps): JSX.Element {
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
        <Route path="/offer/:id" element={<Offer offers={offers} reviews={reviews}/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import OfferCard from './OfferCard.tsx';
import {Offer} from '../mocks/offers';
import {useState} from 'react';
import FavoriteCard from './FavoriteCard.tsx';

type CardType = 'cities' | 'favorites';

type OffersListProps = {
  offers: Offer[];
  className: string;
  type?: CardType;
};

function OffersList({offers, className, type = 'cities'}: OffersListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  return (
    <div className={className}>
      {offers.map((offer) => (
        type === 'cities' ? (
          <OfferCard key={offer.id} offer={offer}/>
        ) : (
          <FavoriteCard key={offer.id} offer={offer}/>
        )
      ))}
    </div>
  );
}

export default OffersList;

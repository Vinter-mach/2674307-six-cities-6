import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../hooks/useMap';
import {OfferType} from '../mocks/offers';

type MapProps = {
  offers: OfferType[];

};

const pin = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

const DEFAULT_ZOOM = 12;

function Map({offers}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const defaultOffer = offers[0];
  const mapCenter = defaultOffer ? {
    lat: defaultOffer.coordinates.latitude,
    lng: defaultOffer.coordinates.longitude,
    zoom: DEFAULT_ZOOM
  } : {lat: 0, lng: 0, zoom: DEFAULT_ZOOM};

  const map = useMap(mapRef, mapCenter);

  useEffect(() => {
    if (map) {
      map.setView([mapCenter.lat, mapCenter.lng], mapCenter.zoom);
    }
  }, [map, mapCenter]);

  useEffect(() => {
    if (map) {
      const markerLayer = leaflet.layerGroup().addTo(map);

      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.coordinates.latitude,
            lng: offer.coordinates.longitude,
          }, {
            icon: pin,
          })
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}
    />
  );
}

export default Map;

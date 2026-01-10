export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  imgSrc: string;
  images: string[];
  isPremium: boolean;
  isBookMark: boolean;
  rating: number;
  city: string;
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  host: {
    name: string;
    isPro: boolean;
    avatarUrl: string;
  };
};

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
    price: 120,
    imgSrc: 'img/apartment-01.jpg',
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isPremium: true,
    isBookMark: false,
    rating: 4.8,
    city: 'Amsterdam',
    bedrooms: 3,
    maxAdults: 4,
    goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    imgSrc: 'img/room.jpg',
    images: ['img/room.jpg'],
    isPremium: false,
    isBookMark: true,
    rating: 4.0,
    city: 'Amsterdam',
    bedrooms: 1,
    maxAdults: 2,
    goods: ['Wi-Fi', 'Washing machine', 'Towels'],
    host: {
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    imgSrc: 'img/apartment-02.jpg',
    images: ['img/apartment-02.jpg'],
    isPremium: false,
    isBookMark: false,
    rating: 4.0,
    city: 'Cologne',
    bedrooms: 2,
    maxAdults: 3,
    goods: ['Laptop friendly workspace', 'Breakfast'],
    host: {
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    imgSrc: 'img/apartment-03.jpg',
    images: ['img/apartment-03.jpg'],
    isPremium: true,
    isBookMark: false,
    rating: 5.0,
    city: 'Hague',
    bedrooms: 3,
    maxAdults: 5,
    goods: ['Washer', 'Towels', 'Fridge'],
    host: {
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
  },
];

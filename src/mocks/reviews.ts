export type Review = {
  id: string;
  date: string;
  userName: string;
  rating: number;
  comment: string;
  avatarImg?: string;
};

export const reviews: Review[] = [
  {
    id: '1',
    date: '2019-04-24',
    userName: 'Max',
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.\n',
    avatarImg: 'img/avatar-max.jpg',
    rating: 4.8
  }
];

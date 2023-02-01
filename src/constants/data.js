import images from './images';

const cakes = [
  {
    title: 'Strawberry Jam Filling Cake',
    price: 'Ksh2000',
    tags: 'Strawberry| Strawberry frosting',
  },
  {
    title: 'Chocolate Delight',
    price: 'Ksh2500',
    tags: 'Chocolate | Vanilla frosting',
  },
  {
    title: 'Art-themed Garden Cake',
    price: 'Ksh2400',
    tags: ' Vanilla| Vanilla Frosting',
  },
  {
    title: 'Death by Chocolate',
    price: '2800',
    tags: 'Chocolate | Fudge',
  },
  {
    title: 'Golden Vanilla Drop ',
    price: '2600',
    tags: 'Vanilla | Vanilla Frosting',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    priceperkg: 'Ksh920',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    priceperkg: 'Ksh700',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    priceperkg: 'Ksh1000',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    priceperkg: '$900',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    priceperkg: '$800',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
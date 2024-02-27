import {Category, Tag} from '../src';

export const categories: Category[] = [
  {
    label: 'kuchnia włoska',
    id: 'kuchnia-wloska',
  },
  {
    label: 'kuchnia azjatycka',
    id: 'kuchnia-azjatycka',
  },
  {
    label: 'kuchnia francuska',
    id: 'kuchnia-francuska',
  },
];

export const tags: Tag[] = [
  {label: 'Zupa', id: 'zupa', isLevel: true, categoryId: 'kuchnia-francuska'},
  {
    label: 'Boeuf bourguignon',
    id: 'boeuf-bourguignon',
    isLevel: false,
    categoryId: 'kuchnia-francuska',
  },
  {
    label: 'Coq au vin',
    id: 'coq-au-vin',
    isLevel: false,
    categoryId: 'kuchnia-francuska',
  },
  {
    label: 'Ratatouille',
    id: 'ratatouille',
    isLevel: false,
    categoryId: 'kuchnia-francuska',
  },
  {
    label: 'Soufflé',
    id: 'souffle',
    isLevel: false,
    categoryId: 'kuchnia-francuska',
  },
  {
    label: 'Spaghetti bolognese',
    id: 'spaghetti-bolognese',
    isLevel: false,
    categoryId: 'kuchnia-wloska',
  },
  {
    label: 'Lasagne',
    id: 'lasagne',
    isLevel: false,
    categoryId: 'kuchnia-wloska',
  },
  {label: 'Pizza', id: 'pizza', isLevel: false, categoryId: 'kuchnia-wloska'},
  {
    label: 'Risotto',
    id: 'risotto',
    isLevel: false,
    categoryId: 'kuchnia-wloska',
  },
  {
    label: 'Tiramisu',
    id: 'tiramisu',
    isLevel: false,
    categoryId: 'kuchnia-wloska',
  },
  {
    label: 'Pad thai',
    id: 'pad-thai',
    isLevel: false,
    categoryId: 'kuchnia-azjatycka',
  },
  {
    label: 'Sushi',
    id: 'sushi',
    isLevel: false,
    categoryId: 'kuchnia-azjatycka',
  },
  {
    label: 'Ramen',
    id: 'ramen',
    isLevel: false,
    categoryId: 'kuchnia-azjatycka',
  },
  {
    label: 'Krewetki w tempurze',
    id: 'krewetki-tempura',
    isLevel: false,
    categoryId: 'kuchnia-azjatycka',
  },
  {
    label: 'Smażony ryż',
    id: 'smażony-ryż',
    isLevel: false,
    categoryId: 'kuchnia-azjatycka',
  },
];

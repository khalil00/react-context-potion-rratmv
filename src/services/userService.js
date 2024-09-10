// import dumbledoreImage from '../../img/Dumbledore.jpg';
// import harryImage from '../../img/HarryPotter.jpeg';
// import dobbyImage from '../../img/Dobby.png';

export const getUsers = () => [
  {
    name: 'Albus Dumbledore',
    // photo: dumbledoreImage,
    permissions: ['canAdd', 'canRemove', 'canExecute'],
  },
  {
    name: 'Harry Potter',
    // photo: harryImage,
    permissions: ['canAdd', 'canExecute'],
  },
  {
    name: 'Dobby',
    // photo: dobbyImage,
    permissions: ['canExecute'],
  },
];

let coordinates = [
    {  
      'name' : 'coordinate_1',
      'x' : 12,
      'y' : 123
    },
    {
      'name' : 'coordinate_2',
      'x' : 134,
      'y' : 52
    },
    {
      'name' : 'coordinate_3',
      'x' : 34,
      'y' : 52
    }
  ];

//   for (let i = 0; i < coordinates.length; i++) {
//     console.log(coordinates[i].name);
//     console.log(coordinates[i].x);
// }

coordinates.map(
    x1 => {
        console.log(x1.name)
    }
)

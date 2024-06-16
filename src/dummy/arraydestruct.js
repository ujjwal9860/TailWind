import React from 'react'

const App = () => {
  const numbers = [11, 22, 33, 44, 55];
  const [a, b, c, d, e] = numbers;
  console.log(a);

  const colors = ['green', 'red', 'blue'];
  const newColors = ['golden', 'pink', 'purple'];
  // let mergeColors = colors.concat(newColors);

  const mergeColors = [...colors, ...newColors];
  console.log(mergeColors);



  const person = {
    namee: 'hari',
    age: 50
  };
  // person.adress = 'ktm'

  // person.age = 90
  // console.log(person);

  delete person['age']
  const newPerson = { ...person, phno: 9860, adress: 'ktm' }
  console.log(newPerson);


  return (
    <div>

    </div>
  )
}

export default App

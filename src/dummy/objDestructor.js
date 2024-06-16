import React from 'react'

const App = () => {
  const person = {
    a: 9,
    name: 'hari',
    age: 80
  }
  const { age, name } = person;
  // console.log(name);

  const data = {
    address: [
      { ad1: { road: '90km', city: 'ktm' } }
    ]
  };
  const { address: [{ ad1: { city } }] } = data;
  // const { address } = data;
  // const [a] = address;
  // const { ad1 } = a;
  // const { city } = ad1;
  console.log(city);




  return (
    <div>

    </div>
  )
}

export default App

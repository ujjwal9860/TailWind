import React from 'react'

class Bank {
  constructor(name) {
    this.name = name;
  }
  #balance = 0;

  getBalance() {
    return this.#balance;
  }

  setBalance(amount) {
    this.#balance += amount;
  }
}



const App = () => {
  const nic = new Bank('Nic asia');
  nic.setBalance(20000);



  console.log(nic.name);
  console.log(nic.getBalance());


  return (
    <div>


    </div>
  )
}

export default App

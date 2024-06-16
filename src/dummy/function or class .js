import React from 'react'

function Bank(name, balance) {
  this.name = name;
  let _balance = 0;

  this.getBalance = function () {
    return _balance;
  }

  this.setBalance = function (amount) {
    _balance += amount;
  }


}

const App = () => {
  const nic = new Bank('Nic asia');



  console.log(nic.name);
  console.log(nic.getBalance());
  nic.setBalance(10000);


  return (
    <div>


    </div>
  )
}

export default App

const App = () => {



  let total = 0;

  let avg = 0;

  const greet = (...args) => {

    for (let i of args) {

      total += i;

      avg = total / args.length;

      console.log(args.length)

    }

  }



  const lio = greet(70, 11, 22, 44, 55, 66, 77, 55, 90, 99, 100);



  console.log(total);

  console.log(avg);



  return (

    <div>



      <h1></h1>
    </div>

  )
}
export default App
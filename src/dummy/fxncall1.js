const App = () => {


  const greet = (a, ...args) => {
    // console.log(a);
    console.log(args);
    return 90 * 90;
  }

  const lio = greet(70, 11, 22, 44, 55, 66, 77, 55, 90, 99, 100);


  return (
    <div>
      {lio};

      <h1>asldk;sla;dkl;ska</h1>


    </div>
  )
}
export default App
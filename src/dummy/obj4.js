const App = () => {

  const data = [
    {
      "id": 1,
      "todo": "Do something nice for someone I care about",
      "completed": true,
      "userId": 26
    },
    {
      "id": 2,
      "todo": "Memorize the fifty states and their capitals",
      "completed": false,
      "userId": 48
    },
    {
      "id": 3,
      "todo": "Watch a classic movie",
      "completed": false,
      "userId": 4
    },
  ];
  return (
    // <div>
    //   {data.map((data, i) => {
    //     return <div key={i}>
    //       <p>ID: {data.id}</p>
    //       <p>Todo: {data.todo}</p>
    //       <p>Completed: {data.completed ? "true" : "false"}</p>
    //       <p>User ID: {data.userId}</p>
    //     </div>
    //   }
    //   )}
    // </div>

    <div className="p-8 flex gap-2">
      {data.map((da, i) => {
        return <div key={i} className="shadow-lg p-3 bg-orange-200 mb-3 hover:scale-105">
          <h1>{da.id}</h1>
          <h2>{da.todo}</h2>
          <p>{da.userId}</p>
          <input className={da.completed ? 'animate-bounce' : 'animate-none'} type="checkbox" checked={da.completed} />
        </div>
      })}
    </div>
  )
}
export default App;
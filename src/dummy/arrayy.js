const App = () => {
  const data = [
    "https://cdn.dummyjson.com/product-images/1/1.jpg",
    "https://cdn.dummyjson.com/product-images/1/2.jpg",
    "https://cdn.dummyjson.com/product-images/1/3.jpg",
    "https://cdn.dummyjson.com/product-images/1/4.jpg",
    "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
  ];
  return (
    <div>
      {data.map((dat, i) => {
        return <img key={i} src={dat} alt="" />
      }
      )}
    </div>
  )
}
export default App;
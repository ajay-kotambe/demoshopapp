import "./App.css";
// import Item from "./components/Item";
// import ItemDate from "./components/ItemDate";
// import Card from "./components/Card";
// import Products from "./components/Products";
// import NewProduct from "./components/NewProduct";
import RenderList from "./components/RenderList";
import HandlingEvent from "./components/HandlingEvent";
import UsingState from "./components/UsingState";
function App() {
  const products = [
    {
      id: "p1",
      title: "Nirma",
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    {
      id: "p2",
      title: "Surf Excel",
      amount: 200,
      date: new Date(2015, 7, 31),
    },
    {
      id: "p3",
      title: "Tide",
      amount: 130,
      date: new Date(2014, 2, 24),
    },
  ];

  // let newObj;

  function getDataFromNewProduct(data) {
    console.log(data);
    // newObj = data;
  }

  return (
    <div>
      {/* <NewProduct sendDataToApp={getDataFromNewProduct} />
      <Products items={products}></Products>; */}
      <RenderList />
      <HandlingEvent />
      <UsingState />
    </div>
  );
}

export default App;

import "./App.css";
// import Item from "./components/Item";
// import ItemDate from "./components/ItemDate";
import Card from "./components/Card";
import Products from "./components/Products";

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

  return <Products items={products}></Products>;
}

export default App;

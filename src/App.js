import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";

function App() {
  const resPrompts = [
    {
      itemName: "Nirma",
      itemDate: "20",
      itemMonth: "July",
      itemYear: "2015",
    },
    {
      itemName: "SurfExcel",
      itemDate: "31",
      itemMonth: "July",
      itemYear: "2010",
    },
  ];

  return (
    <div>
      <Item name={resPrompts[0].itemName}> are ye to first Item hai...</Item>
      <ItemDate
        day={resPrompts[0].itemDate}
        month={resPrompts[0].itemMonth}
        year={resPrompts[0].itemYear}
      ></ItemDate>
      <Item name={resPrompts[1].itemName}>are ye to second Item hai...</Item>
      <ItemDate
        day={resPrompts[1].itemDate}
        month={resPrompts[1].itemMonth}
        year={resPrompts[1].itemYear}
      ></ItemDate>

      <div className="App">
        <h1>Hello World</h1>
      </div>
    </div>
  );
}

export default App;

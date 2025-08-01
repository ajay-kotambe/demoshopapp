import "./ItemDate.css";

function ItemDate(props) {
  const day = props.day;
  const month = props.month;
  const year = props.year;
  return (
    <div className="mainDiv">
      <span className="date">{day}</span> &nbsp;
      <span className="date">{month}</span>&nbsp;
      <span className="date">{year}</span>&nbsp;
    </div>
  );
}

export default ItemDate;

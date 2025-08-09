const SharingDataComps = (props) => {
  return (
    <div>
      <button onClick={() => props.setCount(props.count + 1)}>
        Click here..
      </button>
    </div>
  );
};

export default SharingDataComps;

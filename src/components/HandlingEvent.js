import { ToastContainer, toast } from "react-toastify";
const HandlingEvent = () => {
  const showToastHandler = () => {
    toast.info("Handler Worked!");
    toast.success("Event Triggered...");
  };
  return (
    <div>
      <button onClick={showToastHandler}>Show Toast!</button>
      <ToastContainer />
    </div>
  );
};

export default HandlingEvent;

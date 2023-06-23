import ReactDOM from "react-dom";

const Popup = (id) => {
  return ReactDOM.createPortal(
    <div className="rounded-3 popup-holder">
      <p className="m-0">write something</p>
    </div>,
    document.getElementById(id.id)
  );
};

export default Popup;

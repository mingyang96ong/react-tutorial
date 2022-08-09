import { useState } from "react";

import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteHandler = () => {
    setModalIsOpen(true);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      { modalIsOpen && <Modal onClick={closeModalHandler} onCancel={closeModalHandler}/>}
      { modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
    </div>
  );
};

export default Todo;

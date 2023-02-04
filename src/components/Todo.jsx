import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleDelete = () => {
    setModalIsOpen(true);
  }

  const handleModalClose = () => {
    setModalIsOpen(false)
  }

  const handleModalDelete = ({title}) => {
    console.log(title)
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <h3>{props.contents}</h3>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>Delete</button>
      </div>
      {modalIsOpen && 
        <>
          <Modal handleClose = {handleModalClose} handleModalDelete = {handleModalDelete} />
          <Backdrop />
        </>
      }
    </div>
  )
}
export default Todo
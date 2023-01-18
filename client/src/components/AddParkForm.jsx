import { useState } from "react"

const AddParkForm = () => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  
  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        add park
      </button>

      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}>

          </div>
          <div className="modal-content">
            <h2>Hello</h2>
            <p>This is a modal</p>
            <button onClick={toggleModal} className="close-modal">X</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AddParkForm
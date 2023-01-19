import { useState } from "react"
import { FaTimes } from 'react-icons/fa'

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
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <form>
              <h2>New Park</h2>
              <div className="input-group">
                <label>park name</label>
                <input 
                  type="text" 
                  placeholder="park name"
                />
                <br />
                <label>park address</label>
                <input 
                  type="text" 
                  placeholder="park address"
                />
                <br />
                <label>park type</label>
                <input 
                  type="text" 
                  placeholder="park type"
                />
                <br />
                <button type="submit">Add Park</button>
              </div>
            </form>
            <button onClick={toggleModal} className="close-modal">
              <FaTimes color="red" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default AddParkForm
import { useContext, useEffect } from "react";
import { useState } from "react"
import { FaTimes } from 'react-icons/fa'
import ParkContext from "../context/ParkContext";

const AddParkForm = () => {

  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true) 

  const { addPark, parkEdit, updatePark } = useContext(ParkContext)

  useEffect(() => {
    if(parkEdit.edit === true) {
        setText(parkEdit.item.text)
    }
  }, [parkEdit])

  const handleTextChange = (e) => {
    if (text === '') {
        setBtnDisabled(true)
    } else {
        setBtnDisabled(false)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10) {
        const newPark = {
            text
        }

        if(parkEdit.edit === true) {
            updatePark(parkEdit.item.id, newPark)
        } else {
            addPark(newPark)
        }

        setText('')
    }
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
            <form onSubmit={handleSubmit}>
              <h2>New Park</h2>
              <div className="input-group">
                <label>park name</label>
                <br />
                <input 
                  onChange={handleTextChange}
                  type="text" 
                  placeholder="park name"
                  value={text}
                />
                <br />
                <label>park address</label>
                <br />
                <input 
                  onChange={handleTextChange}
                  type="text" 
                  placeholder="park address"
                  value={text}
                />
                <br />
                <label>park type</label>
                <br />
                <input 
                  onChange={handleTextChange}
                  type="text" 
                  placeholder="park type"
                  value={text}
                />
                <br />
                <button type="submit" isDisabled={btnDisabled}>Add Park</button>
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
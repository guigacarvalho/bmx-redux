import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from "react"
import PropTypes from "prop-types"
import ParkContext from "../context/ParkContext"

const ParkItem = ({ item }) => {

  const { deletePark, editPark } = useContext(ParkContext)

  return (
    <>
      <button onClick={() => deletePark(item.id)} className='close'>
        <FaTimes color='black' />
      </button>
      <button onClick={() => editPark(item)} className="edit">
        <FaEdit color='black' />
      </button>
      <div className="park-info">{item.name}</div>
      <div className="park-info">{item.address}</div>
      <div className="park-info">{item.type}</div>
    </>
    
  )
}

ParkItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default ParkItem
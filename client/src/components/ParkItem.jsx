// import { useContext } from "react"
// import PropTypes from "prop-types"
// import ParkContext from "../context/ParkContext"

const ParkItem = ({ item }) => {

  // const { deletePark, editPark } = useContext(ParkContext)

  return (
    <>
      <div className="park-info">{item.name}</div>
      <div className="park-info">{item.address}</div>
    </>
    
  )
}

export default ParkItem
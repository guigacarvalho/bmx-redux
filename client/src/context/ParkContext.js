import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from "react"

const ParkContext = createContext()

export const ParkProvider = ({children}) => {

  const [park, setPark] = useState([
    {
        id: 1,
        name: 'Rockstar Energy Bike Park',
        address: '12257 Kukendahl Rd, Houston, TX 77067'
    }
  ])

  const [parkEdit, setParkEdit] = useState({
    item: {},
    edit: false
  })

  const addPark = (newPark) => {
    newPark.id = uuidv4()
    setPark([newPark, ...park])
  }

  const deletePark = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setPark(park.filter((item) => item.id !== id))
    }
  }

  const editPark = (item) => {
      setParkEdit({
          item,
          edit: true
      })
  }

  const updatePark = (id, updItem) => {
    setPark(park.map((item) => item.id === id ? {
        ...item, ...updItem
    } : item))
  }

  return <ParkContext.Provider value={{
    park,
    parkEdit,
    addPark,
    deletePark,
    editPark,
    updatePark
  }}>
    {children}
  </ParkContext.Provider>
}

export default ParkContext
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

  return <ParkContext.Provider value={{
    park,
    parkEdit,
    deletePark,
    editPark
  }}>
    {children}
  </ParkContext.Provider>
}

export default ParkContext
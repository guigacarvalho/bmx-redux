import { createContext } from "react"

const ParkContext = createContext()

export const ParkProvider = ({children}) => {
  const [park, setPark] = useState([
    {
        id: 1,
        name: 'Rockstar Energy Bike Park',
        address: '12257 Kukendahl Rd, Houston, TX 77067'
    }
  ])
}

export default ParkContext
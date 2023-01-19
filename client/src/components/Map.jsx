import fakemap from '../images/fakemap.jpg'

// const location = {
//   address: '12257 Kuykendahl Rd, Houston, TX 77067',
//   lat: 29.95862,
//   lng: -95.42057,
// }

export function Map() {
  return (
    <div className='map-container'>
      <img src={fakemap} alt='fakemap' className='fakemap'/>
    </div>
  )
}
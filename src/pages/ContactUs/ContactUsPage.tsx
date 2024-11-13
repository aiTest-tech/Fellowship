import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Navbar/Footer/Footer'
import { useEffect } from 'react'

// Include custom CSS for styling (optional)
import './ContactUs.css' // assuming you will create this CSS file for custom styles

const ContactUs = () => {
  const position: LatLngExpression = [23.21996, 72.65735] // Type annotation for position

  useEffect(() => {
    // Optional: Add any custom leaflet-specific interactions or effects here
    const marker = document.querySelector('.leaflet-marker-icon')
    if (marker) {
      marker.classList.add('map-marker-hover') // Adding hover effect if marker is available
    }
  }, [])

  return (
    <>
      <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        <Navbar />
      </div>

      <div className="max-w-full sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] mx-auto mt-28 rounded-lg shadow-xl overflow-hidden p-4 sm:p-6 md:p-8">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <MapContainer center={position} zoom={16} scrollWheelZoom={true} style={{ height: '60vh', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <div className="text-xl font-semibold text-gray-800">
                  Welcome to our office! <br /> Easily customizable popup.
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  )
}

export default ContactUs

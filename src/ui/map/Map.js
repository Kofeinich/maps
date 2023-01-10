import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from "react-leaflet";
import {useState} from "react";


export const Map = () => {
    const [position, setPosition] = useState([59.84660399, 30.29496392])
    // const map = useMapEvents({
    //     click() {
    //         map.locate()
    //     },
    //     locationfound(e) {
    //         setPosition(e.latlng)
    //         map.flyTo(e.latlng, map.getZoom())
    //     },
    // })
    return <section className={'map'}>
        <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup></Popup>
            </Marker>
        </MapContainer>
    </section>
}
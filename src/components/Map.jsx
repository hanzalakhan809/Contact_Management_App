import { useEffect, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import chartServices from '../services/chartServices';


const Map = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        chartServices.getCountrySpecificData().then((response) => [
            setData(response)
        ])
    }, [])


    var mark = new L.Icon({
        iconUrl: 'https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Picture.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    return (

        <MapContainer center={[38.9637, 35.2433]} zoom={5} style={{ height: '500px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {data.map((item,index) => (
                <Marker key={index} position={[item.countryInfo.lat, item.countryInfo.long]} icon={mark}>

                    <Popup >
                        <p><b>Country:</b> {item.country}</p>
                        <p><b>Active Cases:</b> {item.active}</p>
                        <p><b>Recovered:</b> {item.recovered}</p>
                        <p><b>Deaths :</b> {item.deaths}</p>
                    </Popup>
                </Marker>
            ))}

        </MapContainer>
    );
};

export default Map;
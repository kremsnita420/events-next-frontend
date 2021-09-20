import Image from 'next/image'
import { useState, useEffect } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Geocode from 'react-geocode'

export default function EventMap({ evt }) {
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const [loading, setLoading] = useState(true)
    const [viewport, setViewport] = useState({
        latitude: 40.712772,
        longitude: -73.935242,
        width: '100%',
        height: '500px',
        zoom: 12
    })

    useEffect(() => {
        fetch(`https://api.geoapify.com/v1/geocode/search?text=${evt.address}&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`)
            .then(response => response.json())
            .then(result => {
                const { lat, lon } = result.features[0].properties;
                setLat(lat);
                setLng(lon);
                setViewport({ ...viewport, latitude: lat, longitude: lon });
                setLoading(false)
            })
            .catch(error => console.log('error', error));

    }, [evt.address, viewport])

    // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    Geocode.setApiKey(process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY)

    if (loading) return false

    return (
        <ReactMapGl {...viewport}
            mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
            onViewportChange={(vp) => setViewport(vp)}
        >
            <Marker key={evt.id} latitude={lat} longitude={lng}>
                <Image src='/images/pin.svg' width={30} height={30} alt='pin marker' />
            </Marker>
        </ReactMapGl>
    )
}

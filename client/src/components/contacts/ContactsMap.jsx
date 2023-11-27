import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
    width: '100vw',
    height: '50vh',
};
const center = {
    lat: 45.03277454334497, // default latitude
    lng: -93.36017419398833, // default longitude
};

const ContactsMap = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDQgt4KxGArLPvr0sIJ4IhxRYPmaaYqXig',
        libraries,
    });

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={15}
                center={center}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    );
};

export default ContactsMap;
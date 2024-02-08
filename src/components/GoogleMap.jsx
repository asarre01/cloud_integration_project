import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// Composant GoogleMaps qui rend une carte avec un marqueur
function GoogleMaps(props) {
    return (
        // Composant Map de google-maps-react
        <Map
            google={props.google}  // Objet Google API fourni par GoogleApiWrapper
            zoom={14}  // Niveau de zoom initial
            initialCenter={{ lat: 14.6928, lng: -17.4467 }}  // Position initiale du centre (Dakar)
        >
            {/* Composant Marker représentant un point sur la carte */}
            <Marker position={{ lat: 14.6928, lng: -17.4467 }} /> 
        </Map>
    );
}

// Enveloppez le composant GoogleMaps avec GoogleApiWrapper pour fournir l'objet Google API
export default GoogleApiWrapper({
    apiKey: 'VOTRE_CLÉ_API_GOOGLE_MAPS',  // Remplacez par votre véritable clé API Google Maps
})(GoogleMaps);

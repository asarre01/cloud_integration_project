# Intégration de l'API Google Maps dans une application React

Ce guide vous montrera comment intégrer l'API Google Maps dans une application React existante.

## Étapes

### 1. Obtenez une clé API Google Maps

- Accédez à la [Console Google Cloud](https://console.cloud.google.com/).
- Créez un nouveau projet ou sélectionnez un projet existant.
- Activez l'API Google Maps JavaScript pour votre projet.
- Obtenez votre clé API Google Maps dans la section "Clés API" de la console.

### 2. Installez le package `google-maps-react`

Installez le package `google-maps-react` qui facilite l'intégration de Google Maps dans votre application React.

```bash
npm install --save google-maps-react
```

### 3. Intégrez la carte dans votre composant React

Dans le composant où vous souhaitez afficher la carte, utilisez le composant `Map` fourni par `google-maps-react`. Utilisez votre clé API Google Maps comme propriété `google`.

```jsx
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function GoogleMaps(props) {
    return (
        <Map
            google={props.google}
            zoom={14}
            initialCenter={{ lat: VOTRE_LATITUDE, lng: VOTRE_LONGITUDE }} 
        >
            <Marker position={{ lat: VOTRE_LATITUDE, lng: VOTRE_LONGITUDE }} /> 
        </Map>
    );
}

export default GoogleApiWrapper({
    apiKey: 'VOTRE_CLÉ_API_GOOGLE_MAPS',
})(GoogleMaps);
```

Assurez-vous de remplacer `VOTRE_LATITUDE` et `VOTRE_LONGITUDE` par les coordonnées appropriées.

### 4. Utilisez le composant GoogleMaps

Intégrez votre composant `GoogleMaps` dans l'endroit souhaité de votre application.

```jsx
import React from 'react';
import GoogleMaps from './Chemin/Vers/Votre/Composant/GoogleMaps';

function VotreComposant() {
    return (
        <div>
            {/* ... Votre contenu existant ... */}
            <GoogleMaps />
            {/* ... Autre contenu ... */}
        </div>
    );
}

export default VotreComposant;
```

### 5. Exécutez votre application

Lancez votre application React pour voir la carte Google Maps intégrée.

```bash
npm start
```

C'est tout ! Vous avez maintenant intégré l'API Google Maps dans votre application React.

---
## asarre01

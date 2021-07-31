import { Geolocation } from '@capacitor/geolocation';
import React, {useState, useCallback} from 'react';


function App() {
  const [loc, setLoc] = useState(null);
  let coordinates = null;
  const getCurrentPosition = useCallback(async () => {
    coordinates = await Geolocation.getCurrentPosition();
    setLoc(coordinates);
  }, []);

  return (
    <div>
      <h1>Geolocation</h1>
      <p>Your location is:</p>
      <p>Latitude: {loc?.coords.latitude}</p>
      <p>Longitude: {loc?.coords.longitude}</p>

      <button onClick={getCurrentPosition}>
        Get Current Location
      </button>
    </div>
  );
}

export default App;

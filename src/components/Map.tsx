import { useState } from "react";

type PositionProps = {
  lat: number;
  lng: number;
};
function useGeolocation() {
  const [position, setPosition] = useState<PositionProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (error) => {
        setError(error.message);
      }
    );
  }
  return { position, error, getPosition };
}

function Map() {
  const { position, getPosition, error } = useGeolocation();
  const lat = position?.lat;
  const lng = position?.lng;

  getPosition();
  return (
    <div>
      {error && <p>{error}</p>}
      {!error && lat && lng && (
        <p>
          {lat}, {lng}
        </p>
      )}
    </div>
  );
}

export default Map;

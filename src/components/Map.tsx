import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

type PositionProps = [number, number];
function useGeolocation() {
  const [position, setPosition] = useState<PositionProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
        console.log(pos.coords);
      },
      (error) => {
        setError(error.message);
      }
    );
  }
  useEffect(() => {
    getPosition();
  }, []);
  return { position, error, getPosition };
}

function Map() {
  const { position } = useGeolocation();

  return position ? (
    <div>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="h-[610px] z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  ) : null;
}

export default Map;

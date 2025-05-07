import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useLocation } from "../contexts/locationContext";

type PositionProps = [number, number];

function Tracker() {
  const { location, error } = useLocation();
  const position: PositionProps | null = location
    ? [location.lat, location.lng]
    : null;

  if (
    !location ||
    typeof location.lat !== "number" ||
    typeof location.lng !== "number"
  ) {
    return <p>{error || "Loading..."}</p>;
  }

  return (
    position && (
      <div>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          className="h-[610px] z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>{location.ip}</Popup>
          </Marker>
        </MapContainer>
      </div>
    )
  );
}

export default Tracker;

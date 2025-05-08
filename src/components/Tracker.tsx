import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useLocation } from "../contexts/locationContext";

type PositionProps = [number, number];

function Tracker() {
  const { location, error } = useLocation();
  if (
    !location ||
    typeof location.lat !== "number" ||
    typeof location.lng !== "number"
  )
    return <p>Loading</p>;

  if (error) {
    return <p>{error}</p>;
  }
  const position: PositionProps = [location.lat, location.lng];
  console.log(position);

  return (
    location && (
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
          <ChangeCenter position={position} />
        </MapContainer>
      </div>
    )
  );
}

function ChangeCenter({ position }: { position: [number, number] }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default Tracker;

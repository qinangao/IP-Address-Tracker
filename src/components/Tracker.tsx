import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useLocation } from "../contexts/locationContext";
import { Icon } from "leaflet";
import Spinner from "./Spinner";

const customIcon = new Icon({
  iconUrl: "/assets/icon-location.svg",
  iconSize: [30, 40],
  iconAnchor: [12, 45],
  popupAnchor: [1, -34],
});

type PositionProps = [number, number];

function Tracker() {
  const { location, error } = useLocation();
  if (
    !location ||
    typeof location.lat !== "number" ||
    typeof location.lng !== "number"
  )
    return (
      <div className="flex justify-center items-center h-[50%]">
        <Spinner />
      </div>
    );

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
          zoom={16}
          scrollWheelZoom={true}
          className="h-[610px] z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
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

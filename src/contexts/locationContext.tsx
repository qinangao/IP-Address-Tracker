import { createContext, useState, useEffect, useContext } from "react";

type LocationProps = {
  ip: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  timezone: string;
  postcode: string;

  isp: string;
};
type LocationContextType = {
  location: LocationProps | null;
  error: string | null;
};

const locationContext = createContext<LocationContextType | undefined>(
  undefined
);

const KEY = "at_E0Q54tvEaBgqCAPiLg9HnOi7Sj6FI";

function LocationProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState<LocationProps | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function fetchLocation() {
      try {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${KEY}`
        );
        const data = await res.json();
        console.log(data);

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch location data");
        }
        setLocation({
          ip: data.ip,
          city: data.location.city,
          country: data.location.country,
          timezone: data.location.timezone,
          lat: data.location.lat,
          lng: data.location.lng,
          isp: data.isp,
          postcode: data.location.postalCode || "unknown",
        });
      } catch (err) {
        setError("Failed to fetch location data");
        console.error(err);
      }
    }
    fetchLocation();
  }, []);

  return (
    <locationContext.Provider value={{ location, error }}>
      {children}
    </locationContext.Provider>
  );
}

function useLocation() {
  const context = useContext(locationContext);
  if (context === undefined)
    throw new Error("LocationContext was used outside the LocationProvider ");
  return context;
}

export { LocationProvider, useLocation };

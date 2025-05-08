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
  searchQuery: (query: string) => Promise<void>;
};

const locationContext = createContext<LocationContextType | undefined>(
  undefined
);

const KEY = "at_E0Q54tvEaBgqCAPiLg9HnOi7Sj6FI";

function LocationProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState<LocationProps | null>(null);
  const [error, setError] = useState<string | null>(null);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchLocation();
  }, []);

  async function fetchLocation(query?: string) {
    try {
      const url = query
        ? `https://geo.ipify.org/api/v2/country,city?apiKey=${KEY}&ipAddress=${query}&domain=${query}`
        : `https://geo.ipify.org/api/v2/country,city?apiKey=${KEY}`;

      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok || data.code === 422) {
        throw new Error(data.message || "Invalid IP domain");
      }
      setLocation({
        ip: data.ip,
        city: data.location.city,
        country: data.location.country,
        timezone: data.location.timezone,
        lat: data.location.lat,
        lng: data.location.lng,
        isp: data.isp,
        postcode: data.location.postalCode || " ",
      });
      setError(null);
    } catch (err) {
      setError("Invalid IP domain");
      console.error(err);
    }
  }
  console.log(location);
  async function searchQuery(query: string) {
    await fetchLocation(query);
  }
  return (
    <locationContext.Provider value={{ location, error, searchQuery }}>
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

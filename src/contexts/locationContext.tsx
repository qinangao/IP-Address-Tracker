import { createContext, useState, useEffect, useContext } from "react";
import { isIP, isDomain } from "../helper/CheckIP";

type LocationProps = {
  ip: string;
  city: string;
  countryCode: string;
  lat: number;
  lng: number;
  timezone: string;
  callingCode: string;
  flag: string;
  region: string;
  countryName: string;
};
type LocationContextType = {
  location: LocationProps | null;
  error: string | null;
  searchQuery: (query: string) => Promise<void>;
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
  showError: boolean;
  handleCloseError: () => void;
};

const locationContext = createContext<LocationContextType | undefined>(
  undefined
);

const API_KEY = "75529e4f36774427ad84008a49fb2115";

function LocationProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState<LocationProps | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    fetchLocation();
  }, []);

  async function fetchLocation(query?: string) {
    try {
      const url = query
        ? `https://api.ipgeolocation.io/v2/ipgeo?apiKey=${API_KEY}&ip=${query}`
        : `https://api.ipgeolocation.io/v2/ipgeo?apiKey=${API_KEY}`;

      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok || data.code === 422) {
        setShowError(true);
        throw new Error(data.message);
      }
      setLocation({
        ip: data.ip,
        city: data.location.city,
        countryName: data.location.country_name,
        countryCode: data.location.country_code2,
        timezone: data.location.timezone,
        lat: Number(data.location.latitude),
        lng: Number(data.location.longitude),
        callingCode: data.country_metadata.calling_code,
        flag: data.location.country_flag,
        region: data.location.state_prov,
      });
      setError(null);
    } catch (err) {
      setError((err as Error).message);
      console.error(err);
    }
  }

  async function searchQuery(query: string) {
    const isValidIP = isIP(query);
    const isValidDomain = isDomain(query);

    if (isValidDomain) {
      setError(
        "Domain searches aren't available on the free plan, Please provide an IP address."
      );
      setShowError(true);
      return;
    }

    if (!isValidIP) {
      setError("Invalid IP address");
      setShowError(true);
      return;
    }

    setError(null);
    setShowError(false);
    await fetchLocation(query);
  }

  function handleCloseError() {
    setShowError(false);
  }
  return (
    <locationContext.Provider
      value={{
        location,
        error,
        searchQuery,
        setShowError,
        showError,
        handleCloseError,
      }}
    >
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

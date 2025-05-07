import Header from "./components/Header";
import Tracker from "./components/Tracker";
import { LocationProvider } from "./contexts/locationContext";

function App() {
  return (
    <div className="h-screen w-screen">
      <LocationProvider>
        <Header />
        <Tracker />
      </LocationProvider>
    </div>
  );
}

export default App;

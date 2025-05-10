import Header from "./components/Header";
import Tracker from "./components/Tracker";
import Footer from "./components/Footer";
import { LocationProvider } from "./contexts/locationContext";

function App() {
  return (
    <div className="h-screen w-full">
      <LocationProvider>
        <Header />
        <Tracker />
        <Footer />
      </LocationProvider>
    </div>
  );
}

export default App;

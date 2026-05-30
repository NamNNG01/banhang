import BackgroundGlow from "./components/BackgroundGlow";
import BackgroundLogo from "./components/BackgroundLogo";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="relative min-h-screen bg-[#000F2C]">
      <div className="absolute inset-0 z-0">
        <BackgroundGlow />
        <BackgroundLogo />
      </div>

      <div className="relative z-10">
        <NavBar />
        <div className="px-60 pt-3">
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Prices from "./components/Prices/Prices";

function App() {
  return (
    <>
      <div className="mx-auto pt-16 px-32">
        <NavBar />
        <Header />
        <Prices />
        <Footer />
      </div>
    </>
  );
}

export default App;

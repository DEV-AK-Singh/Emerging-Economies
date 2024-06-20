import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Banner from "./components/main/Banner";
import Faqs from "./components/main/Faqs";
import Graphs from "./components/main/Graphs";

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Graphs/>
      <Faqs/>
      <Footer/>
    </>
  );
}

export default App;

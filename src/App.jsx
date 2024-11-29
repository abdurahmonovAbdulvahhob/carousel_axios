import "./App.css";
import Main from "./components/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "./components/Product";
import Swiper from "./components/Carousel";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Swiper />
      <Product />
      <ToastContainer />
      <Footer/>
    </>
  );
}

export default App;

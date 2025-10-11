import "./App.css";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;

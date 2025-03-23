import Header from "./components/Header/HeaderWrapper";
import MainBanner from "./components/MainBanner/MainBanner";
import CardWrapper from "./components/Card/CardWrapper";
import ProductsWrapper from "./components/ProductsSection/ProductsWrapper";
import MainProductWrapper from "./components/ProductsSection/MainProductWrapper";
import FooterWrapper from "./components/Footer/FooterWrapper";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <MainBanner socialLinks={{ facebook: "https://facebook.com", youtube: "https://youtube.com" }} />
      <CardWrapper />
      <ProductsWrapper />
      <MainProductWrapper />
      <FooterWrapper />
      <Footer />
    </div>
  );
}

export default App;

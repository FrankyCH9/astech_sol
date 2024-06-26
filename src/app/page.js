import Banner from "./components/banner/banner";
import Carousel from "./components/carrusel/carousel";
import Producto from "./components/products/producto";
import Footer from "./components/Footer/footer";
import Allproducts from "./components/allproducts/Allproducts"

export default function Home() {
  return (
    <main>
      <Banner/>
      <Carousel/>
      <Allproducts/>
      <Footer/>   
    </main>
  );
}

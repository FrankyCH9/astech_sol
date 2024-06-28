
import '../laptos.css'
//import ProductDetails from '@/app/components/products/productDetails';
import Detalleproducto from '../../components/detalleproducto/Detalleproducto'

const Producto = ({params}) => {
  const {id }= params


  return (
      <div className="aproducto ">
         <Detalleproducto/>
      </div>

    );
}

export default Producto;
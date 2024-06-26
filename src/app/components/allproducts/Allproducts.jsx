
import Producto from '../products/producto'
import * as Dataproductos from '../../../app/utils/Dataproductos'
const Allproducts = () => {
    return ( 
        <div className='bg-rose-500 ' >
            <Producto datos={Dataproductos.products} titulo={'Ofertas'}/>
            <Producto datos={Dataproductos.laptos} titulo={'Laptos'}/>
            <Producto datos={Dataproductos.computadoras} titulo={'Computadoras'}/>
            <Producto datos={Dataproductos.mouses} titulo={'Mouses'}/>
        </div>
     );
}
 
export default Allproducts;
//'use client'

//import { useQuery } from "@tanstack/react-query";
import Producto from "../components/products/producto";
import { verProductos } from "../utils/DataApi";

/*const valores = async () => {
  const response = await fetch(`${'https://fakestoreapi.com/products'}`,{cahe:'no-store'});
  console.log('peticion hecha')
  return response.json()
}*/

/*const valores = async () => {
  const response = await fetch(`${'https://fakestoreapi.com/products'}`,
    {
      next:{revalidate:60}
    });
  console.log('peticion hecha')
  return response.json()
}*/


const Laptos = async () => {
  const data =  await verProductos()

  return (
    <main className="bg-rose-500 laptos">
      <Producto
        datos={/*Dataproductos.products*/ data && data}
        titulo={"Laptos"}
      />
    </main>
  );
};

export default Laptos;

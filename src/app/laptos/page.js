//'use client'

import { useQuery } from "@tanstack/react-query";
import Producto from "../components/products/producto";
import { verProductos } from "../utils/DataApi";

const valores = async () => {
  const response = await fetch(`${'https://fakestoreapi.com/products'}`);
  console.log('peticion hecha')
  return response.json()
}

const Laptos = async () => {

  const data =  await valores()

  /*const { isLoading, data, isError, error } = useQuery({
    queryKey: ['allproductos'],
    queryFn: () => verProductos(),
  });*/

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

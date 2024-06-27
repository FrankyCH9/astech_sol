
'use client'

import Producto from '../products/producto'
import * as Dataproductos from '../../../app/utils/Dataproductos'
import { useQueryGetAllproductos } from '@/app/utils/ReactQueryhocks';
//import { useEffect, useState } from 'react';
import axios from "axios";
import { useMutation, useQueryClient } from '@tanstack/react-query';

/*export const verProductos = async () => {
    //const response = await axios.get(`${'https://fakestoreapi.com/products'}`);
    const response = await fetch('https://fakestoreapi.com/products');
    console.log(response.data)
    console.log('hola')
    return response.data
}*/


/*const verProductos2 = async () => {
    const response = await fetch(`${'https://fakestoreapi.com/products'}`);
    console.log('peticion hecha')
    return response.json()
}*/
/*const  verProductos2 = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
}*/



const Allproducts =  () => {

    const { isLoading, data, isError, error } = useQueryGetAllproductos(['allproductos']);

    
    //const data2 =  verProductos();
    console.log(data)
    //console.log(data2)

    return (
        <div className='bg-rose-500 ' >
           {/*} <Producto datos={Dataproductos.products} titulo={'Ofertas'} />
            <Producto datos={Dataproductos.laptos} titulo={'Laptos'} />
            <Producto datos={Dataproductos.computadoras} titulo={'Computadoras'} />
            <Producto datos={Dataproductos.mouses} titulo={'Mouses'} />*/}
        </div>
    );
}

export default Allproducts;

/*const verProductos = async () => {
    const response = await axios.get(`${'https://fakestoreapi.com/products'}`);
    return response.data
}*/



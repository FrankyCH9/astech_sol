

import axios from "axios";

//const Api = process.env.URL_API
const Api2 = process.env.NEXT_PUBLIC_URL_API

export const verProductos = async () => {
    //const response = await axios.get(`${'https://fakestoreapi.com/products'}`);
    const response = await axios.get(`${Api2}/products`);
    //const response = await fetch('https://fakestoreapi.com/products');  
    return response.data
}
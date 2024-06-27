
import axios from "axios";
export const verProductos = async () => {
    const response = await axios.get(`${'https://fakestoreapi.com/products'}`);
    //const response = await fetch('https://fakestoreapi.com/products');
    console.log(response.data)
    console.log('holamundo')
    return response.data
}
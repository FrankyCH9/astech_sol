

import axios from "axios";

//const Api = process.env.URL_API
const Api2 = process.env.NEXT_PUBLIC_URL_API

/*export const verProductos = async () => {
    const response = await axios.get(`${Api2}/products`);
    return response.data
}*/


export const verProductos = async () => {
    const response = await axios.get(`${Api2}/products`,
        {next: { revalidate: 60 } }
    );
    return response.data
}
import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1'

async function fetchData(urlApi){
    const response = await fetch(urlApi)
    const data = await response.json()
    return data;
}

const anotherFunction = async (urlApi) =>{
    try{
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        console.log(products)
        console.log(product.title)
        console.log(category.name)
    }catch(error) {
        console.error(error);
    }
}

anotherFunction(API)















import fetch from 'node-fetch'
const API2 = 'https://api.escuelajs.co/api/v1'

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const respuestas = async(urlApi) =>{
    try{
    const productos = await fetchData(`${API2}/products`);
    const productoOne = await fetchData(`${API2}/products/${productos[0].id}`)
    const categoriaProducto = await fetchData(`${API2}/categories/${productoOne.category.id}`)
    console.log(productos)
    console.log(productoOne.title)
    console.log(categoriaProducto.name)
    }catch(error){
        console.error(error)
    }
    
}

respuestas(API2);


function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);






function* iterate(array){
    for(let value of array){
        yield value
    }
}

const it = iterate(["Irving","Katya","Paloma","Picho"]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);




import fetch from 'node-fetch'
const API2 = 'https://api.escuelajs.co/api/v1'

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

async function* respuestas(urlApi){
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

respuestas(API2).next();

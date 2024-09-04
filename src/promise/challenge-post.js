// import fetch from 'node-fetch';
// const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}



postData(`${API}/products`,data)
.then((response)=> response.json())
.then(data => console.log(data));




const data = {
    
    "title": "Elemento actualizado",
    "price": 212,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}
// Método put (actualizar elemento)
function putData(urlApi,data){
    const response = fetch(urlApi,{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // comvierte el objeto JavaScript en JSON
    });
    return response
}

const productId = 100; // id del producto a actualizar

putData(`${API}/products/${productId}`, data)
.then(response =>response.json())
.then(data => console.log("Dato actualizado  ID:"+ productId))
.catch(error => console.error('Error: ', error))



// Metodo delete
import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

const deletePoductId = 100;

function deleteData(urlApi){
    const response = fetch(urlApi, {
        method:'DELETE',
        hears: {
            'Content-type' : 'application/json'
        }
    });
    return response;
}

deleteData(`${API}/products/${deletePoductId}`)
.then(response => response.json())
.then(data => console.log("elemento eliminado: "+ deletePoductId))
.catch(error => console.error('Error', error))
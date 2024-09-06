const fnAsync = () => {
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=>{resolve('Async')},5000)
        : reject(new Error("Error"))
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log("Hello!")
}

console.log('Before');
anotherFn();
console.log('After');































const funcionAsync = () => {
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=>{resolve('Se cumplio la función')}, 2000)
        : reject('Reject')
    })
}

const funcionEspera = async () => {
    const llamarFuncion = await funcionAsync();
    console.log(llamarFuncion)
    console.log("2 nivel")
}

console.log("Inicio")
funcionEspera()
console.log("Fin")
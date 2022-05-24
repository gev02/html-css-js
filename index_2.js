const promesa = (edad) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2 segundos')
            if(edad >= 18){
                resolve( {usuario: 'Glendi'} )
            }else{
                reject('ha habido un error')
            }
            
        }, 3000)
    })
}

promesa(20).then((res)=>{
    console.log('respuesta de la promesa', res)
    return 'HOLA!'})

    .then((res)=>{
        console.log('recibo del then anterior', res)
    })

    .catch((e)=>{
        console.error('error que me devuelve la promesa', e)
    })
    
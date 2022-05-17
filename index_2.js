const promesa = (resultado) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2 segundos')
            if(resultado){
                resolve( {usuario: 'Glendi'} )
            }else{
                reject('ha habido un error')
            }
            
        }, 3000)
    })
}

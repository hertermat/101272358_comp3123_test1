// create bot methods with a promise inside 
const resolvePromise = () =>{
    let p1 = new Promise(function(resolve){
        resolve("message: 'delayed success!'")
    })

    p1.then(success=> {
        console.log(success)
    })
}

const rejectedPromise = () =>{
    let p2 = new Promise(function(reject){
        reject("error: 'delayed exception!'")
    })

    p2.then(error=> {
        console.log(error)
    })
}


//call setTimeout with method and time
setTimeout(resolvePromise,500)
setTimeout(rejectedPromise,500)








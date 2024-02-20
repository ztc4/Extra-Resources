

let response = null

try{
let items = store.map((current, index) => index+ "." + item)
 response = items
}
catch(e){
    console.log("Couldn't properly")
    response = false
}
finally{
    console.log(response)
}
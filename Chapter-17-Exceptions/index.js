

let db = {
    queryId : (id)=>{
        if(id > 0){
            return " found the user"
        }else{
            return null
        }
        
    }
}

// This is just to simulate
try{
    let user = db.query()
    if(user == null){
        throw new Error(" The isn't valid")
    } 
    return user


}
catch{
    return " Couldn't fetch the user"

}
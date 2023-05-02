
// For Add Item to Cart
export const addCart = (animal) =>{
    return {
        type:"ADDITEM",
        payload:animal
    }
    
}

// For Delete Item to Cart
export const delCart = (animal) =>{
    return {
        type:"DELITEM",
        payload:animal
    }
}
// For resetting the Cart
export const resetCart = () =>{
    return {
        type:"RESET"       
    }
}
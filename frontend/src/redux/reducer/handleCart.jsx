const cart = []

const handleCart = (state=cart, action) =>{
    const animal = action.payload
    switch(action.type){
        case "ADDITEM":
            // Check if product already in cart
            const exist = state.find((x) => x.id === animal.id)
            if(exist){
                // Increase the quantity
                return state.map((x)=>x.id ===animal.id?{...x, qty: x.qty+1}:x)
            }
            else{
                return [...state, {...animal, qty:1}]
            }
            break;
        case "DELITEM":
            const exist2 = state.find((x) => x.id === animal.id)
            if(exist2.qty === 1){
                return state.filter((x)=>x.id!==exist2.id)
            }
            else{
                return state.map((x)=> x.id===animal.id?{...x, qty:x.qty-1}:x)
            }
            break;

        default:
            return state
            break;
    }
}

export default handleCart
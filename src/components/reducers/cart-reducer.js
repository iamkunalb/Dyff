import db from '../../Config'


const reducer = (state, action) => {
    
    let gg = []
    db.collection('products').get().then(
        snapshot => {
            snapshot.docs.forEach(doc => {
                gg.push(doc.data());
            })
        }
    )
    if (state === undefined){
        return{
            forSale: gg,
            cart: []
        }
    }

    state.forSale = gg;

    switch (action.type){
        case 'ADD_TO_CART': {
            const cart = [...state.cart, action.item]
            return {
                ...state,
                cart
            }
        }
        case 'REMOVE_FROM_CART': {
            const cart = [...state.cart]
            cart.splice(action.item, 1)
            return {
                ...state,
                cart
            }
        }
        default: {
            return state
        }
    }
}

export default reducer
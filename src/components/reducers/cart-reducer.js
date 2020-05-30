import db from '../../Config'

let gg = []
db.collection('products').get().then(
    snapshot => {
        snapshot.docs.forEach(doc => {
            gg.push(doc.data());
        })
    }
)

const reducer = (state, action) => {
    console.log(action)
    if (state === undefined){
        return{
            forSale: gg,
            cart: []
        }
    }

    switch (action.type){
        case 'ADD_TO_CART': {
            const cart = [...state.cart, action.item]
            return {
                ...state,
                cart
            }
        }
        case 'REMOVE_FROM_CART': {
            const cart = [...state.cart, action.item]
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
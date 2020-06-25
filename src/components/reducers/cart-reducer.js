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

    let codes = []
    db.collection('coupons').get().then(
        snapshot => {
            snapshot.docs.forEach(doc => {
                codes.push(doc.data());
            })
        }
    )

    console.log(codes)

    if (state === undefined){
        return{
            forSale: gg,
            cart: [],
            codess: codes
        }
    }

    state.forSale = gg;
    state.codess = codes

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
        case 'EMPTY_CART': {
            const cart = []
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
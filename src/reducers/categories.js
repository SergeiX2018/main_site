const initState = {
    data:[]
}


const categories = (state = initState, action) => {
    switch (action.type) {
        case "CATEGORIES_FETCH_SUCCESS" : {

            return Object.assign({},state,{data:action.message})

        }
        case "CATEGORIES_FETCH_FAILED" : {
            return state
        }



        default:
            return state
    }
}

export default categories
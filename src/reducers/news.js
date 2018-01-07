const initState = {
    data:[]
}


const news = (state = initState, action) => {
    switch (action.type) {
        case "NEWS_FETCH_SUCCESS" : {

            return Object.assign({},state,{data:action.message})

        }
        case "NEWS_FETCH_FAILED" : {
            return state
        }



        default:
            return state
    }
}

export default news
const initState = {
    data:[]
}


const article = (state = initState, action) => {
    switch (action.type) {
        case "ARTICLE_FETCH_SUCCESS" : {

            return Object.assign({},state,{data:action.message})

        }
        case "ARTICLE_FETCH_FAILED" : {
            return state
        }



        default:
            return state
    }
}

export default article
const initState = {
    result:null
}


const news = (state = initState, action) => {
    switch (action.type) {
        case "REGISTRATION_FETCH_SUCCESS" : {

            return Object.assign({},state,{result:action.message.result})

        }
        case "REGISTRATION_FETCH_FAILED" : {
            return state
        }



        default:
            return state
    }
}

export default registration
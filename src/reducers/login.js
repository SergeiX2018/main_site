
const initState = {
result:null
}


const login = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_FETCH_SUCCESS" : {

            return Object.assign({},state,{result:action.message.result})

        }
        case "LOGIN_FETCH_FAILED" : {
            return state
        }



        default:
            return state
    }
}

export default login
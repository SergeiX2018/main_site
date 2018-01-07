const initState = {
    data:[]
}


const video = (state = initState, action) => {
    switch (action.type) {
        case "VIDEO_FETCH_SUCCESS" : {

            return Object.assign({},state,{data:action.message})

        }
        case "VIDEO_FETCH_FAILED" : {
            return state
        }



        default:
            return state
    }
}

export default video
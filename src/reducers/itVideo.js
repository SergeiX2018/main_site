const initState = {
    data:[]
}


const itVideo = (state = initState, action) => {
    switch (action.type) {
        case "IT_VIDEO_FETCH_SUCCESS" : {

            return Object.assign({},state,{data:action.message})

        }
        case "IT_VIDEO_FETCH_FAILED" : {
            return state
        }



        default:
            return state
    }
}

export default itVideo
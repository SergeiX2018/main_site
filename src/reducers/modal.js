const initState = {
isShow:false,
}


const modal = (state = initState, action) => {
    switch (action.type) {
        case 'MODAL_SHOW':{
            return {isShow:true}
        }
        case 'MODAL_CLOSE':{
            return {isShow:false}
        }


        default:
            return state
    }
}

export default modal
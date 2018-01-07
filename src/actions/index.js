export const modalShow = ()=>({
    type:'MODAL_SHOW'

})
export const modalClose = ()=>({
    type:'MODAL_CLOSE'

})
export const loginRequest = (data)=>({
    type:'LOGIN_FETCH_REQUESTED',
    data

})

export const registrationRequest = (data)=>({
    type:'REGISTRATION_FETCH_REQUESTED',
    data

})
export const newsRequest = (data)=>({
    type:'NEWS_FETCH_REQUESTED',
    data

})

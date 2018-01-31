import * as LocaleType from "./../constants/LocaleType"


const initState = {
    localeKey: LocaleType.RU,
}

const locale = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_LOCALE':{
            return {localeKey:action.data}
        }



        default:
            return state
    }
}

export default locale
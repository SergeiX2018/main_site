import * as LocaleType from "./../constants/LocaleType"


const initState = {
    locale: LocaleType.RU,
}

const locale = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_LOCALE':{
            return {locale:action.data}
        }



        default:
            return state
    }
}

export default locale
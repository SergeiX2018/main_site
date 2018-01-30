import en from "./en.json"
import ru from "./ru.json"
import * as LocaleType from "./../constants/LocaleType"
export default class Localization {
    static getText(key,locale) {
        let dict;
        if(locale === LocaleType.RU ) {
            dict = ru
        }
        else if(locale === LocaleType.EN)
        {
             dict = en
        }


        return dict[key]
    }
}
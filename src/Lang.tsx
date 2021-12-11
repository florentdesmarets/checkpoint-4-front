import React, { ChangeEvent, useState } from "react"
import { useTranslation } from 'react-i18next';
import { Language } from './Language';
import "./Lang.css"
 
const Lang = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState<Language>(i18n.language as Language);
    
 
    let changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        let language = event.target.value;
 
        switch (language) {
            case Language.EN:
                setLang(Language.EN);
                i18n.changeLanguage(Language.EN);
                break;
            case Language.FR:
            default:
                setLang(Language.FR);
                i18n.changeLanguage(Language.FR);
                break;
        }
    }
 
    return (
        <div className="lang-container">
            <div>
                <select className="lang-selector" value={lang} name="language" onChange={changeLanguage}>
                    <option className="flag" value={Language.FR}>🇫🇷</option>
                    <option className="flag" value={Language.EN}>🇬🇧</option>
                </select>
            </div>
        </div>
    )
}
 
export default Lang;
import "./Fourzerofour.css"
import { useTranslation } from "react-i18next";


export default function Fourzerofour() {

    const { t } = useTranslation();

    return (
        <div className="fourzerofour-container">
            <h1 className="fourzerofour-first-title">Error - 404</h1>
            <img alt="cat" className="fourzerofourcat" src="https://github.com/florentdesmarets/Image-storage/blob/main/Portfolio%20Website/catvener.gif?raw=true"/>
            <h1 className="fourzerofour-title">{t('common.translated-404')} </h1>
        </div>
    )

}
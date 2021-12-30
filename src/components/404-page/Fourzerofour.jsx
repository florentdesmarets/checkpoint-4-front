import "./Fourzerofour.css"
import { useTranslation } from "react-i18next";
import Background from "../background/Background";


export default function Fourzerofour() {

    const { t } = useTranslation();

    return (
        <div className="fourzerofour-container">
            <Background/>
            <h1 className="fourzerofour-first-title">Error - 404</h1>
            <img alt="red" className="fourzerofourcat" src="https://github.com/florentdesmarets/Image-storage/blob/main/Portfolio%20Website/Amongusred.png?raw=true"/>
            <h1 className="fourzerofour-title">{t('common.translated-404')} </h1>
        </div>
    )

}
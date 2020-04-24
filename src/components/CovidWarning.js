import React from 'react';
import { Link } from 'react-router-dom';

import './covidWarning.css';
import warning from '../assets/warning.png';

const CovidWarning = () => {
    return (
        <div id="covid-warning">
            <div id="warning-wrapper">
                <img src={warning} alt="warning icon" />
            </div>
            <div id="warning-content">
                <p id="warning-title">Dans cette période difficile, Nestranny Conseil poursuit son activité et accompagne à distance les TPE-PME pour évaluer et limiter l’impact de la crise sanitaire du COVID-19 :</p>
                <ul>
                    <li>Préserver les activités compatibles avec le confinement</li>
                    <li>Préserver les marges (ajustements des prix et baisse des charges variables)</li>
                    <li>Diminuer les charges fixes</li>
                    <li>Augmenter le fond de roulement, et en diminuer le besoin</li>
                    <li>Assurer la solvabilité</li>
                    <li>Identifier l’impact de la crise sur le seuil de rentabilité et mise en place de mesures correctives</li>
                </ul>
                <p style={{ textAlign: 'start', color: 'white', fontSize: '15px' }}>
                    <Link to="/contact" id='covid-contact'>Contactez-nous,</Link>nous nous engageons à vous apporter les premiers éléments d’étude dans les plus brefs délais.
                </p>
            </div>
        </div>
    );
}

export default CovidWarning;
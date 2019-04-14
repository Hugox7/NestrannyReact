import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Public.css';

const Public = () => {
    return (
        <div className="public">
            <div className="public-head">
                <h2 className="title-public">Formations Secteur Public</h2>
                <p className="text-public">Dans un contexte de raréfaction des ressources des collectivités locales, nous vous proposons d'optimiser la gestion financière de votre collectivité, et de mieux en maîtriser les différentes activités. Atteindre cet objectif passe par un renforcement des compétences des agents. C'est à cette fin que nous mettons en oeuvre des formations sur mesure, spécifiquement adaptées au public et à vos structures.</p>
                <p>Nous proposons 20 formations :</p>
            </div>
            <Link><div className="file-link">1 - Initiation aux finances locales</div></Link>
            <Link><div className="file-link">2 - Comptabilité d'engagement</div></Link>
            <Link><div className="file-link">3 - M14, Comptabilité communale</div></Link>
            <Link><div className="file-link">4 - Les Autorisations de Programme et les crédits de Paiement (AP/CP)</div></Link>
            <Link><div className="file-link">5 - Monter son budget de service</div></Link>
            <Link><div className="file-link">6 - Le Débat d’Orientations Budgétaires (DOB)</div></Link>
            <Link><div className="file-link">7 - Le budget du Service scolaire et de la Caisse des écoles</div></Link>
            <Link><div className="file-link">8 - Le budget du Service enfance et de la petite enfance</div></Link>
            <Link><div className="file-link">9 - Le budget des Services techniques</div></Link>
            <Link><div className="file-link">10 - Les régies d'avances et de recettes</div></Link>
            <Link><div className="file-link">11 - Les outils du contrôle de gestion</div></Link>
            <Link><div className="file-link">12 - Les tableaux de bord</div></Link>
            <Link><div className="file-link">13 - La comptabilité analytique et le calcul des coûts</div></Link>
            <Link><div className="file-link">14 - Le guide des procédures</div></Link>
            <Link><div className="file-link">15 - L'exécution financière des marchés publics</div></Link>
            <Link><div className="file-link">16 - Les marchés à procédure adaptéeLes marchés à procédure adaptée (MAPA)</div></Link>
            <Link><div className="file-link">18 - Le contrôle financier des associations</div></Link>
            <Link><div className="file-link">19 - Analyse et stratégie financière</div></Link>
            <Link><div className="file-link">20 - Elaborer le budget d’une commune de moins de 5.000 habitants</div></Link>
        </div>
    );
};

export default Public;
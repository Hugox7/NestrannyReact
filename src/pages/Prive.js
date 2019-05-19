import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Prive.css';

const Prive = () => {
    return (
        <div className="prive">
            <div className="prive-head">
                <h2 className="title-prive">Formations Secteur Privé</h2>
                 <p className="text-prive">Dans un contexte économique tendu, où la maîtrise des coûts et la pérénnisation des marges restent des objectifs vitaux pour assurer la rentabilité des entreprises, nous vous proposons d'en optimiser la gestion opérationnelle et de mieux en maîtriser l'activité. Atteindre cet objectif passe par un renforcement des compétences des collaborateurs en matière de gestion. C'est à cette fin que nous mettons en place des formations sur mesure, spécifiquement adaptées aux entreprises.</p>
                 <p>Nous proposons 10 formations parmi les thèmes suivants :</p>
            </div>
            <Link><div className="file-link">1 - Les outils du contrôle de gestion</div></Link>
            <Link><div className="file-link">2 - Les tableaux de bord</div></Link>
            <Link><div className="file-link">3 - La comptabilité analytique et le calcul des coûts</div></Link>
            <Link><div className="file-link">4 - Vendre aux collectivités locales</div></Link>
            <Link><div className="file-link">5 - Répondre à un marché public</div></Link>
            <Link><div className="file-link">6 - Analyser les états de gestion</div></Link>
            <Link><div className="file-link">7 - Les fondamentaux de la gestion</div></Link>
            <Link><div className="file-link">8 - Les chiffres clés de la gestion</div></Link>
            <Link><div className="file-link">9 - Les finances pour les non-financiers</div></Link>
            <Link><div className="file-link">10 - Analyse des éléments de rentabilité client</div></Link>
        </div>
    );
};

export default Prive;
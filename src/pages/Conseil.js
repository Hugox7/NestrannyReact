import React from 'react';
//import { Row, Col } from 'react-bootstrap';
//import { Link } from 'react-router-dom';

import './Conseil.css';


const Conseil = () => {
    return (
        <div className="conseil">
            <div className="conseil-head">
                <h2 className="title-conseil">Conseils, Etudes et Audits</h2>
                <p className="text-conseil">Face à la nécessité de maîtriser vos dépenses/charges et vos recettes/produits, nous vous proposons de vous accompagner dans la mise en oeuvre d'outils de gestion à portée stratégique (analyses financières, rétrospectives et prospectives...) ou opérationnelle (indicateurs/KPI, tableaux de bord d'activité, comptabilité analytique...) Nos solutions s'accompagnent du développement des outils, de leur pérennisation et de leur maintenance.</p>
            </div>
            <div className="sousconseil-head">
                <h6 className="title-assistance">Nos domaines de compétences</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Réalisation d'un audit financier</li>
                <li class="list-group-item">Analyse financière rétrospective</li>
                <li class="list-group-item">Mise en place d'une stratégie financière</li>
                <li class="list-group-item">Réalisation d'un audit des associations</li>
                <li class="list-group-item">Audit de la comptabilité d'engagement</li>
                <li class="list-group-item">Mise en oeuvre des autorisations de programme / crédits de paiement</li>
                <li class="list-group-item">Définition d'un guide des procédures financières et comptables</li>
                <li class="list-group-item">Mise en place d'une comptabilité analytique</li>
                <li class="list-group-item">Mise en place et pérennisation des tableaux de bord opérationnels</li>
                <li class="list-group-item">Assistance à la mise en place de tableaux de bord comptables et financiers</li>
                <li class="list-group-item">Définition et mise en place d'un programme de maîtrise des dépenses</li>
                <li class="list-group-item">Optimisation des outils de gestion du patrimoine</li>
                <li class="list-group-item">Définition et mise en place d'outils de communication financière interne</li>
                <li class="list-group-item">Définition et mise en place d'outils de communication financière externe</li>
                <li class="list-group-item">Conception et présentation de rapports financiers</li>
                        
            
            {/*<div className="sousconseil-head">
               <h6 className="title-assistance">Le contrôle de gestion pour les entreprises du secteur privé :</h6>
            </div>
                <li class="list-group-item">Mise en place d'une comptabilité analytique</li>
                <li class="list-group-item">Mise en place et pérennisation des tableaux de bord opérationnels</li>
                <li class="list-group-item">Assistance à la mise en place de tableaux de bord comptables et financiers</li>
                <li class="list-group-item">Définition et mise en place d'un programme de maîtrise des dépenses</li>
                <li class="list-group-item">Optimisation des outils de gestion du patrimoine</li> */}
        </ul> 
    </div> 
    );
};

export default Conseil;
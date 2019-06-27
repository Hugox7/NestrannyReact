import React from 'react';
import { Button } from 'react-bootstrap';
import { 
    auditanalyseData, 
    auditfiabiliserData, 
    auditcontrolerData, 
    auditcommuniquerData, 
    auditpilotezData,
    auditeloborerData
} from '../auditData';
import ConseilModal from '../components/ConseilModal';

import './Conseil.css';


class Conseil extends React.Component {


    render() {
        return (
            <div className="conseil" style={{ paddingTop: '76px', backgroundColor: '#e8e8e8' }}>
                <div id="conseil-head">
                        <div id="conseil-text">
                            <h2 className="title-conseil">Conseil, Etudes et Audit</h2>
                            <div style={{ height: '2px',backgroundColor: 'white', width: '70%' }} />
                            <p className="text-conseil">Face à la nécessité de maîtriser vos dépenses/charges et vos recettes/produits, nous vous proposons de vous accompagner dans la mise en oeuvre d'outils de gestion à portée stratégique (analyses financières, rétrospectives et prospectives...) ou opérationnelle (indicateurs/KPI, tableaux de bord d'activité, comptabilité analytique...) Nos solutions s'accompagnent du développement des outils, de leur pérennisation et de leur maintenance.</p>
                        </div>
                        <div id="image-box">
                            <img alt="img bandeau conseil" src={require('../assets/img/galery/imageprems.jpg')} />
                        </div>
                    </div>
    
                    <div id="conseil-head-mobile">
                        <div id="conseil-text-mobile">
                            <h2 className="title-conseil">Conseil, Etudes et Audits</h2>
                            <div style={{ height: '2px',backgroundColor: 'white', width: '100%', margin: '5px 0' }} />
                            <p className="text-conseil">Face à la nécessité de maîtriser vos dépenses/charges et vos recettes/produits, nous vous proposons de vous accompagner dans la mise en oeuvre d'outils de gestion à portée stratégique (analyses financières, rétrospectives et prospectives...) ou opérationnelle (indicateurs/KPI, tableaux de bord d'activité, comptabilité analytique...). Nos solutions s'accompagnent du développement des outils, de leur pérennisation et de leur maintenance.</p>
                        </div>
                    </div>
    
                    <div id="content">
                        
                                <div id='container'>
                                    <div style={{ marginBottom: '30px', fontSize: '25px', color: '#fc9b1d' }}>
                                        ANALYSEZ ET SUIVEZ VOS FINANCES
                                    </div>
                                    <div className="infos-card">
                                        <p>Réalisation d'un audit financier</p>
                                        <p>Analyse financière</p>
                                        <p>Mise en place d'une stratégie financière</p>
                                        <p>Externalisation de la fonction financière</p>
                                    </div>
                                        {auditanalyseData.map(conseil => {
                                            return <ConseilModal conseil={conseil} />
                                        })}
                                </div>
                           
                                <div id='container'>
                                    <div style={{ marginBottom: '30px', fontSize: '25px', color: '#fc9b1d' }}>
                                        FIABILISEZ VOS PROCÉDURES COMPTABLES
                                    </div>
                                    <div className="infos-card">
                                        <p>Audit de la comptabilité d'engagement</p>
                                        <p>Optimisation de la procédure de préparation budgétaire</p>
                                        <p>Mise en oeuvre des autorisations de programme et des crédits de paiement</p>
                                        <p>Définition d'un guide des procédures financières et comptables</p>
                                    </div>
                                    <div>
                                        {auditfiabiliserData.map(conseil => {
                                            return <ConseilModal conseil={conseil} />
                                        })}
                                    </div>
                                    
                                </div>
                            
                                <div id='container'>
                                    <div style={{ marginBottom: '30px', fontSize: '25px', color: '#fc9b1d' }}>
                                        CONTRÔLEZ VOTRE GESTION
                                    </div>
                                    <div className="infos-card">
                                        <p>Mise en place d'une comptabilité analytique</p>
                                        <p>Mise en place de la pérennisation des tableaux de bord opérationnels</p>
                                        <p>Assistance à la mise en place des tableaux de bord comptables et financiers</p>
                                        <p>Définition et mise en place d'un programme de maîtrise des dépenses</p>
                                        <p>Optimisation des outils de gestion du patrimoine</p>
                                    </div>
                                    <div>
                                        {auditcontrolerData.map(conseil => {
                                            return <ConseilModal conseil={conseil} />
                                        })}
                                    </div>
                                </div>
                            
                                <div id='container'>
                                    <div style={{ marginBottom: '30px', fontSize: '25px', color: '#fc9b1d' }}>
                                        COMMUNIQUEZ <br />SUR VOS FINANCES
                                    </div>
                                    <div className="infos-card">
                                        <p>Définition et mise en place d'outils de communication financière interne</p>
                                        <p>Définition et mise en place d'outils de communication financière externe</p>
                                        <p>Conception et présentation de rapports financiers</p>                                    
                                    </div>
                                    <div>
                                        {auditcommuniquerData.map(conseil => {
                                            return <ConseilModal conseil={conseil} />
                                        })}
                                    </div>
                                </div>
                            
                                <div id='container'>
                                    <div style={{ marginBottom: '30px', fontSize: '25px', color: '#fc9b1d' }}>
                                        PILOTEZ LA GESTION DE <br />VOS ASSOCIATIONS
                                    </div>
                                    <div className="infos-card">
                                        <p>Contrôle financier et juridique des associations</p>
                                        <p>Réalisation d'un audit comptable, financier et juridique pour les associations</p>
                                    </div>
                                    <div>
                                        {auditpilotezData.map(conseil => {
                                            return <ConseilModal conseil={conseil} />
                                        })}
                                    </div>
                                </div>
    
                                <div id='container'>
                                    <div style={{ marginBottom: '30px', fontSize: '25px', color: '#fc9b1d' }}>
                                        ÉLABOREZ OU RÉPONDEZ <br />À UN MARCHÉ PUBLIC
                                    </div>
                                    <div className="infos-card">
                                        <p>Aide et assistance à la rédaction des pièces administratives d'un marché public</p>
                                        <p>Aide et assistance au montage d'un marché de nettoyage des bâtiments publics</p>
                                        <p>Aide et assistance au montage d'un marché de restauration collective</p>
                                        <p>Accompagnement et assistance pour la réponse administrative à un marché public</p>
                                    </div>
                                    <div style={{ width: '100%', height: '100%' }}>
                                        {auditeloborerData.map(conseil => {
                                            return <ConseilModal conseil={conseil} />
                                        })}
                                    </div>
                                </div>
                    </div>   
                </div>
        );
    }
    
};

export default Conseil;
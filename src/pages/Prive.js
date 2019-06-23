import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { 
    priveMarchepublicData, 
    priveFondamentauxData, 
    priveAnalyseData, 
} from '../priveData';
import FormationsModal from '../components/FormationsModal';
import './Prive.css';
import './Prive.css';

class Prive extends React.Component {

    render() {
        return (                
<div className="prive" style={{ paddingTop: '76px', backgroundColor: '#e8e8e8' }}>
                <div id="prive-head">
                    <div id="prive-text">
                        <h2 className="title-prive">Formations Secteur Privé</h2>
                        <div style={{ height: '2px',backgroundColor: 'white', width: '70%' }} />
                        <p className="text-prive">Dans un contexte de raréfaction des ressources des collectivités locales, nous vous proposons d'optimiser la gestion financière de votre collectivité, et de mieux en maîtriser les différentes activités. Atteindre cet objectif passe par un renforcement des compétences des agents. C'est à cette fin que nous mettons en oeuvre des formations sur mesure, spécifiquement adaptées au public et à vos structures.</p>
                    </div>
                    <div id="image-box">
                    <img src={require('../assets/img/galery/image2light.jpg')} />
                    </div>
                </div>

                <div id="prive-head-mobile">
                    <div id="prive-text-mobile">
                        <h2 className="title-prive">Formations Secteur Privé</h2>
                        <div style={{ height: '2px',backgroundColor: 'white', width: '100%', margin: '5px 0' }} />
                        <p className="text-prive">Dans un contexte de raréfaction des ressources des collectivités locales, nous vous proposons d'optimiser la gestion financière de votre collectivité, et de mieux en maîtriser les différentes activités. Atteindre cet objectif passe par un renforcement des compétences des agents. C'est à cette fin que nous mettons en oeuvre des formations sur mesure, spécifiquement adaptées au public et à vos structures.</p>
                    </div>
                </div>

                <div id="content">
                    
                            <div id='container'>
                                <div style={{ marginBottom: '30px', fontSize: '25px', color: 'darkcyan' }}>
                                    MARCHE PUBLIC
                                </div>
                                <div>
                                    {priveMarchepublicData.map(formation => {
                                        return <FormationsModal formation={formation} />
                                    })}
                                </div>
                            </div>
                       
                            <div id='container'>
                                <div style={{ marginBottom: '30px', fontSize: '25px', color: 'darkcyan' }}>
                                    FONDAMENTAUX DE GESTION
                                </div>
                                <div>
                                    {priveFondamentauxData.map(formation => {
                                        return <FormationsModal formation={formation} />
                                    })}
                                </div>
                            </div>
                        
                            <div id='container'>
                                <div style={{ marginBottom: '30px', fontSize: '25px', color: 'darkcyan' }}>
                                    ANALYSE DE GESTION
                                </div>
                                <div>
                                    {priveAnalyseData.map(formation => {
                                        return <FormationsModal formation={formation} />
                                    })}
                                </div>
                            </div>                                              
                </div>   
            </div>                                
        );
    }
}

                   
export default Prive;
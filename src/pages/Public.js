import React from 'react';
//import { Link } from 'react-router-dom';
import { 
    publicBudgetData, 
    publicComptabiliteData, 
    publicMarchepublicData, 
    publicControlegestionData, 
    publicAnalysefinanciereData,
} from '../publicData';
import FormationsModal from '../components/FormationsModal';
import './Public.css';
import publicPic from '../assets/public-section.jpg';

class Public extends React.Component {

    state = {
        show: false,
    }

    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
    }
    

    render() { 
        return (
            <div className="public" style={{ paddingTop: '76px', backgroundColor: '#e8e8e8' }}>
                <div id="public-head">
                    <div id="public-text">
                        <h2 className="title-public">Formations Secteur Public</h2>
                        <div style={{ height: '2px',backgroundColor: 'white', width: '70%' }} />
                        <p className="text-public">Dans un contexte de raréfaction des ressources des collectivités locales, nous vous proposons d'optimiser la gestion financière de votre collectivité, et de mieux en maîtriser les différentes activités. Atteindre cet objectif passe par un renforcement des compétences des agents. C'est à cette fin que nous mettons en oeuvre des formations sur mesure, spécifiquement adaptées au public et à vos structures.</p>
                    </div>
                    <div id="image-box">
                        <img alt="img bandeau public" src={publicPic} />
                    </div>
                </div>

                <div id="public-head-mobile">
                    <div id="public-text-mobile">
                        <h2 className="title-public">Formations Secteur Public</h2>
                        <div style={{ height: '2px',backgroundColor: 'white', width: '100%', margin: '5px 0' }} />
                        <p className="text-public">Dans un contexte de raréfaction des ressources des collectivités locales, nous vous proposons d'optimiser la gestion financière de votre collectivité, et de mieux en maîtriser les différentes activités. Atteindre cet objectif passe par un renforcement des compétences des agents. C'est à cette fin que nous mettons en oeuvre des formations sur mesure, spécifiquement adaptées au public et à vos structures.</p>
                    </div>
                </div>

                <div id="content">
                    
                            <div className='container'>
                                <div style={{ marginBottom: '30px', fontSize: '25px', color: '#035913' }}>
                                    CONTRÔLE DE GESTION
                                </div>
                                <div>
                                    {publicControlegestionData.map(formation => {
                                        return <FormationsModal formation={formation} />
                                    })}
                                </div>
                            </div>
                       
                            <div className='container'>
                                <div style={{ marginBottom: '30px', fontSize: '25px', color: '#035913' }}>
                                    COMPTABILITÉ
                                </div>
                                <div>
                                    {publicComptabiliteData.map(formation => {
                                        return <FormationsModal formation={formation} />
                                    })}
                                </div>
                            </div>
                        
                            <div className='container'>
                                <div style={{ marginBottom: '30px', fontSize: '25px', color: '#035913' }}>
                                    BUDGET
                                </div>
                                <div>
                                    {publicBudgetData.map(formation => {
                                        return <FormationsModal formation={formation} />
                                    })}
                                </div>
                            </div>
                        
                            <div className='container'>
                                <div style={{ marginBottom: '30px', fontSize: '25px', color: '#035913' }}>
                                    MARCHÉS PUBLICS
                                </div>
                                <div>
                                    {publicMarchepublicData.map(formation => {
                                        return <FormationsModal formation={formation} />
                                    })}
                                </div>
                            </div>
                        
                            <div className='container'>
                                <div style={{ marginBottom: '30px', fontSize: '25px', color: '#035913' }}>
                                    ANALYSE FINANCIÈRE
                                </div>
                                <div>
                                    {publicAnalysefinanciereData.map(formation => {
                                        return <FormationsModal formation={formation} />
                                    })}
                                </div>
                            </div>
                </div>   
            </div>
        );
    }
};

export default Public;
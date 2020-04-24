import React from 'react';
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
                        <p className="text-prive">Dans un contexte économique tendu, où la maîtrise des coûts et la pérennisation des marges restent des objectifs vitaux pour assurer la rentabilité des entreprises, nous vous proposons d'en optimiser la gestion opérationnelle et de mieux en maîtriser l'activité. Atteindre cet objectif passe par un renforcement des compétences des différents collaborateurs en matière de gestion. C'est à cette fin que nous mettons des formations sur mesure, spécifiquement adaptées aux entreprises.</p>
                    </div>
                    <div id="image-box">
                    <img alt="img bandeau secteur prive" src={require('../assets/img/galery/image2light.jpg')} />
                    </div>
                </div>

                <div id="prive-head-mobile">
                    <div id="prive-text-mobile">
                        <h2 className="title-prive">Formations Secteur Privé</h2>
                        <div style={{ height: '2px',backgroundColor: 'white', width: '100%', margin: '5px 0' }} />
                        <p className="text-prive">Dans un contexte économique tendu, où la maîtrise des coûts et la pérennisation des marges restent des objectifs vitaux pour assurer la rentabilité des entreprises, nous vous proposons d'en optimiser la gestion opérationnelle et de mieux en maîtriser l'activité. Atteindre cet objectif passe par un renforcement des compétences des différents collaborateurs en matière de gestion. C'est à cette fin que nous mettons des formations sur mesure, spécifiquement adaptées aux entreprises.</p>
                    </div>
                </div>

                <div id="content">
                    
                            <div className='container'>
                                <div style={{ marginBottom: '30px', fontSize: '25px', color: 'darkcyan' }}>
                                    MARCHÉS PUBLICS
                                </div>
                                <div>
                                    {priveMarchepublicData.map(formation => {
                                        return <FormationsModal formation={formation} />
                                    })}
                                </div>
                            </div>
                       
                            <div className='container'>
                                <div style={{ marginBottom: '30px', fontSize: '25px', color: 'darkcyan' }}>
                                    FONDAMENTAUX DE GESTION
                                </div>
                                <div>
                                    {priveFondamentauxData.map(formation => {
                                        return <FormationsModal formation={formation} />
                                    })}
                                </div>
                            </div>
                        
                            <div className='container'>
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
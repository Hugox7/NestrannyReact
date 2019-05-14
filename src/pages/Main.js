import React from 'react';

import Parallax from '../components/Parallax';
import Cards from '../components/Cards';
// import Contact from '../components/Contact';
import Picto from '../components/Picto';
import KeyFacts from '../components/KeyFacts';

const Main = () => {
    return (
        <div>
            <Parallax />
            <Cards />
            <Picto />
            <KeyFacts />
        </div>
    );
}

export default Main;
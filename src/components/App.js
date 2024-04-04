import React, { useEffect } from 'react';
import Banner from './Banner'
import Title from './Title'
import Intro from './Intro'
import Language from './Language'
import Portfolio from './Portfolio'
import Diplomas from './Diplomas'
import Jobs from './Jobs'
import logoJC from '../assets/logoJC.jpg'

function App() {

  useEffect(() => {
    document.title = "Cotte Julien";
  }, []);

    return (
      <div>
        <Banner />
        <Title />
        <Intro />
        <Language />
        <Portfolio />
        <Diplomas />
        <Jobs />

      </div>
    )
}

export default App
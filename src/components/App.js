import React, { useRef,useEffect } from 'react';
import Banner from './Banner'
import Title from './Title'
import Intro from './Intro'
import Language from './Language'
import Portfolio from './Portfolio'
import Diplomas from './Diplomas'
import Jobs from './Jobs'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
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
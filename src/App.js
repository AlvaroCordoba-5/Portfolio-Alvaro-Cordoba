import React from 'react';
import {Route} from 'react-router-dom'

import Home from './components/Home/Home'



function App() {

  return (
    <React.Fragment>

  

<Route  exact path={"/"} component={Home}/>



</React.Fragment>
  );
}

export default App;

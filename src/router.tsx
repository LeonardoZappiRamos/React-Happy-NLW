import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanetsMap from './pages/OrphanatsMap'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanetsMap} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UserDashboard from './components/MainView/UserDashboard/UserDashboard';
import RFQs from './components/MainView/RFQs/RFQs';
import Rewards from './components/MainView/Rewards/Rewards';
import Help from './components/MainView/Help/Help';
import Vendors from './components/MainView/Vendors/Vendors';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={UserDashboard} />
      <Route exact path='/rfqs' component={RFQs} />
      <Route exact path='/vendors' component={Vendors} />
      <Route exact path='/rewards' component={Rewards} />
      <Route exact path='/help' component={Help} />
    </Switch>
  )
}

export default Routes
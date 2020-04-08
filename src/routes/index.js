import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../pages/Main/index';
import Register from '../pages/Register/index';
import Login from '../pages/Login/index';
import Desafio01 from '../pages/Desafio01/index';
import Admin from '../pages/Admin/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/desafio-1" isPrivate component={Desafio01} />
      <Route path="/admin" isPrivate component={Admin} />
    </Switch>
  );
}

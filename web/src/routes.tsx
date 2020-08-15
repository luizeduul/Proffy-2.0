import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Landing from './pages/Landing';
import Register from './pages/Register';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';


function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route exact path="/study" component={TeacherList} />
      <Route exact path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;
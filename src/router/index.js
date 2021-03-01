import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import {
  AntdMobile,
  PxToRem,
} from '../pages'

function RouterConfig() {
  return (
    <Router>
      <Switch>
        <Route component={AntdMobile} path='/antdmobile'/>
        <Route component={PxToRem} path='/pxtorem'/>
        <Redirect from='/' to="/pxtorem" />
      </Switch>
    </Router>
  )
}

export default RouterConfig
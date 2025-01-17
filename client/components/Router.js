import React from 'react'
import { Route, Switch } from 'react-router-dom'

import BlogView from 'Components/BlogView'
import FrontPage from 'Components/FrontPage'
import MessageView from 'Components/MessageView'

export default () => (
  <div className="content">
    <Switch>
      <Route exact path="/" component={FrontPage} />
      <Route path="/messages" component={MessageView} />
      <Route path="/blogs" component={BlogView} />
    </Switch>
  </div>
)

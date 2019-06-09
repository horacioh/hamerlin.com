import React from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'

function ClientsRoot() {
  return (
    <div>CLIENTS ROOT</div>
  )
}

interface ClientsProps {}

function Clients({ match }: RouteComponentProps<ClientsProps>) {
  return (
    <Switch>
      <Route exact path={match.path} component={ClientsRoot} />
    </Switch>
  )
}

export default Clients;

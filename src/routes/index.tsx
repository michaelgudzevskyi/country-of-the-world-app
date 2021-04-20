import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { HomeContainer } from '../containers'
// import { Home } from '../pages'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes

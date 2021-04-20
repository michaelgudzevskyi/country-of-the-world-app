import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Home } from '../pages'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes

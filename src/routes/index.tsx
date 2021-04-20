import { FC } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { HomeContainer } from '../containers'

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes

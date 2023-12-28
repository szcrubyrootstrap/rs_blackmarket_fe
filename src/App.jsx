import { Route, Switch } from 'wouter'

import Home from 'components/Home'
import Login from 'pages/Login'
import Registration from 'pages/Registration'
import ResetPassword from 'pages/ResetPassword'
import PasswordEmailConfirmation from 'pages/PasswordEmail'
import UpdatePassword from 'pages/UpdatePassword'
import UserContextProvider from 'contexts/UserContext'
import { urlPath } from 'src/setup'

const routes = [
  { component: Home, path: urlPath.home },
  { component: Login, path: urlPath.login },
  { component: UpdatePassword, path: urlPath.updatePassword },
  { component: Registration, path: urlPath.registration },
  { component: ResetPassword, path: urlPath.resetPassword },
  { component: PasswordEmailConfirmation, path: urlPath.passwordConfirmation },
]

function App() {
  return (
    <>
      <UserContextProvider>
        <Switch>
          {
            routes.map(({component, path}, index) => <Route key={index} component={component} path={path} />)
          }
        </Switch>
      </UserContextProvider>
    </>
  )
}

export default App

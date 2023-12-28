import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Dashboard from 'pages/Dashboard'
import Login from 'pages/Login'
import Registration from 'pages/Registration'
import ResetPassword from 'pages/ResetPassword'
import PasswordEmailConfirmation from 'pages/PasswordEmail'
import UpdatePassword from 'pages/UpdatePassword'
import UserContextProvider from 'contexts/UserContext'
import { urlPath } from 'src/setup'

const router = createBrowserRouter([
  { element: <Dashboard />, path: urlPath.dashboard },
  { element: <Login />, path: urlPath.login },
  { element: <UpdatePassword />, path: urlPath.updatePassword },
  { element: <Registration />, path: urlPath.registration },
  { element: <ResetPassword />, path: urlPath.resetPassword },
  { element: <PasswordEmailConfirmation />, path: urlPath.passwordConfirmation },
]);

function App() {
  return (
    <>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </>
  )
}

export default App

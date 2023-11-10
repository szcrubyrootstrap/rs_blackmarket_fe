import Login from 'components/Login'
import Registration from 'templates/SessionTemplate/registration'
import Template from 'templates/SessionTemplate/template'

export default function LoginPage () {
  return (
    <Template
      formComponent={Login}
      extraComponent={Registration}
    />
  )
}

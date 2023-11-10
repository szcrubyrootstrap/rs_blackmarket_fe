import Template from "templates/SessionTemplate/template"
import Registration from "components/Registration"
import Footer from "templates/SessionTemplate/footer"

export default function RegistrationPage () {
  return (
    <Template
      formComponent={Registration}
      footerComponent={Footer}
    />
  )
}

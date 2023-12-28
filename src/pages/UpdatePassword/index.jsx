import Template from "templates/SessionTemplate/template"
import UpdatePasswordForm from "components/UpdatePasswordForm"
import UpdatePasswordMessage from "components/UpdatePasswordForm/message"

export default function UpdatePassword () {
  return (
    <Template
      formComponent={UpdatePasswordForm}
      messageComponent={UpdatePasswordMessage}
    />
  )
}

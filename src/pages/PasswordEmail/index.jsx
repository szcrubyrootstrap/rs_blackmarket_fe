import Template from "templates/SessionTemplate/template"
import PasswordInstructions from "src/components/PasswordInstructions"

export default function PasswordEmail () {
  return (
    <Template
      formComponent={PasswordInstructions}
    />
  )
}

import { useEffect } from 'react'
import { useUserContext } from 'contexts/UserContext'
import IMAGES from 'images/images'
import Footer from 'templates/SessionTemplate/footer'
import { isRegistration, isLogin, isForgotPassword } from 'src/setup'

export default function Template ({formComponent: Form, extraComponent: Extra, messageComponent: Message}) {
  const {setRequestError} = useUserContext()

  useEffect(() => {
    setRequestError({ error: false, message: '' })
  }, [setRequestError])

  const pageClass = (componentName) => {
    if (isRegistration(componentName)){
      return 'registration-page'
    } else if (isLogin(componentName)) {
      return 'login'
    } else if (isForgotPassword(componentName)) {
      return 'reset-password'
    } else { return '' }
  }

  const containerType = (componentName) => isRegistration(componentName) ? '-registration' : '' ;

  return (
    <div className="background flex-column">
      <div className={`${pageClass(Form.name)} flex-column`}>
        <div className={`container${containerType(Form.name)} flex-column`}>
          <img src={IMAGES.union} alt="Black market logo" />
          { Message && <Message /> }
          <Form />
          <Footer formName={Form.name} />
        </div>
        {Extra && <Extra /> }
      </div>
    </div>
  )
}

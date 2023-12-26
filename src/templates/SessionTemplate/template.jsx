import { useEffect } from 'react'
import { useUserContext } from 'contexts/UserContext'
import IMAGES from 'images/images'
import Footer from 'templates/SessionTemplate/footer'
import { isRegistration, isLogin, isForgotPassword, isPasswordInstructions, isUpdatePassword } from 'src/setup'

export default function Template ({formComponent: MainContent, extraComponent: Extra, messageComponent: Message}) {
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
    } else if (isPasswordInstructions(componentName)) {
      return 'password-instructions'
    } else if (isUpdatePassword(componentName)) {
      return 'update-password'
    } else { return '' }
  }

  const containerType = (componentName) => isRegistration(componentName) ? '-registration' : '' ;

  return (
    <div className="background flex-column">
      <div className={`${pageClass(MainContent.name)} flex-column`}>
        <div className={`container${containerType(MainContent.name)} flex-column`}>
          <img src={IMAGES.union} alt="Black market logo" />
          { Message && <Message /> }
          <MainContent />
          <Footer formName={MainContent.name} />
        </div>
        {Extra && <Extra /> }
      </div>
    </div>
  )
}

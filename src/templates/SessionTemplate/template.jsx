import IMAGES from 'images/images'
import Footer from 'templates/SessionTemplate/footer'
import { isRegistration, isLogin } from 'src/setup'

export default function Template ({formComponent: Form, extraComponent: Extra}) {
  const pageClass = (componentName) => {
    if (isRegistration(componentName)){
      return 'registration-page'
    } else if (isLogin(componentName)) {
      return 'login'
    } else { return '' }
  }

  const containerType = (componentName) => {
    return isRegistration(componentName) ? '-registration' : ''
  }

  return (
    <div className="background flex-column">
      <div className={`${pageClass(Form.name)} flex-column`}>
        <div className={`container${containerType(Form.name)} flex-column`}>
          <img src={IMAGES.union} alt="Black market logo" />
          <Form />
          <Footer formName={Form.name} />
        </div>
        {Extra && <Extra /> }
      </div>
    </div>
  )
}

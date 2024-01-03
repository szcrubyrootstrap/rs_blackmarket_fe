import Eye from 'components/Icons/Eye'
import Search from 'components/Icons/Search'
import { capitalizeFirstLetter } from 'src/setup.js'

export default function Input ({label, type, value, name, className, placeholder, onChange, required, iconEvent, iconClass, iconTitle}) {
  const iconComponents = {
    'Search': Search,
    'Eye': Eye
  }
  const IconComponent = iconClass && iconComponents[capitalizeFirstLetter(iconClass)]

  return (
    <div className={`${className} flex-column`}>
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
      { iconClass &&
        <div className={`${iconClass}-icon`} onClick={iconEvent} title={iconTitle}>
          <IconComponent />
        </div>
      }
    </div>
  )
}

import Eye from 'components/Icons/Eye'

export default function Input ({label, type, value, name, className, placeholder, onChange, required, eyeIcon}) {
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
      { eyeIcon &&
        <div className="eye-icon" onClick={eyeIcon} title="Show password">
          <Eye />
        </div>
      }
    </div>
  )
}

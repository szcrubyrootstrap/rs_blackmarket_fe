export default function SubmitButton ({text, disabled}) {
  return (
    <button className="submit" type="submit" disabled={disabled}>
      {text}
    </button>
  )
}

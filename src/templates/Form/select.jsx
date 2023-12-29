export default function Select ({options, id}) {
  return (
    <select id={id}>
      {
        options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))
      }
    </select>
  )
}

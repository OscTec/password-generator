interface Props {
  isChecked: boolean
  toggleIsChecked: (includeLowercase: boolean) => void
  label: string
}

const Checkbox = ({ isChecked, toggleIsChecked, label }: Props) => {
  return (
    <div>
      <input
        id="default-checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={() => toggleIsChecked(!isChecked)}
        className="w-4 h-4"
      />
      <label htmlFor="default-checkbox">{label}</label>
    </div>
  )
}

export default Checkbox

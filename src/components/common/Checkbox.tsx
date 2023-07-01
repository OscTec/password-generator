interface Props {
  isChecked: boolean
  toggleIsChecked: (includeLowercase: boolean) => void
  label: string
}

const Checkbox = ({ isChecked, toggleIsChecked, label }: Props) => {
  return (
    <div className="flex items-center">
      <input
        id="default-checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={() => toggleIsChecked(!isChecked)}
        className="w-4 h-4 ml-2"
      />
      <label htmlFor="default-checkbox" className="pl-2">{label}</label>
    </div>
  )
}

export default Checkbox
